package ru.task.board.dto.user;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import java.time.OffsetDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Schema(description = "Транспортный объект пользователя")
public class UserDto {

  @NotNull
  @Schema(description = "id")
  private Integer id;

  @Schema(description = "Имя пользователя")
  private String username;

  @Email
  @Schema(description = "Электронная почта пользователя")
  private String email;

  @Schema(description = "Номер телефона пользователя")
  private String phoneNumber;

  @Schema(description = "Дата создания аккаунта")
  private OffsetDateTime createdAt;

  @Schema(description = "base64 код изображения пользователя")
  private String avatar;
}
