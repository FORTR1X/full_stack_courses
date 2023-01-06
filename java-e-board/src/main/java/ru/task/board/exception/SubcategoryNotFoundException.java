package ru.task.board.exception;

import javax.validation.ValidationException;

public class SubcategoryNotFoundException extends ValidationException {

  private static final String DEFAULT_ERROR_MESSAGE = "Данной подкатегории не существует";

  // Конструктор, выдающий ошибку
  public SubcategoryNotFoundException() {
    super(DEFAULT_ERROR_MESSAGE);
  }

}
