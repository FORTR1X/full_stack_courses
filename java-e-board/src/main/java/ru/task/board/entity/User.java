package ru.task.board.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.Email;
import java.time.OffsetDateTime;

@Entity
@Table(name = "users")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class User {

  // ID пользователя
  @Id
  @GeneratedValue(strategy= GenerationType.AUTO)
  private Integer id;

  // Имя пользователя
  @Column(name = "username", nullable = false)
  private String username;

  // Email пользователя
  @Email
  @Column(name = "email", nullable = false)
  private String email;

  // Номер телефона пользователя
  @Column(name = "phoneNumber", nullable = false)
  private String phoneNumber;

  // Пароль пользователя
  @Column(name = "password", nullable = false)
  private String password;

  @Column(name = "created_at", nullable = false)
  private OffsetDateTime createdAt;

  // Проверка включенности пользователя
  @Column(name = "enabled", nullable = false)
  private boolean enabled;

  @Column(name = "confirm_code")
  private String confirmCode;

  @Column(name = "avatar")
  private String avatar;

}
