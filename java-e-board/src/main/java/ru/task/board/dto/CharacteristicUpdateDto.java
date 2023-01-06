package ru.task.board.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Schema(description = "Транспортный объект создания характеристики")
@Getter
@Setter
@ToString
@Builder
public class CharacteristicUpdateDto {

  @Schema(description = "ID объявления")
  private Integer adId;

  @Schema(description = "ID подкатегории")
  private Integer subId;

  //Household
  @Schema(description = "Марка")
  private String brand;

  @Schema(description = "Дата выпуска")
  private int relaseYear;

  @Schema(description = "Бу?")
  private boolean wasInUse;

  // Immovables
  @Schema(description = "Аренда или покупка")
  private boolean rent;

  @Schema(description = "Количество комнат")
  private int roomNumber;

  @Schema(description = "Срок аренды")
  private boolean rentPeriod;

  @Schema(description = "Месячная плата")
  private int monthlyCost;

  @Schema(description = "Этаж")
  private int floor; // Для квартир

  @Schema(description = "Количество этажей")
  private int floorCount; // Для дома (кол-во этажей)

  // Transport

  @Schema(description = "Пробег")
  private int milage;

  @Schema(description = "Объем двигателя")
  private double capacity;

  @Schema(description = "Количество передач")
  private int gearsCount;

  @Schema(description = "Привод")
  private String wheelDrive;

}
