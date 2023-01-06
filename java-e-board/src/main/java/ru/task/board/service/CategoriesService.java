package ru.task.board.service;

import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import ru.task.board.dto.advert.AdDto;
import ru.task.board.dto.CategoriesDto;
import ru.task.board.dto.SubcategoriesDto;
import ru.task.board.entity.Ad;
import ru.task.board.entity.Category;
import ru.task.board.entity.Subcategories;
import ru.task.board.exception.CategoryNotFoundException;
import ru.task.board.exception.SubcategoryNotFoundException;
import ru.task.board.mapper.AdMapper;
import ru.task.board.mapper.CategoryMapper;
import ru.task.board.mapper.SubcatMapper;
import ru.task.board.repository.AdRepository;
import ru.task.board.repository.CategoryRepository;
import ru.task.board.repository.SubcategoriesRepository;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Data
public class CategoriesService {

  private final SubcategoriesRepository subcategoriesRepository;
  private final CategoryRepository categoryRepository;
  private final AdRepository adRepository;

  private final CategoryMapper categoryMapper;
  private final SubcatMapper subcatMapper;
  private final AdMapper adMapper;

  private static final int DEFAULT_PAGE_LIMIT_SIZE = 10;
  private static final int DEFAULT_PAGE_SIZE = 0;

  // Получение подкатегорий, категории
  public List<SubcategoriesDto> getSubcategoriesByCategory(Integer id) {
    if (categoryRepository.findCategoryByCategoryId(id) == null)
      throw new CategoryNotFoundException();

    int categoryId = categoryRepository.findCategoryByCategoryId(id).getCategoryId();

    return subcatMapper.subcategoriesToSubcategoriesDto(subcategoriesRepository.findAllByCategoryId(categoryId));
  }

  //Получение объявлений категории
  public List<AdDto> getAdsByCategory(Integer catId, Integer limit, Integer page) {
    if (categoryRepository.findCategoryByCategoryId(catId) == null)
      throw new CategoryNotFoundException();

    List<Integer> subCatId = subcategoriesRepository.findAllByCategoryId(catId)
            .stream()
            .map(Subcategories::getSubId)
            .collect(Collectors.toList());

    List<Ad> adverts = new ArrayList<>();

    for (int i = 0; i < subCatId.size(); i++) {
      adverts.addAll(adRepository.findAllBySubId(subCatId.get(i), PageRequest.of(page == null ? DEFAULT_PAGE_SIZE : page, limit == null ? DEFAULT_PAGE_LIMIT_SIZE : limit)));
    }

    return adMapper.adsToAdsDto(adverts);
  }

  // Получение объявлений подкатегории
  public List<AdDto> getAdsBySubcategories(Integer subId, Integer limit, Integer page) {
    if (subcategoriesRepository.findSubcategoriesBySubId(subId) == null)
      throw new SubcategoryNotFoundException();

    return adMapper.adsToAdsDto(adRepository.findAllBySubId(subId, PageRequest.of(page == null ? DEFAULT_PAGE_SIZE : page, limit == null ? DEFAULT_PAGE_LIMIT_SIZE : limit)));
  }

  public List<CategoriesDto> getCategories() {
    Iterator<Category> iter = categoryRepository.findAll().iterator();
    List<Category> listAllCategories = new ArrayList<>();

    while (iter.hasNext()) {
      Category category = iter.next();
      listAllCategories.add(category);
    }

    return categoryMapper.categoriesToCategoriesDto(listAllCategories);
  }

  public List<SubcategoriesDto> getSubcategories() {
    Iterator<Subcategories> iter = subcategoriesRepository.findAll().iterator();
    List<Subcategories> listAllSubcategories = new ArrayList<>();

    while (iter.hasNext()) {
      Subcategories subcategories = iter.next();
      listAllSubcategories.add(subcategories);
    }

    return subcatMapper.subcategoriesToSubcategoriesDto(listAllSubcategories);
  }

  public CategoriesDto getCategoryBySubId(Integer id) {
    int categoryId = subcategoriesRepository.findSubcategoriesBySubId(id).getCategoryId();
    return categoryMapper.categoryToCategoryDto(categoryRepository.findCategoryByCategoryId(categoryId));
  }

  public SubcategoriesDto getSubcatBySubId(Integer id) {
    return subcatMapper.subcategoryToSubcategoriesDto(subcategoriesRepository.findSubcategoriesBySubId(id));
  }
}
