import "reflect-metadata";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  photo_id!: number;

  @Column()
  type!: string;

  @Column()
  photo!: string;
}
