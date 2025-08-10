import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Patient } from './patient.entity';
import { Appointment } from './appointment.entity';

@Entity()
export class Queue {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Patient, (patient) => patient.queues, { eager: true })
  @JoinColumn({ name: 'patientId' })
  patient!: Patient;

  @Column()
  patientId!: number;

  @ManyToOne(() => Appointment, (appointment) => appointment.queues, { nullable: true, eager: true })
  @JoinColumn({ name: 'appointmentId' })
  appointment?: Appointment;

  @Column({ nullable: true })
  appointmentId?: number;

  @Column()
  queueNumber!: number;

  @Column()
  status!: string; // "waiting", "with doctor", "completed"

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  addedAt!: Date;
}

