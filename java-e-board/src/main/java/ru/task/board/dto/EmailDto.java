package ru.task.board.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Schema(description = "Транспортный объект email")
@Getter
@Setter
@ToString
@Builder
public class EmailDto {

  @Schema(description = "Email для восстановления пароля")
  private String email;

}
