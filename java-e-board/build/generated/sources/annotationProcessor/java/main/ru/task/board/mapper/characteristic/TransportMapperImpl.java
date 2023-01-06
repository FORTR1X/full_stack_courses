package ru.task.board.mapper.characteristic;

import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import ru.task.board.dto.CharacteristicCreateDto;
import ru.task.board.dto.CharacteristicUpdateDto;
import ru.task.board.entity.characteristic.TransportCharacteristic;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-05-11T15:05:28+0300",
    comments = "version: 1.4.2.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-7.4.jar, environment: Java 11.0.14 (Amazon.com Inc.)"
)
@Component
public class TransportMapperImpl implements TransportMapper {

    @Override
    public TransportCharacteristic charactDtoToTransportCharact(CharacteristicCreateDto characteristicCreateDto) {
        if ( characteristicCreateDto == null ) {
            return null;
        }

        TransportCharacteristic transportCharacteristic = new TransportCharacteristic();

        transportCharacteristic.setAdId( characteristicCreateDto.getAdId() );
        transportCharacteristic.setSubId( characteristicCreateDto.getSubId() );
        transportCharacteristic.setBrand( characteristicCreateDto.getBrand() );
        transportCharacteristic.setRelaseYear( characteristicCreateDto.getRelaseYear() );
        transportCharacteristic.setMilage( characteristicCreateDto.getMilage() );
        transportCharacteristic.setCapacity( characteristicCreateDto.getCapacity() );
        transportCharacteristic.setGearsCount( characteristicCreateDto.getGearsCount() );
        transportCharacteristic.setWheelDrive( characteristicCreateDto.getWheelDrive() );

        return transportCharacteristic;
    }

    @Override
    public TransportCharacteristic transportUpdateRequestToTransportView(CharacteristicUpdateDto dto) {
        if ( dto == null ) {
            return null;
        }

        TransportCharacteristic transportCharacteristic = new TransportCharacteristic();

        transportCharacteristic.setAdId( dto.getAdId() );
        transportCharacteristic.setSubId( dto.getSubId() );
        transportCharacteristic.setBrand( dto.getBrand() );
        transportCharacteristic.setRelaseYear( dto.getRelaseYear() );
        transportCharacteristic.setMilage( dto.getMilage() );
        transportCharacteristic.setCapacity( dto.getCapacity() );
        transportCharacteristic.setGearsCount( dto.getGearsCount() );
        transportCharacteristic.setWheelDrive( dto.getWheelDrive() );

        return transportCharacteristic;
    }
}
