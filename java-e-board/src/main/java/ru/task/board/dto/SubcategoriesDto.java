package ru.task.board.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Schema(description = "Транспортный объект подкатегории")
public class SubcategoriesDto {

  @Schema(description = "ID подкатегории")
  private Integer subId;

  @Schema(description = "Название подкатегории")
  private String subcategories;

  @Schema(description = "ID категории")
  private Integer categoryId;

  @Schema(description = "URL подкатегории")
  private String subcategoryUrl;
}
