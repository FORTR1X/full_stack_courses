package ru.task.board.dto.characteristic;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Schema(description = "Транспортный объект харкетристики категории Всё для дома")
public class HouseholdDto {

  @Schema(description = "Цена от")
  private int priceStart;

  @Schema(description = "Цена до")
  private int priceEnd;

  @Schema(name = "Марка")
  private String brand;

  @Schema(name = "Год выпуска")
  private int relaseYear;

  @Schema(name = "Бу?")
  private boolean wasInUse;

}
