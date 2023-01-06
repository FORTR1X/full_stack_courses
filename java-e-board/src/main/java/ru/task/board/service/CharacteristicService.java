package ru.task.board.service;

import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import ru.task.board.dto.CharacteristicCreateDto;
import ru.task.board.dto.CharacteristicDto;
import ru.task.board.dto.CharacteristicUpdateDto;
import ru.task.board.dto.characteristic.HouseholdDto;
import ru.task.board.dto.characteristic.ImmovablesDto;
import ru.task.board.dto.characteristic.TransportDto;
import ru.task.board.entity.Ad;
import ru.task.board.entity.characteristic.HouseholdProductCharacteristic;
import ru.task.board.entity.characteristic.ImmovablesCharacteristic;
import ru.task.board.entity.characteristic.TransportCharacteristic;
import ru.task.board.mapper.CharacteristicsMapper;
import ru.task.board.mapper.characteristic.HouseholddMapper;
import ru.task.board.mapper.characteristic.ImmovablesMapper;
import ru.task.board.mapper.characteristic.TransportMapper;
import ru.task.board.repository.AdRepository;
import ru.task.board.repository.CharacteristicRepository;
import ru.task.board.repository.characteristics.HouseholdCharacteristicRepository;
import ru.task.board.repository.characteristics.ImmovablesCharacteristicRepository;
import ru.task.board.repository.characteristics.TransportCharacteristicRepository;
import ru.task.board.validation.EditAdAccessDeniedException;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Data
public class CharacteristicService {

  private final CharacteristicRepository characteristicRepository;
  private final HouseholdCharacteristicRepository householdCharacteristicRepository;
  private final ImmovablesCharacteristicRepository immovablesCharacteristicRepository;
  private final TransportCharacteristicRepository transportCharacteristicRepository;
  private final AdRepository adRepository;

  private final ImmovablesMapper immovablesMapper;
  private final TransportMapper transportMapper;
  private final HouseholddMapper householddMapper;

  private final CharacteristicsMapper characteristicsMapper;

  public CharacteristicCreateDto createCharacteristic(CharacteristicCreateDto characteristic) {
    int subId = characteristic.getSubId();

    switch (subId) {
      case 1: case 2:
        immovablesCharacteristicRepository.save(immovablesMapper.charactDtoToImmovablesCharact(characteristic));
        break;
      case 3: case 4:
        transportCharacteristicRepository.save(transportMapper.charactDtoToTransportCharact(characteristic));
        break;
      case 5: case 6:
        householdCharacteristicRepository.save(householddMapper.charactDtoToHouseholdCharact(characteristic));
        break;

      default: return null;
    }

    return characteristic;
  }

  public CharacteristicDto getCharacteristicByAdId(Integer adId) {
    return characteristicsMapper.characteristicToCharacteristicDto(characteristicRepository.findCharacteristicByAdId(adId));
  }

  public List<CharacteristicDto> getCharacteristicsBySubId(Integer subCatId) {
    return characteristicsMapper.characteristicsToCharacteristicsDto(characteristicRepository.findCharacteristicsBySubId(subCatId));
  }

  public Object getTemplateCharacteristicBySubId(Integer subId) {

    switch (subId) {
      case 1: case 2: return new ImmovablesDto();
      case 3: case 4: return new TransportDto();
      case 5: case 6: return new HouseholdDto();

      default: return null;
    }

  }

  public CharacteristicUpdateDto updateCharacteristic(Integer adId, CharacteristicUpdateDto characteristic) {
    checkEditTaskPermission(adId);

    Ad advert = adRepository.findAdByAdId(adId);
    int subId = advert.getSubId();

    switch (subId) {
      case 1: case 2:
        ImmovablesCharacteristic immovablesCharacteristic = immovablesMapper.immovablesUpdateRequestToImmovablesView(characteristic);
        immovablesCharacteristic.setAdId(adId);
        immovablesCharacteristic.setSubId(subId);
        immovablesCharacteristicRepository.save(immovablesCharacteristic);
        return characteristic;

      case 3: case 4:
        TransportCharacteristic transportCharacteristic = transportMapper.transportUpdateRequestToTransportView(characteristic);
        transportCharacteristic.setAdId(adId);
        transportCharacteristic.setSubId(subId);
        transportCharacteristicRepository.save(transportCharacteristic);
        return characteristic;

      case 5: case 6:
        HouseholdProductCharacteristic householdProductCharacteristic = householddMapper.householdUpdateRequestToHouseholdView(characteristic);
        householdProductCharacteristic.setAdId(adId);
        householdProductCharacteristic.setSubId(subId);
        householdCharacteristicRepository.save(householdProductCharacteristic);
        return characteristic;
    }

    return null;
  }

  // Проверка есть ли у пользователя права на редактирование данного объявления
  private void checkEditTaskPermission(Integer adId) {
    adRepository.findById(adId).ifPresent(ad -> {
      if (!ad.getOwner().equals(getCurrentUsername()) && !isCurrentUserAdmin()) {
        throw new EditAdAccessDeniedException();
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

  private List<String> getCurrentUserRoles() {
    return SecurityContextHolder.getContext()
            .getAuthentication()
            .getAuthorities()
            .stream()
            .map(GrantedAuthority::getAuthority).collect(Collectors.toList());
  }

}
