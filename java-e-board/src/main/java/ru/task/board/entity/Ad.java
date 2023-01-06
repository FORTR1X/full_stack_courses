package ru.task.board.entity;

import lombok.*;
import org.hibernate.annotations.Type;
import ru.task.board.entity.characteristic.Characteristic;

import javax.persistence.*;
import java.time.OffsetDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "advert")
@Getter
@Setter
@ToString
public class Ad {

  // id оъявления
  @Id
  @GeneratedValue(strategy= GenerationType.AUTO)
  private Integer adId;

  // ID создателя объявления
  @Column(name = "owner", nullable = false)
  private String owner;

  // Название объявления
  @Column(name = "header", nullable = false)
  private String header;

  // Описание товара
  @Column(name = "description", nullable = false)
  private String description;

  // Цена за товар
  @Column(name = "price", nullable = false)
  private int price;

  // Дата создания объявления
  @Column(name = "created_at", nullable = false)
  private OffsetDateTime createdAt;

  // Дата последнего изменения объявления
  @Column(name = "last_updated_at", nullable = false)
  private OffsetDateTime lastUpdatedAt;

  @Column(name = "sub_id", nullable = false)
  private Integer subId;

  @Type(type = "string-array")
  @Column(name = "photos")
  private String[] photos;
}
