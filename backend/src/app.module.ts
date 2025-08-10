import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { DoctorModule } from './doctor/doctor.module';
import { PatientModule } from './patient/patient.module';
import { AppointmentModule } from './appointment/appointment.module';
import { AuthModule } from './auth/auth.module';
import { QueueModule } from './queue/queue.module';
import { DashboardModule } from './dashboard/dashboard.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      url: process.env.DATABASE_URL,  // make sure DATABASE_URL is set in your .env
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // auto-load all entities in src
      synchronize: false,  // false because you use migrations
    }),
    DoctorModule,
    PatientModule,
    AppointmentModule,
    AuthModule,
    QueueModule,
    DashboardModule,
  ],
})
export class AppModule {}
