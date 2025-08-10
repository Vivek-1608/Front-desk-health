// src/dashboard/dashboard.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';
import { Doctor } from '../entities/doctor.entity';
import { Appointment } from '../entities/appointment.entity';
import { Queue } from '../entities/queue.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Doctor, Appointment, Queue])],
  controllers: [DashboardController],
  providers: [DashboardService],
})
export class DashboardModule {}
