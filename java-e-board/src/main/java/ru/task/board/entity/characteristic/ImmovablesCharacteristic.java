package ru.task.board.entity.characteristic;

import lombok.*;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "immovables_characteristic")
@Getter
@Setter
@ToString
public class ImmovablesCharacteristic extends Characteristic {

  @Column(name = "rent", nullable = false)
  private boolean rent;

  @Column(name = "room_number")
  private int roomNumber;

  @Column(name = "rent_period")
  private boolean rentPeriod;

  @Column(name = "monthly_cost")
  private int monthlyCost;

  @Column(name = "floor")
  private int floor; // Для квартир

  @Column(name = "floor_count")
  private int floorCount; // Для дома (кол-во этажей)

}
