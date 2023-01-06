package ru.task.board.mapper;

import org.mapstruct.Mapper;
import ru.task.board.dto.CharacteristicDto;
import ru.task.board.dto.characteristic.HouseholdDto;
import ru.task.board.dto.characteristic.ImmovablesDto;
import ru.task.board.dto.characteristic.TransportDto;
import ru.task.board.entity.characteristic.Characteristic;

import java.util.List;

import static org.mapstruct.ReportingPolicy.IGNORE;

@Mapper(componentModel = "spring", unmappedTargetPolicy = IGNORE)
public interface CharacteristicsMapper {

  CharacteristicDto characteristicToCharacteristicDto(Characteristic characteristic);
  List<CharacteristicDto> characteristicsToCharacteristicsDto(List<Characteristic> characteristicList);

  ImmovablesDto charactToImmovablesDto(Characteristic characteristic);
  TransportDto charactToTransportDto(Characteristic characteristic);
  HouseholdDto charactToHouseholdDto(Characteristic characteristic);

}
