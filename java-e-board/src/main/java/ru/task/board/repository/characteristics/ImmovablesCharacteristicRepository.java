package ru.task.board.repository.characteristics;

import org.springframework.data.repository.PagingAndSortingRepository;
import ru.task.board.entity.characteristic.ImmovablesCharacteristic;

public interface ImmovablesCharacteristicRepository extends PagingAndSortingRepository<ImmovablesCharacteristic, Integer> {
}
