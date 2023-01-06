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
import ru.task.board.dto.CharacteristicCreateDto;
import ru.task.board.dto.CharacteristicDto;
import ru.task.board.dto.CharacteristicUpdateDto;
import ru.task.board.service.CharacteristicService;

import java.util.List;

@Controller
@RequestMapping
@RequiredArgsConstructor
@Tag(name = "CharacteristicController", description = "API контролера по работе с характеристиками объявления")
@Validated
public class CharacteristicController {

  private final CharacteristicService characteristicService;

  @Operation(description = "Получение характеристик объявления")
  @GetMapping(
          value = "/characteristic/advert/id{adId}",
          produces = {"application/json"})
  public ResponseEntity<CharacteristicDto> getCharacteristicByAdId (
          @Parameter(description = "id подкатегории")
          @PathVariable("adId") Integer adId) {
    return ResponseEntity.ok(characteristicService.getCharacteristicByAdId(adId));
  }

  @Operation(description = "Получение характеристик объявлений одной категории")
  @GetMapping(
          value = "/characteristic/subcategory/id{subCatId}",
          produces = {"application/json"})
  public ResponseEntity<List<CharacteristicDto>> getCharacteristicsBySubId(
          @Parameter(description = "ID подкатегории")
          @PathVariable("subCatId") Integer subCatId) {
    return ResponseEntity.ok(characteristicService.getCharacteristicsBySubId(subCatId));
  }

  @Operation(description = "Добавить характеристики для объявления")
  @PostMapping(
          value = "/characteristic/create/",
          produces = {"application/json"},
          consumes = {"application/json"})
  public ResponseEntity<CharacteristicCreateDto> createCharacteristic(
          @Parameter(description = "Список характеристик")
          @RequestBody CharacteristicCreateDto characteristic) {
    return new ResponseEntity<>(characteristicService.createCharacteristic(characteristic), HttpStatus.CREATED);
  }

  @Operation(description = "Получение шаблона характеристик для подкатегории")
  @GetMapping(
          value = "/characteristic/{subId}",
          produces = {"application/json"})
  public ResponseEntity<Object> getTemplateCharacteristicBySubId(
          @Parameter(description = "ID подкатегории")
          @PathVariable("subId") Integer subId) {
    return ResponseEntity.ok(characteristicService.getTemplateCharacteristicBySubId(subId));
  }

  @Operation(description = "Обновление характеристик")
  @PutMapping(
          value = "/advert/id{adId}/characteristic",
          produces = {"application/json"},
          consumes = {"application/json"})
  public ResponseEntity<CharacteristicUpdateDto> updateCharacteristic(
          @Parameter(description = "ID редактируемого объявления")
          @PathVariable("adId") Integer adId,
          @Parameter(description = "Новые значения характеристик")
          @RequestBody CharacteristicUpdateDto characteristic) {
    return ResponseEntity.ok(characteristicService.updateCharacteristic(adId, characteristic));
  }

}
