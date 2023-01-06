package ru.task.board.mapper;

import org.mapstruct.Mapper;
import ru.task.board.dto.SubcategoriesDto;
import ru.task.board.entity.Subcategories;

import java.util.List;

import static org.mapstruct.ReportingPolicy.IGNORE;

@Mapper(componentModel = "spring", unmappedTargetPolicy = IGNORE)
public interface SubcatMapper {

  List<SubcategoriesDto> subcategoriesToSubcategoriesDto(List<Subcategories> entities);
  SubcategoriesDto subcategoryToSubcategoriesDto(Subcategories subcategories);

}
