package ru.task.board.dto.advert;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Schema(description = "Транспортный объект объявления")
public class AdUpdateDto {

  @NotNull
  @Schema(description = "Название объявления")
  private String header;

  @NotNull
  @Schema(description = "Описание объявления")
  private String description;

  @NotNull
  @Schema(description = "Цена товара")
  private int price;

  @Schema(description = "Список фотографий объявления")
  private String[] photos;

}
