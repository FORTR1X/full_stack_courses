package ru.task.board.mapper.characteristic;

import org.mapstruct.Mapper;
import ru.task.board.dto.CharacteristicCreateDto;
import ru.task.board.dto.CharacteristicUpdateDto;
import ru.task.board.entity.characteristic.HouseholdProductCharacteristic;

import static org.mapstruct.ReportingPolicy.IGNORE;

@Mapper(componentModel = "spring", unmappedTargetPolicy = IGNORE)
public interface HouseholddMapper {

  HouseholdProductCharacteristic charactDtoToHouseholdCharact(CharacteristicCreateDto characteristicCreateDto);

  HouseholdProductCharacteristic householdUpdateRequestToHouseholdView(CharacteristicUpdateDto dto);

}
