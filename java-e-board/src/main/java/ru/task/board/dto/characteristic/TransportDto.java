package ru.task.board.dto.characteristic;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Schema(description = "Транспортный объект харкетристики категории Транспорт")
public class TransportDto {

  @Schema(description = "Цена от")
  private int priceStart;

  @Schema(description = "Цена до")
  private int priceEnd;

  @Schema(description = "Марка")
  private String brand;

  @Schema(description = "Год выпуска")
  private int relaseYear;

  @Schema(description = "Пробег")
  private int milage;

  @Schema(description = "Объем двигателя")
  private double capacity;

  @Schema(description = "Количество передач")
  private int gearsCount;

  @Schema(description = "Привод")
  private String wheelDrive;

}
