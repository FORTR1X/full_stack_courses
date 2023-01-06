package ru.task.board.entity.characteristic;

import lombok.*;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "transport_characteristic")
@Getter
@Setter
@ToString
public class TransportCharacteristic extends Characteristic {

  @Column(name = "brand")
  private String brand;

  @Column(name = "relase_year")
  private int relaseYear;

  @Column(name = "milage")
  private int milage;

  @Column(name = "capacity")
  private double capacity;

  @Column(name = "gears_count")
  private int gearsCount;

  @Column(name = "wheel_drive")
  private String wheelDrive;
}
