package ru.task.board.mapper;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import ru.task.board.dto.CharacteristicDto;
import ru.task.board.dto.CharacteristicDto.CharacteristicDtoBuilder;
import ru.task.board.dto.characteristic.HouseholdDto;
import ru.task.board.dto.characteristic.ImmovablesDto;
import ru.task.board.dto.characteristic.TransportDto;
import ru.task.board.entity.characteristic.Characteristic;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-05-11T15:05:28+0300",
    comments = "version: 1.4.2.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-7.4.jar, environment: Java 11.0.14 (Amazon.com Inc.)"
)
@Component
public class CharacteristicsMapperImpl implements CharacteristicsMapper {

    @Override
    public CharacteristicDto characteristicToCharacteristicDto(Characteristic characteristic) {
        if ( characteristic == null ) {
            return null;
        }

        CharacteristicDtoBuilder characteristicDto = CharacteristicDto.builder();

        characteristicDto.characteristic( characteristic );

        return characteristicDto.build();
    }

    @Override
    public List<CharacteristicDto> characteristicsToCharacteristicsDto(List<Characteristic> characteristicList) {
        if ( characteristicList == null ) {
            return null;
        }

        List<CharacteristicDto> list = new ArrayList<CharacteristicDto>( characteristicList.size() );
        for ( Characteristic characteristic : characteristicList ) {
            list.add( characteristicToCharacteristicDto( characteristic ) );
        }

        return list;
    }

    @Override
    public ImmovablesDto charactToImmovablesDto(Characteristic characteristic) {
        if ( characteristic == null ) {
            return null;
        }

        ImmovablesDto immovablesDto = new ImmovablesDto();

        return immovablesDto;
    }

    @Override
    public TransportDto charactToTransportDto(Characteristic characteristic) {
        if ( characteristic == null ) {
            return null;
        }

        TransportDto transportDto = new TransportDto();

        return transportDto;
    }

    @Override
    public HouseholdDto charactToHouseholdDto(Characteristic characteristic) {
        if ( characteristic == null ) {
            return null;
        }

        HouseholdDto householdDto = new HouseholdDto();

        return householdDto;
    }
}
