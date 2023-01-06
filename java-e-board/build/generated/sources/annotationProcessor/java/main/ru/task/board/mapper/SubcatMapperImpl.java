package ru.task.board.mapper;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import ru.task.board.dto.SubcategoriesDto;
import ru.task.board.dto.SubcategoriesDto.SubcategoriesDtoBuilder;
import ru.task.board.entity.Subcategories;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-05-11T12:40:32+0300",
    comments = "version: 1.4.2.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-7.4.jar, environment: Java 11.0.14 (Amazon.com Inc.)"
)
@Component
public class SubcatMapperImpl implements SubcatMapper {

    @Override
    public List<SubcategoriesDto> subcategoriesToSubcategoriesDto(List<Subcategories> entities) {
        if ( entities == null ) {
            return null;
        }

        List<SubcategoriesDto> list = new ArrayList<SubcategoriesDto>( entities.size() );
        for ( Subcategories subcategories : entities ) {
            list.add( subcategoryToSubcategoriesDto( subcategories ) );
        }

        return list;
    }

    @Override
    public SubcategoriesDto subcategoryToSubcategoriesDto(Subcategories subcategories) {
        if ( subcategories == null ) {
            return null;
        }

        SubcategoriesDtoBuilder subcategoriesDto = SubcategoriesDto.builder();

        subcategoriesDto.subId( subcategories.getSubId() );
        subcategoriesDto.subcategories( subcategories.getSubcategories() );
        subcategoriesDto.categoryId( subcategories.getCategoryId() );
        subcategoriesDto.subcategoryUrl( subcategories.getSubcategoryUrl() );

        return subcategoriesDto.build();
    }
}
