package ru.task.board.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

/** Модель ролей */
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "authorities")
public class Authority {

  /** Логин */
  @Id
  @Column(name = "username")
  private String username;

  /** Роль */
  private String authority;

}