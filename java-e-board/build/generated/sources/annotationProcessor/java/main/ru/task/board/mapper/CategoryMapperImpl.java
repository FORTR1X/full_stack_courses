package ru.task.board.mapper;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import ru.task.board.dto.CategoriesDto;
import ru.task.board.dto.CategoriesDto.CategoriesDtoBuilder;
import ru.task.board.entity.Category;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-05-11T12:40:31+0300",
    comments = "version: 1.4.2.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-7.4.jar, environment: Java 11.0.14 (Amazon.com Inc.)"
)
@Component
public class CategoryMapperImpl implements CategoryMapper {

    @Override
    public List<CategoriesDto> categoriesToCategoriesDto(List<Category> list) {
        if ( list == null ) {
            return null;
        }

        List<CategoriesDto> list1 = new ArrayList<CategoriesDto>( list.size() );
        for ( Category category : list ) {
            list1.add( categoryToCategoryDto( category ) );
        }

        return list1;
    }

    @Override
    public CategoriesDto categoryToCategoryDto(Category category) {
        if ( category == null ) {
            return null;
        }

        CategoriesDtoBuilder categoriesDto = CategoriesDto.builder();

        categoriesDto.categoryId( category.getCategoryId() );
        categoriesDto.categoryName( category.getCategoryName() );
        categoriesDto.categoryUrl( category.getCategoryUrl() );

        return categoriesDto.build();
    }
}
