package ru.task.board.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import ru.task.board.entity.characteristic.Characteristic;

@NoArgsConstructor
@AllArgsConstructor
@Schema(description = "Транспортный объект характеристики")
@Getter
@Setter
@ToString
@Builder
public class CharacteristicDto {

  private Characteristic characteristic;

}
