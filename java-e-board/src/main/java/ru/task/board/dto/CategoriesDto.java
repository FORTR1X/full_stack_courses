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
@Schema(description = "Транспортный объект категории")
public class CategoriesDto {

  @Schema(description = "ID категории")
  private Integer categoryId;

  @Schema(description = "Название категории")
  private String categoryName;

  @Schema(description = "URL категории")
  private String categoryUrl;

}
