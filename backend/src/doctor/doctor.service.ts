import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Doctor } from '../entities/doctor.entity';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class DoctorService {
  constructor(
    @InjectRepository(Doctor)
    private readonly doctorRepository: Repository<Doctor>,
  ) {}

  findAll(): Promise<Doctor[]> {
    return this.doctorRepository.find();
  }

  findOne(id: number): Promise<Doctor | null> {
    return this.doctorRepository.findOneBy({ id });
  }

  create(doctorData: Partial<Doctor>): Promise<Doctor> {
    const doctor = this.doctorRepository.create(doctorData);
    return this.doctorRepository.save(doctor);
  }

  async update(id: number, doctorData: Partial<Doctor>): Promise<Doctor | null> {
    const doctor = await this.doctorRepository.findOneBy({ id });
    if (!doctor) {
      return null;
    }
    Object.assign(doctor, doctorData);
    return this.doctorRepository.save(doctor);
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.doctorRepository.delete(id);
    return result.affected !== 0;
  }
}