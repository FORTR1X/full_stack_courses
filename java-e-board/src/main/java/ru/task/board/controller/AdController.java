package ru.task.board.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import ru.task.board.dto.advert.AdCreateDto;
import ru.task.board.dto.advert.AdDto;
import ru.task.board.dto.advert.AdUpdateDto;
import ru.task.board.service.AdService;

import javax.validation.Valid;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.PositiveOrZero;

import java.util.List;

@Controller
@RequestMapping
@RequiredArgsConstructor
@Tag(name = "AdController", description = "API контролера по работе с оъявлениями")
@Validated
public class AdController {

  private final AdService adService;

  @Operation(description = "Создание поста")
  @PostMapping(
          value = "/ad/create",
          produces = {"application/json"},
          consumes = {"application/json"}
  )
  public ResponseEntity<AdDto> createAd(
          @Parameter(description = "Запрос на создание объявления")
          @Valid @RequestBody AdCreateDto request) {
    return new ResponseEntity<>(adService.create(request), HttpStatus.CREATED);
  }

  @Operation(description = "Удаление поста")
  @DeleteMapping(
          value = "/ad/id{adId}"
  )
  public ResponseEntity<Void> deleteAd(
          @Parameter(description = "Идентификатор объявления для удаления")
          @PositiveOrZero @PathVariable("adId") Integer adId) {
    adService.deleteById(adId);
    return ResponseEntity.noContent().build();
  }

  @Operation(description = "Обновление данных объявления")
  @PutMapping(
          value = "ad/update/id{adId}",
          produces = {"application/json"},
          consumes = {"application/json"}
  )
  public ResponseEntity<AdDto> updateAd(
          @Parameter(description = "ID объявления")
          @PositiveOrZero @PathVariable("adId") Integer adId,
          @Parameter(description = "Запрос на обновление объявления")
          @Valid @RequestBody(required = false) AdUpdateDto request) {
    return ResponseEntity.ok(adService.update(adId, request));
  }

  @Operation(description = "Получение всех объявлений")
  @GetMapping(
          value = "/ad/view",
          produces = {"application/json"}
  )
  public ResponseEntity<List<AdDto>> getAds(
          @Parameter(description = "Количество получаемых объявлений")
          @Min(1) @Max(10) @RequestParam(value = "limit", required = false) Integer limit,
          @Parameter(description = "Номер страницы")
          @Min(0) @Max(20) @RequestParam(value = "page", required = false) Integer page) {
    return ResponseEntity.ok(adService.getAds(limit, page));
  }

  @Operation(description = "Поиск по объявлениям")
  @GetMapping(
          value = "/ad/search",
          produces = {"application/json"})
  public ResponseEntity<List<AdDto>> findByRequest(
          @Parameter(description = "Запрос на поиск объявлений")
          @RequestParam(value = "q") String request,
          @Parameter(description = "Количество получаемых объявлений")
          @Min(1) @Max(10) @RequestParam(value = "limit", required = false) Integer limit,
          @Parameter(description = "Номер страницы")
          @Min(0) @Max(20) @RequestParam(value = "page", required = false) Integer page) {
    return ResponseEntity.ok(adService.findByRequest(request, limit, page));
  }

  @Operation(description = "Просмотреть объявление")
  @GetMapping(
          value = "/ad/view/id{id}",
          produces = {"application/json"})
  public ResponseEntity<AdDto> getAdByAdId(
          @Parameter(description = "id просматриваемого объявления")
          @PathVariable("id") Integer id) {

    return ResponseEntity.ok(adService.getAdByAdId(id));
  }

  @Operation(description = "Получить список объявлений пользователя")
  @GetMapping(
          value = "/ad/user/{name}",
          produces = {"application/json"})
  public ResponseEntity<List<AdDto>> findAdsByOwner(
          @Parameter(description = "Имя владельца объявлений")
          @PathVariable("name") String owner) {
    return ResponseEntity.ok(adService.findAdsByOwner(owner));
  }
}
