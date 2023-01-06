package ru.task.board.mapper;

import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import ru.task.board.dto.user.UserCreateDto;
import ru.task.board.dto.user.UserDto;
import ru.task.board.dto.user.UserDto.UserDtoBuilder;
import ru.task.board.entity.User;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-05-11T12:40:32+0300",
    comments = "version: 1.4.2.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-7.4.jar, environment: Java 11.0.14 (Amazon.com Inc.)"
)
@Component
public class UserMapperImpl implements UserMapper {

    @Override
    public UserDto userToUserDto(User entity) {
        if ( entity == null ) {
            return null;
        }

        UserDtoBuilder userDto = UserDto.builder();

        userDto.id( entity.getId() );
        userDto.username( entity.getUsername() );
        userDto.email( entity.getEmail() );
        userDto.phoneNumber( entity.getPhoneNumber() );
        userDto.createdAt( entity.getCreatedAt() );
        userDto.avatar( entity.getAvatar() );

        return userDto.build();
    }

    @Override
    public User toUser(UserCreateDto dto) {
        if ( dto == null ) {
            return null;
        }

        User user = new User();

        user.setUsername( dto.getUsername() );
        user.setEmail( dto.getEmail() );
        user.setPhoneNumber( dto.getPhoneNumber() );
        user.setPassword( dto.getPassword() );
        user.setCreatedAt( dto.getCreatedAt() );
        user.setEnabled( dto.isEnabled() );
        user.setAvatar( dto.getAvatar() );

        afterMappingFromCreate( user, dto );

        return user;
    }
}
