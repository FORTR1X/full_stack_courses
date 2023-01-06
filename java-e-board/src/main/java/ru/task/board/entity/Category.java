package ru.task.board.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name = "category")
@ToString
public class Category {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Integer categoryId;

  @Column(name = "category_name", nullable = false)
  private String categoryName;

  @Column(name = "category_url", nullable = false)
  private String categoryUrl;

}
