import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Message } from './message.entity';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message)
    private messageRepository: Repository<Message>,
  ) {}

  findAll(): Promise<Message[]> {
    return this.messageRepository.find();
  }

  findOne(id: number): Promise<Message> {
    return this.messageRepository.findOneBy({ id });
  }
  
}
