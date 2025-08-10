// src/dashboard/dashboard.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Doctor } from '../entities/doctor.entity';
import { Appointment } from '../entities/appointment.entity';
import { Queue } from '../entities/queue.entity';

@Injectable()
export class DashboardService {
  constructor(
    @InjectRepository(Doctor)
    private doctorRepository: Repository<Doctor>,

    @InjectRepository(Appointment)
    private appointmentRepository: Repository<Appointment>,

    @InjectRepository(Queue)
    private queueRepository: Repository<Queue>,
  ) {}

  async getStats() {
    const doctorsCount = await this.doctorRepository.count();
    const appointmentsCount = await this.appointmentRepository.count();
    const queueCount = await this.queueRepository.count();

    return {
      doctorsCount,
      appointmentsCount,
      queueCount,
    };
  }
}
