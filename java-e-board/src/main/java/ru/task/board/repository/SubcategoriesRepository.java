package ru.task.board.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import ru.task.board.entity.Ad;
import ru.task.board.entity.Subcategories;

import java.util.List;

public interface SubcategoriesRepository extends PagingAndSortingRepository<Subcategories, Integer> {

  Subcategories findSubcategoriesBySubId(Integer subId);
  List<Subcategories> findAllByCategoryId(Integer categoryId);

}
