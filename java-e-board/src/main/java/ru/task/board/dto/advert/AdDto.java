package ru.task.board.dto.advert;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

import java.time.OffsetDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Schema(description = "Транспортный объект объявления")
@Getter
@Setter
@ToString
@Builder
public class AdDto {

  @Schema(description = "adId")
  private Integer adId;

  @Schema(description = "ID создателя объявления")
  private String owner;

  @Schema(description = "Название объявления")
  private String header;

  @Schema(description = "Описание объявления")
  private String description;

  @Schema(description = "Цена товара")
  private int price;

  @Schema(description = "Дата создания объявления")
  private OffsetDateTime createdAt;

  @Schema(description = "Дата последнего редактирования объявления")
  private OffsetDateTime lastUpdatedAt;

  @Schema(description = "ID подкатегории")
  private Integer subId;

  @Schema(description = "photos")
  private String[] photos;

}
