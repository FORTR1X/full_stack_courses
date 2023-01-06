package ru.task.board.exception;

import javax.validation.ValidationException;

public class UserNotFoundException extends ValidationException {

  private static final String DEFAULT_ERROR_MESSAGE = "Пользователь с такими данными не найден";

  // Конструктор, выдающий ошибку
  public UserNotFoundException() {
    super(DEFAULT_ERROR_MESSAGE);
  }

}
