package ru.task.board.service;

import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import ru.task.board.dto.EmailDto;
import ru.task.board.dto.user.UserCreateDto;
import ru.task.board.dto.user.UserDto;
import ru.task.board.dto.user.UserUpdateDto;
import ru.task.board.entity.Authority;
import ru.task.board.entity.User;
import ru.task.board.exception.ConfirmCodeNotFoundException;
import ru.task.board.exception.EmailAlreadyExist;
import ru.task.board.exception.UserNotFoundException;
import ru.task.board.mapper.UserMapper;
import ru.task.board.repository.AdRepository;
import ru.task.board.repository.AuthorityRepository;
import ru.task.board.repository.UserRepository;
import ru.task.board.validation.EditUserAccessDeniedException;
import ru.task.board.validation.EmailValidation;

import java.time.OffsetDateTime;
import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Data
public class UserService {

  private final UserRepository userRepository;
  private final AuthorityRepository authorityRepository;
  private final AdRepository adRepository;

  private final UserMapper userMapper;

  private final MailSenderService mailSenderService;

  private final BCryptPasswordEncoder passwordEncoder;

  // Создание пользователя и добавления в БД
  public UserDto create(UserCreateDto request) {
    User user = userMapper.toUser(request);

    if (userRepository.findByEmail(user.getEmail()) != null)
      throw new EmailAlreadyExist();

    user.setPassword(passwordEncoder.encode(user.getPassword()));
    passwordEncoder.encode(Double.toString(Math.random()));

    OffsetDateTime time = OffsetDateTime.now();
    user.setCreatedAt(time);

    userRepository.save(user);
    authorityRepository.save(new Authority(user.getUsername(), "USER"));

    User newUser = userRepository.findByUsername(request.getUsername());
    if (newUser != null)
      sendConfirmEmail(newUser);

    return userMapper.userToUserDto(user);
  }

  private String sendConfirmEmail(User user) {
    String code = UUID.randomUUID().toString();

    user.setConfirmCode(code);
    userRepository.save(user);

    String text = "Здравствуйте! Вы прошли регистрацию на сайте localhost:3000\n" +
            "Для подтверждения своего аккаунта перейдите по ссылке: localhost:3000/user/confirm_account/" + code + "\n\n" +
            "Если это не Вы, тогда просто проигнорируйте письмо!";

    mailSenderService.sendSimpleMessage(user.getEmail(), "Подтверждение аккаунта e-board", text);

    return "Письмо для подтверждения аккаунта отправлено Вам на почту!\n"
            + "Проверьте свой почтовый ящик " + user.getEmail() +  ".";
  }

  // Удаления пользователя из БД по ID
  public void deleteById(Integer userId) {
    String username = userRepository.findById(userId).orElseThrow().getUsername();

    adRepository.deleteAdsByOwnerContaining(username);
    authorityRepository.deleteById(username);
    userRepository.deleteById(userId);
  }

  public UserDto update(Integer id, UserUpdateDto request) {
    //    User user = userMapper.userUpdateRequestToUserView(request, id, userById.getUsername());
    checkEditUserPermission(id);

    // Получаем имя пользователя по id, чтобы при редактировании администратором, имя пользователя не менялось на администратора
    User user = userRepository.findById(id).orElseThrow();

    user.setPassword(!request.getPassword().isBlank() ? passwordEncoder.encode(request.getPassword()) : user.getPassword());
    user.setAvatar(!request.getAvatar().isBlank() ? request.getAvatar() : user.getAvatar());

    userRepository.save(user);
    return userMapper.userToUserDto(user);
  }

  private String getCurrentUsername() {
    return (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
  }


  private void checkEditUserPermission(Integer id) {
    userRepository.findById(id).ifPresent(user -> {
      if (!user.getUsername().equals(getCurrentUsername()) && !isCurrentUserAdmin()) {
        throw new EditUserAccessDeniedException();
      }
    });
  }

  private boolean isCurrentUserAdmin() { return getCurrentUserRoles().contains("ADMIN"); }

  private List<String> getCurrentUserRoles() {
    return SecurityContextHolder
            .getContext()
            .getAuthentication()
            .getAuthorities()
            .stream()
            .map(GrantedAuthority::getAuthority).collect(Collectors.toList());
  }

  public UserDto confirmAccount(String code) {
    User user = userRepository.findByConfirmCode(code);

    if (user == null)
      throw new ConfirmCodeNotFoundException();

    user.setEnabled(true);
    user.setConfirmCode(null);
    userRepository.save(user);

    return userMapper.userToUserDto(user);
  }

  public String sendMailResetPassword(EmailDto request) {
    String email = request.getEmail();

    User user;
    if (isEmail(email))
      user = userRepository.findByEmail(email);
    else user = userRepository.findByUsername(email);

    if (user == null)
      throw new UserNotFoundException();

    String code = UUID.randomUUID().toString();

    user.setConfirmCode(code);
    userRepository.save(user);

    String text = "Здравствуйте! Вы отправил запрос на восстановление пароля на сайте localhost:3000\n" +
            "Для сброса пароля перейдите по ссылке: localhost:3000/user/reset_password/" + code + "\n\n" +
            "Если это не Вы, тогда просто проигнорируйте письмо!";

    mailSenderService.sendSimpleMessage(user.getEmail(), "Восстановление аккаунта e-board", text);
    return user.getEmail();
  }

  private boolean isEmail(String email) {
    return new EmailValidation(email).isValid();
  }

  public UserDto resetPassword(String password, String code) {
    User user = userRepository.findByConfirmCode(code);

    if (user == null)
      throw new ConfirmCodeNotFoundException();

    user.setPassword(passwordEncoder.encode(password));
    user.setConfirmCode(null);
    userRepository.save(user);

    return userMapper.userToUserDto(user);
  }

  public UserDto findUserByUsername(String username) {
    return userMapper.userToUserDto(userRepository.findByUsername(username));
  }

  public UserDto findUserById(Integer id) {
    return userMapper.userToUserDto(userRepository.findUserById(id));
  }
}
