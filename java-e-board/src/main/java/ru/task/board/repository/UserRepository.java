package ru.task.board.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import ru.task.board.entity.User;

import java.util.List;

public interface UserRepository extends PagingAndSortingRepository<User, Integer> {

  User findByEmail(String email);
  User findByUsername(String username);
  User findByConfirmCode(String confirmCode);
  User findUserById(Integer id);
}