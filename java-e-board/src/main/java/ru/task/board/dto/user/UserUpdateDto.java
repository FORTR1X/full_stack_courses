package ru.task.board.dto.user;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Schema(description = "Транспортный объект пользователя")
public class UserUpdateDto {

  @Schema(description = "Пароль пользователя")
  private String password;

  @Schema(description = "base64 код изображения пользователя")
  private String avatar;

}
