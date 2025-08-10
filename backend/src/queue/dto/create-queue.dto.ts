import { IsInt, IsString, IsOptional } from 'class-validator';

export class CreateQueueDto {
  @IsInt()
  patientId: number;

  @IsInt()
  @IsOptional()
  appointmentId?: number;

  @IsInt()
  queueNumber: number;

  @IsString()
  status: string;
}
