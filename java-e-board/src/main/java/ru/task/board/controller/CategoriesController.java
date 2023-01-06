package ru.task.board.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import ru.task.board.dto.advert.AdDto;
import ru.task.board.dto.CategoriesDto;
import ru.task.board.dto.SubcategoriesDto;
import ru.task.board.service.CategoriesService;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import java.util.List;

@Controller
@RequestMapping
@RequiredArgsConstructor
@Tag(name = "CategoriesController", description = "API контролера по работе с категориями и подкатегориями объявления")
@Validated
public class CategoriesController {

  private final CategoriesService categoriesService;

  @Operation(description = "Получить список объявлений подкатегории")
  @GetMapping(
          value = "/ad/subcategory/id{subId}/",
          produces = {"application/json"})
  public ResponseEntity<List<AdDto>> getAdsBySubcategories(
          @Parameter(description = "ID подкатегории")
          @PathVariable(value = "subId", required = true) Integer subId,
          @Parameter(description = "Количество получаемых объявлений")
          @Min(1) @Max(10) @RequestParam(value = "limit", required = false) Integer limit,
          @Parameter(description = "Номер страницы")
          @Min(0) @Max(20) @RequestParam(value = "page", required = false) Integer page) {
    return ResponseEntity.ok(categoriesService.getAdsBySubcategories(subId, limit, page));
  }

  @Operation(description = "Получить список объявлений категории")
  @GetMapping(
          value = "/ad/category/id{catId}/",
          produces = {"application/json"})
  public ResponseEntity<List<AdDto>> getAdsByCategory(
          @Parameter(description = "ID категории")
          @PathVariable(value = "catId") Integer catId,
          @Parameter(description = "Количество получаемых объявлений")
          @Min(1) @Max(10) @RequestParam(value = "limit", required = false) Integer limit,
          @Parameter(description = "Номер страницы")
          @Min(0) @Max(20) @RequestParam(value = "page", required = false) Integer page) {
    return ResponseEntity.ok(categoriesService.getAdsByCategory(catId, limit, page));
  }

  @Operation(description = "Получить подкатегории категории")
  @GetMapping(
          value = "/category/id{catId}/",
          produces = {"application/json"})
  public ResponseEntity<List<SubcategoriesDto>> getSubcategoriesByCategory(
          @Parameter(description = "Название категории")
          @PathVariable("catId") Integer catId) {
    return ResponseEntity.ok(categoriesService.getSubcategoriesByCategory(catId));
  }

  @Operation(description = "Получить список категорий")
  @GetMapping(
          value = "/category/",
          produces = {"application/json"})
  public ResponseEntity<List<CategoriesDto>> getCategories() {
    return ResponseEntity.ok(categoriesService.getCategories());
  }

  @Operation(description = "Получить список подкатегорий")
  @GetMapping(
          value = "/subcategory/",
          produces = {"application/json"})
  public ResponseEntity<List<SubcategoriesDto>> getSubcategories() {
    return ResponseEntity.ok(categoriesService.getSubcategories());
  }

  @Operation(description = "Получить категорию по ID подкатегории")
  @GetMapping(
          value = "/category/subcategory/id{subId}",
          produces = {"application/json"})
  public ResponseEntity<CategoriesDto> getCategoryBySubId(
          @Parameter(description = "ID подкатегории")
          @PathVariable("subId") Integer id) {
    return ResponseEntity.ok(categoriesService.getCategoryBySubId(id));
  }

  @Operation(description = "Получить подкатегорию по ID подкатегории")
  @GetMapping(
          value = "/subcategory/id{subId}",
          produces = {"application/json"})
  public ResponseEntity<SubcategoriesDto> getSubcatBySubId(
          @Parameter(description = "ID подкатегории")
          @PathVariable("subId") Integer id) {
    return ResponseEntity.ok(categoriesService.getSubcatBySubId(id));
  }
}
