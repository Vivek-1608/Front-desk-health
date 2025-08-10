import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Queue } from '../entities/queue.entity';
import { CreateQueueDto } from './dto/create-queue.dto';

@Injectable()
export class QueueService {
  constructor(
    @InjectRepository(Queue)
    private queueRepository: Repository<Queue>,
  ) {}

  async create(createQueueDto: CreateQueueDto): Promise<Queue> {
    const queue = this.queueRepository.create(createQueueDto);
    return this.queueRepository.save(queue);
  }

  findAll(): Promise<Queue[]> {
    return this.queueRepository.find();
  }

  async findOne(id: number): Promise<Queue> {
    const queue = await this.queueRepository.findOneBy({ id });
    if (!queue) {
      throw new NotFoundException(`Queue with ID ${id} not found`);
    }
    return queue;
  }

  async update(id: number, updateData: Partial<CreateQueueDto>): Promise<Queue> {
    await this.queueRepository.update(id, updateData);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const result = await this.queueRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Queue with ID ${id} not found`);
    }
  }
}
