package ru.task.board.dto.user;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import java.time.OffsetDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Schema(description = "Транспортный объект пользователя")
public class UserCreateDto {

  @NotNull
  @Schema(description = "Имя пользователя")
  private String username;

  @NotNull
  @Email
  @Schema(description = "Электронная почта пользователя")
  private String email;

  @NotNull
  @Schema(description = "Номер телефона пользователя")
  private String phoneNumber;

  @NotNull
  @Schema(description = "Пароль пользователя")
  private String password;

  @Schema(description = "Проверка отключенности пользователя")
  private boolean enabled;

  @Schema(description = "Дата создания аккаунта")
  private OffsetDateTime createdAt;

  @Schema(description = "base64 код изображения пользователя")
  private String avatar;

//  @Schema(description = "Код подтверждения аккаунта")
//  private String confirmCode;
}