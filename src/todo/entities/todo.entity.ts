import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Todos {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  tasks: string;
  @Column({ default: false })
  status: boolean;
}
