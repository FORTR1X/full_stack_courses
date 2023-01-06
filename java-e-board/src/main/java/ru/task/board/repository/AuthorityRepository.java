package ru.task.board.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import ru.task.board.entity.Authority;

public interface AuthorityRepository extends PagingAndSortingRepository<Authority, String> {

}
