package ru.task.board.entity.characteristic;

import lombok.*;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@ToString
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
@Data
public abstract class Characteristic {

  @Id
  @Column(name = "ad_id")
  private Integer adId;

  @Column(name = "sub_id")
  private Integer subId;

}
