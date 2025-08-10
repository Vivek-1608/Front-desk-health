import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Patient } from '../entities/patient.entity';

@Injectable()
export class PatientService {
  constructor(
    @InjectRepository(Patient)
    private patientRepo: Repository<Patient>,
  ) {}

  findAll() {
    return this.patientRepo.find();
  }

  async findOne(id: number) {
    const patient = await this.patientRepo.findOne({ where: { id } });
    if (!patient) throw new NotFoundException(`Patient #${id} not found`);
    return patient;
  }

  create(data: Partial<Patient>) {
    const patient = this.patientRepo.create(data);
    return this.patientRepo.save(patient);
  }

  async update(id: number, data: Partial<Patient>) {
    const patient = await this.findOne(id);
    Object.assign(patient, data);
    return this.patientRepo.save(patient);
  }

  async remove(id: number) {
    const patient = await this.findOne(id);
    return this.patientRepo.remove(patient);
  }
}
