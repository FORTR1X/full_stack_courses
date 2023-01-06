package ru.task.board.validation;

import javax.validation.ValidationException;

public class DelAdAccessDeniedException extends ValidationException {

  private static final String errorMessage = "Текущий пользователь не может удалить объявление";

  public DelAdAccessDeniedException() {
    super(errorMessage);
  }

}
