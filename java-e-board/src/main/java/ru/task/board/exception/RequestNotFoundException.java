package ru.task.board.exception;

import javax.validation.ValidationException;

public class RequestNotFoundException extends ValidationException {

  private static final String DEFAULT_ERROR_MESSAGE = "По данному запросу ничего не найдено";

  // Конструктор, выдающий ошибку
  public RequestNotFoundException() {
    super(DEFAULT_ERROR_MESSAGE);
  }

}
