package ru.task.board.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import ru.task.board.entity.Category;

import java.util.List;

public interface CategoryRepository extends PagingAndSortingRepository<Category, Integer> {

  Category findCategoryByCategoryId(Integer categoryId);

}