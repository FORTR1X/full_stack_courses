package ru.task.board.entity.characteristic;

import lombok.*;
import ru.task.board.entity.Ad;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "household_product_characteristic")
@Getter
@Setter
@ToString
public class HouseholdProductCharacteristic extends Characteristic {

  @Column(name = "brand")
  private String brand;

  @Column(name = "relase_year")
  private int relaseYear;

  @Column(name = "was_in_use")
  private boolean wasInUse;

}
