package ru.task.board.repository;

import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import ru.task.board.entity.Ad;

import javax.transaction.Transactional;
import java.util.List;

public interface AdRepository extends PagingAndSortingRepository<Ad, Integer> {

  void deleteAdsByOwnerContaining(String owner);

  List<Ad> findAdsByHeaderContainsOrDescriptionContains(String header, String description, Pageable pageable);

  List<Ad> findAllBySubId(Integer subId, Pageable pageable);

  List<Ad> findAdsByOwnerContaining(String owner);

  Ad findAdByAdId(Integer adId);

}
