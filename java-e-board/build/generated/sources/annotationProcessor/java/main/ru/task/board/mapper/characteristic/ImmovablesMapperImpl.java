package ru.task.board.mapper.characteristic;

import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import ru.task.board.dto.CharacteristicCreateDto;
import ru.task.board.dto.CharacteristicUpdateDto;
import ru.task.board.entity.characteristic.ImmovablesCharacteristic;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-05-11T15:05:28+0300",
    comments = "version: 1.4.2.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-7.4.jar, environment: Java 11.0.14 (Amazon.com Inc.)"
)
@Component
public class ImmovablesMapperImpl implements ImmovablesMapper {

    @Override
    public ImmovablesCharacteristic charactDtoToImmovablesCharact(CharacteristicCreateDto characteristicCreateDto) {
        if ( characteristicCreateDto == null ) {
            return null;
        }

        ImmovablesCharacteristic immovablesCharacteristic = new ImmovablesCharacteristic();

        immovablesCharacteristic.setAdId( characteristicCreateDto.getAdId() );
        immovablesCharacteristic.setSubId( characteristicCreateDto.getSubId() );
        immovablesCharacteristic.setRent( characteristicCreateDto.isRent() );
        immovablesCharacteristic.setRoomNumber( characteristicCreateDto.getRoomNumber() );
        immovablesCharacteristic.setRentPeriod( characteristicCreateDto.isRentPeriod() );
        immovablesCharacteristic.setMonthlyCost( characteristicCreateDto.getMonthlyCost() );
        immovablesCharacteristic.setFloor( characteristicCreateDto.getFloor() );
        immovablesCharacteristic.setFloorCount( characteristicCreateDto.getFloorCount() );

        return immovablesCharacteristic;
    }

    @Override
    public ImmovablesCharacteristic immovablesUpdateRequestToImmovablesView(CharacteristicUpdateDto dto) {
        if ( dto == null ) {
            return null;
        }

        ImmovablesCharacteristic immovablesCharacteristic = new ImmovablesCharacteristic();

        immovablesCharacteristic.setAdId( dto.getAdId() );
        immovablesCharacteristic.setSubId( dto.getSubId() );
        immovablesCharacteristic.setRent( dto.isRent() );
        immovablesCharacteristic.setRoomNumber( dto.getRoomNumber() );
        immovablesCharacteristic.setRentPeriod( dto.isRentPeriod() );
        immovablesCharacteristic.setMonthlyCost( dto.getMonthlyCost() );
        immovablesCharacteristic.setFloor( dto.getFloor() );
        immovablesCharacteristic.setFloorCount( dto.getFloorCount() );

        return immovablesCharacteristic;
    }
}
