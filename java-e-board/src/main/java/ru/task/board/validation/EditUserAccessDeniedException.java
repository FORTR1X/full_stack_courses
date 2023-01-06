package ru.task.board.validation;

import javax.validation.ValidationException;

public class EditUserAccessDeniedException extends ValidationException {

  private static final String errorMessage = "Текущий пользователь не может редактировать другого пользователя";

  public EditUserAccessDeniedException() {
    super(errorMessage);
  }

}
