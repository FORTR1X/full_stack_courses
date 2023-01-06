package ru.task.board.mapper.characteristic;

import org.mapstruct.Mapper;
import ru.task.board.dto.CharacteristicCreateDto;
import ru.task.board.dto.CharacteristicUpdateDto;
import ru.task.board.entity.characteristic.ImmovablesCharacteristic;

import static org.mapstruct.ReportingPolicy.IGNORE;

@Mapper(componentModel = "spring", unmappedTargetPolicy = IGNORE)
public interface ImmovablesMapper {

  ImmovablesCharacteristic charactDtoToImmovablesCharact(CharacteristicCreateDto characteristicCreateDto);

  ImmovablesCharacteristic immovablesUpdateRequestToImmovablesView(CharacteristicUpdateDto dto);
}
