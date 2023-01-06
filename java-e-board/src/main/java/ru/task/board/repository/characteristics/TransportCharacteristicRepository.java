package ru.task.board.repository.characteristics;

import org.springframework.data.repository.PagingAndSortingRepository;
import ru.task.board.entity.characteristic.TransportCharacteristic;

public interface TransportCharacteristicRepository extends PagingAndSortingRepository<TransportCharacteristic, Integer> {

}
