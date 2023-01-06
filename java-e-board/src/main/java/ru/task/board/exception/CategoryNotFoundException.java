package ru.task.board.exception;

import javax.validation.ValidationException;

public class CategoryNotFoundException extends ValidationException {

  private static final String DEFAULT_ERROR_MESSAGE = "Данной категории не существует";

  // Конструктор, выдающий ошибку
  public CategoryNotFoundException() {
    super(DEFAULT_ERROR_MESSAGE);
  }

}
