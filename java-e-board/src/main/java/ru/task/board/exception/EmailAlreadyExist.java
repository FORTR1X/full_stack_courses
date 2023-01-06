package ru.task.board.exception;

import javax.validation.ValidationException;

public class EmailAlreadyExist extends ValidationException {

  private static final String DEFAULT_ERROR_MESSAGE = "Пользователь с данным email уже зарегистрирован";

  // Конструктор, выдающий ошибку
  public EmailAlreadyExist() {
    super(DEFAULT_ERROR_MESSAGE);
  }

}
