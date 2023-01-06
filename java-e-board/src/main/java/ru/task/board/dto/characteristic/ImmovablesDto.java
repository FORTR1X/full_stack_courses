package ru.task.board.dto.characteristic;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.validation.constraints.NotNull;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Schema(description = "Транспортный объект харкетристики категории Недвижимость")
public class ImmovablesDto {

  @Schema(description = "Цена от")
  private int priceStart;

  @Schema(description = "Цена до")
  private int priceEnd;

  @NotNull
  @Schema(description = "Аренда или покупка")
  private boolean rent;

  @Schema(description = "Количество комнат")
  private int roomNumber;

  @Schema(description = "Срок аренды")
  private boolean rentPeriod;

  @Schema(description = "Месячная стоимость")
  private int monthlyCost;

  @Schema(description = "Этаж")
  private int floor; // Для квартир

  @Schema(description = "Количество этажей")
  private int floorCount; // Для дома (кол-во этажей)
}
