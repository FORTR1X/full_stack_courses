package ru.task.board.repository.characteristics;

import org.springframework.data.repository.PagingAndSortingRepository;
import ru.task.board.entity.characteristic.HouseholdProductCharacteristic;

public interface HouseholdCharacteristicRepository extends PagingAndSortingRepository<HouseholdProductCharacteristic, Integer> {
}
