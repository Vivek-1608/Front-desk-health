import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { PatientService } from './patient.service';
import { Patient } from '../entities/patient.entity';

@Controller('patients')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Get()
  findAll(): Promise<Patient[]> {
    return this.patientService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.patientService.findOne(id);
  }

  @Post()
  create(@Body() body: Partial<Patient>) {
    return this.patientService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: Partial<Patient>) {
    return this.patientService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.patientService.remove(id);
  }
}
