import { IsInt, IsDateString, IsOptional, IsString } from 'class-validator';

export class CreateAppointmentDto {
  @IsDateString()
  appointmentDate: string;

  @IsOptional()
  @IsString()
  reason?: string;

  @IsInt()
  patientId: number;

  @IsInt()
  doctorId: number;
}
