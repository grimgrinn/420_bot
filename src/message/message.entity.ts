import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Message {
	@PrimaryGeneratedColumn()
  	id: number;

	@Column({type: 'varchar', nullable: true})
	message: string;
}
