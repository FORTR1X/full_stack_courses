package ru.task.board.exception;

import javax.validation.ValidationException;

public class FolderDoesNotExist extends ValidationException {

  private static final String DEFAULT_ERROR_MESSAGE = "Указаная директория не найдена";

  // Конструктор, выдающий ошибку
  public FolderDoesNotExist() {
    super(DEFAULT_ERROR_MESSAGE);
  }

}
