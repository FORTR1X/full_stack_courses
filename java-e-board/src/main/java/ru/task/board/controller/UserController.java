package ru.task.board.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import ru.task.board.dto.*;
import ru.task.board.dto.user.UserCreateDto;
import ru.task.board.dto.user.UserDto;
import ru.task.board.dto.user.UserUpdateDto;
import ru.task.board.service.UserService;

import javax.validation.Valid;
import javax.validation.constraints.PositiveOrZero;

@Controller
@RequestMapping
@RequiredArgsConstructor
@Tag(name = "UserController", description = "API контролера по работе с пользователями")
@Validated
public class UserController {

  private final UserService userService;

  @Operation(description = "Регистрация")
  @PostMapping(
          value = "/registration",
          produces = {"application/json"},
          consumes = {"application/json"})
  public ResponseEntity<UserDto> createUser(
          @Parameter(description = "Запрос на регистрацию пользователя")
          @Valid @RequestBody UserCreateDto request) {
    return new ResponseEntity<>(userService.create(request), HttpStatus.CREATED);
  }

  @Operation(description = "Удаление пользователя")
  @DeleteMapping(
          value = "/user/id{userId}"
  )
  public ResponseEntity<Void> deleteUser(
          @Parameter(description = "Идентификатор пользователя для удаления", required = true)
          @PositiveOrZero @PathVariable("userId") Integer userId) {
    userService.deleteById(userId);
    return ResponseEntity.noContent().build();
  }

  @Operation(description = "Изменение данных пользователя")
  @PutMapping (
          value = "user/id{id}",
          produces = {"application/json"})
  public ResponseEntity<UserDto> updateUser(
          @Parameter(description = "Запрос на обновление данных")
          @Valid @RequestBody(required = false) UserUpdateDto request,
          @Parameter(description = "ID пользователя для обновления данных", required = true)
          @PositiveOrZero @PathVariable("id") Integer id){
    return ResponseEntity.ok(userService.update(id, request));
  }

  @Operation(description = "Активация аккаунта по hash code")
  @PutMapping(
          value = "/activation/{code}",
          produces = {"application/json"})
  public ResponseEntity<UserDto> confirmAccount(
          @PathVariable("code") String code) {
    return ResponseEntity.ok(userService.confirmAccount(code));
  }

  @Operation(description = "Получение кода о смене пароля")
  @PutMapping(
          value = "/forgotPassword",
          produces = {"application/json"})
  public ResponseEntity<String> sendResetPasswordCode(
          @Parameter(description = "Email или username по которому нужно восстановить пароль")
          @RequestBody EmailDto request) {
    return ResponseEntity.ok(userService.sendMailResetPassword(request));
  }


  @Operation(description = "Смена пароля")
  @PutMapping(
          value = "/forgotPassword/{code}",
          produces = {"application/json"})
  public ResponseEntity<UserDto> resetPassword(
          @Parameter(description = "Новый пароль для восстановления")
          @RequestBody String password,
          @Parameter(description = "Код для восстановления пароля")
          @PathVariable("code") String code) {

    return ResponseEntity.ok(userService.resetPassword(password, code));
  }

  @Operation(description = "Получение информации о пользователе по username")
  @GetMapping(
          value = "user/{name}",
          produces = {"application/json"})
  public ResponseEntity<UserDto> getUserByUsername(
          @Parameter(description = "Username пользователя")
          @PathVariable("name") String username) {
    return ResponseEntity.ok(userService.findUserByUsername(username));
  }

  @Operation(description = "Получение информации о пользователе по ID")
  @GetMapping(
          value = "user/id{id}",
          produces = {"application/json"})
  public ResponseEntity<UserDto> getUserById(
          @Parameter(description = "ID пользователя")
          @PathVariable("id") Integer id) {
    return ResponseEntity.ok(userService.findUserById(id));
  }

}
