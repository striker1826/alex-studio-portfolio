import "reflect-metadata";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Schedule {
  @PrimaryGeneratedColumn()
  schedule_id!: number;

  @Column()
  date!: Date;

  @Column()
  name!: string;
}
