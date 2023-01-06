package ru.task.board.validation;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class EmailValidation {

  private static final String EMAIL_PATTERN =
          "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@" +
                  "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";

  private final Pattern pattern = Pattern.compile(EMAIL_PATTERN);
  private Matcher matcher;

  public EmailValidation(String hex) {
    matcher = pattern.matcher(hex);
  }

  public EmailValidation() {
    matcher = pattern.matcher("");
  }

  public Matcher getMatcher() { return matcher; }
  public void setMatcher(String hex) { matcher = pattern.matcher(hex); }

  public boolean isValid() {
    return matcher.matches();
  }


}
