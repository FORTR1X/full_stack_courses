package ru.task.board.mapper;

import org.mapstruct.Mapper;
import ru.task.board.dto.CategoriesDto;
import ru.task.board.entity.Category;

import java.util.List;

import static org.mapstruct.ReportingPolicy.IGNORE;

@Mapper(componentModel = "spring", unmappedTargetPolicy = IGNORE)
public interface CategoryMapper {

  List<CategoriesDto> categoriesToCategoriesDto(List<Category> list);
  CategoriesDto categoryToCategoryDto(Category category);
}
