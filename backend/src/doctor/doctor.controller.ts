import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { Doctor } from '../entities/doctor.entity';
import { NotFoundException } from '@nestjs/common';

@Controller('doctors')
export class DoctorController {
  constructor(private readonly doctorService: DoctorService) {}

  @Get()
  async findAll(): Promise<Doctor[]> {
    return this.doctorService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Doctor> {
    const doctor = await this.doctorService.findOne(id);
    if (!doctor) throw new NotFoundException('Doctor not found');
    return doctor;
  }

  @Post()
  async create(@Body() doctorData: Partial<Doctor>): Promise<Doctor> {
    return this.doctorService.create(doctorData);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() doctorData: Partial<Doctor>): Promise<Doctor> {
    return this.doctorService.update(id, doctorData);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<{ message: string }> {
    await this.doctorService.remove(id);
    return { message: 'Doctor deleted successfully' };
  }
}
