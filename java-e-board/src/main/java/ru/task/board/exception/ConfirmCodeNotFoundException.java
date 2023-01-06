package ru.task.board.exception;

import javax.validation.ValidationException;

public class ConfirmCodeNotFoundException extends ValidationException {

  private static final String DEFAULT_ERROR_MESSAGE = "Код подтверждения не найден.";

  // Конструктор, выдающий ошибку
  public ConfirmCodeNotFoundException() {
    super(DEFAULT_ERROR_MESSAGE);
  }

}
