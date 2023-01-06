package ru.task.board.validation;

import javax.validation.ValidationException;

public class EditAdAccessDeniedException extends ValidationException {

  private static final String errorMessage = "Текущий пользователь не может редактировать объявление";

  public EditAdAccessDeniedException() {
    super(errorMessage);
  }

}
