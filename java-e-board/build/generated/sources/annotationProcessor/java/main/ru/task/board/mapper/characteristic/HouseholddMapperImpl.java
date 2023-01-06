package ru.task.board.mapper.characteristic;

import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import ru.task.board.dto.CharacteristicCreateDto;
import ru.task.board.dto.CharacteristicUpdateDto;
import ru.task.board.entity.characteristic.HouseholdProductCharacteristic;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-05-11T15:05:28+0300",
    comments = "version: 1.4.2.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-7.4.jar, environment: Java 11.0.14 (Amazon.com Inc.)"
)
@Component
public class HouseholddMapperImpl implements HouseholddMapper {

    @Override
    public HouseholdProductCharacteristic charactDtoToHouseholdCharact(CharacteristicCreateDto characteristicCreateDto) {
        if ( characteristicCreateDto == null ) {
            return null;
        }

        HouseholdProductCharacteristic householdProductCharacteristic = new HouseholdProductCharacteristic();

        householdProductCharacteristic.setAdId( characteristicCreateDto.getAdId() );
        householdProductCharacteristic.setSubId( characteristicCreateDto.getSubId() );
        householdProductCharacteristic.setBrand( characteristicCreateDto.getBrand() );
        householdProductCharacteristic.setRelaseYear( characteristicCreateDto.getRelaseYear() );
        householdProductCharacteristic.setWasInUse( characteristicCreateDto.isWasInUse() );

        return householdProductCharacteristic;
    }

    @Override
    public HouseholdProductCharacteristic householdUpdateRequestToHouseholdView(CharacteristicUpdateDto dto) {
        if ( dto == null ) {
            return null;
        }

        HouseholdProductCharacteristic householdProductCharacteristic = new HouseholdProductCharacteristic();

        householdProductCharacteristic.setAdId( dto.getAdId() );
        householdProductCharacteristic.setSubId( dto.getSubId() );
        householdProductCharacteristic.setBrand( dto.getBrand() );
        householdProductCharacteristic.setRelaseYear( dto.getRelaseYear() );
        householdProductCharacteristic.setWasInUse( dto.isWasInUse() );

        return householdProductCharacteristic;
    }
}
