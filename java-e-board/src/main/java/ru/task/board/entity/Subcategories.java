package ru.task.board.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "subcategories")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Subcategories {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Integer subId;

  @Column(name = "subcategories")
  private String subcategories;

  @Column(name = "category_id")
  private Integer categoryId;

  @Column(name = "subcategory_url")
  private String subcategoryUrl;
}
