package ru.task.board.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import ru.task.board.entity.characteristic.Characteristic;

import java.util.List;

public interface CharacteristicRepository extends PagingAndSortingRepository<Characteristic, Integer> {

  Characteristic findCharacteristicByAdId(Integer adId);
  List<Characteristic> findCharacteristicsBySubId(Integer subId);

}
