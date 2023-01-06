package ru.task.board.service;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import ru.task.board.dto.advert.AdCreateDto;
import ru.task.board.dto.advert.AdDto;
import ru.task.board.dto.advert.AdUpdateDto;
import ru.task.board.entity.Ad;
import ru.task.board.exception.RequestNotFoundException;
import ru.task.board.mapper.AdMapper;
import ru.task.board.repository.AdRepository;
import ru.task.board.repository.CharacteristicRepository;
import ru.task.board.repository.characteristics.HouseholdCharacteristicRepository;
import ru.task.board.repository.characteristics.ImmovablesCharacteristicRepository;
import ru.task.board.repository.characteristics.TransportCharacteristicRepository;
import ru.task.board.validation.DelAdAccessDeniedException;
import ru.task.board.validation.EditAdAccessDeniedException;

import java.time.OffsetDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AdService {

  private final AdRepository adRepository;
  private final ImmovablesCharacteristicRepository immovablesCharacteristicRepository;
  private final TransportCharacteristicRepository transportCharacteristicRepository;
  private final HouseholdCharacteristicRepository householdCharacteristicRepository;
  private final CharacteristicRepository characteristicRepository;

  private final AdMapper adMapper;

  private static final int DEFAULT_PAGE_LIMIT_SIZE = 10;
  private static final int DEFAULT_PAGE_SIZE = 1;

  // Создание объявления
  public AdDto create(AdCreateDto request) {
    Ad ad = adMapper.toAd(request, getCurrentUsername(), OffsetDateTime.now());

    adRepository.save(ad);

    return adMapper.adToAdDto(ad);
  }

  // Удаление объявления по ID
  public void deleteById(Integer adId) {
    checkDelTaskPermission(adId);
    characteristicRepository.deleteById(adId);

    adRepository.deleteById(adId);
  }

  // Обновление данных объявления (редактировать может админ или автор)
  public AdDto update(Integer adId, AdUpdateDto request) {
    checkEditTaskPermission(adId);

    Ad adById = adRepository.findById(adId).orElseThrow();
    
    String owner = adById.getOwner();
    OffsetDateTime createdAt = adById.getCreatedAt();
    OffsetDateTime lastUpdatedAt = OffsetDateTime.now();
    Integer subId = adById.getSubId();

    Ad ad = adMapper.adUpdateRequestToAdView(request, owner, adId, createdAt, lastUpdatedAt, subId);

    adRepository.save(ad);
    return adMapper.adToAdDto(ad);
  }

  // Получение списка объявлений определенной длины limit
  public List<AdDto> getAds(Integer limit, Integer page) {

    return adMapper.adsToAdsDto(
            adRepository.findAll(PageRequest.of(page == null ? DEFAULT_PAGE_SIZE : page, limit == null ? DEFAULT_PAGE_LIMIT_SIZE : limit, Sort.by("createdAt").descending()))
                    .getContent());
  }

  // Поиск объявлений по запросу
  public List<AdDto> findByRequest(String request, Integer limit, Integer page) {
    List<Ad> listAds = adRepository.findAdsByHeaderContainsOrDescriptionContains(request, request, PageRequest.of(page == null ? DEFAULT_PAGE_SIZE : page, limit == null ? DEFAULT_PAGE_LIMIT_SIZE : limit));

    if (listAds.isEmpty())
      throw new RequestNotFoundException();

    return adMapper.adsToAdsDto(listAds);
  }

  // Проверка есть ли у пользователя права на редактирование данного объявления
  private void checkEditTaskPermission(Integer adId) {
    adRepository.findById(adId).ifPresent(ad -> {
      if (!ad.getOwner().equals(getCurrentUsername()) && !isCurrentUserAdmin()) {
        throw new EditAdAccessDeniedException();
      }
    });
  }

  // Проверка есть ли у пользователя права на удаление данного объявления
  private void checkDelTaskPermission(Integer adId) {
    adRepository.findById(adId).ifPresent(ad -> {
      if (!ad.getOwner().equals(getCurrentUsername()) && !isCurrentUserAdmin()) {
        throw new DelAdAccessDeniedException();
      }
    });
  }

  // Получение имя пользователя по текущей сессии
  private String getCurrentUsername() {
    return (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
  }

  // Является ли текущий пользователь админом
  private boolean isCurrentUserAdmin() {
    return getCurrentUserRoles().contains("ADMIN");
  }

  // Получение текующей роли пользователя
  private List<String> getCurrentUserRoles() {
    return SecurityContextHolder.getContext()
            .getAuthentication()
            .getAuthorities()
            .stream()
            .map(GrantedAuthority::getAuthority).collect(Collectors.toList());
  }

  public AdDto getAdByAdId(Integer id) { return adMapper.adToAdDto(adRepository.findAdByAdId(id)); }

  public List<AdDto> findAdsByOwner(String owner) {
    return adMapper.adsToAdsDto(adRepository.findAdsByOwnerContaining(owner));
  }
}
