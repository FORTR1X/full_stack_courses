package ru.task.board.mapper;

import org.mapstruct.AfterMapping;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;
import ru.task.board.dto.user.UserCreateDto;
import ru.task.board.dto.user.UserDto;
import ru.task.board.entity.User;

import static org.mapstruct.ReportingPolicy.IGNORE;

@Mapper(componentModel = "spring", unmappedTargetPolicy = IGNORE)
public interface UserMapper {

  UserDto userToUserDto(User entity);

  User toUser(UserCreateDto dto);

  @AfterMapping
  default void afterMappingFromCreate(@MappingTarget User target, UserCreateDto source) {

  }
}
