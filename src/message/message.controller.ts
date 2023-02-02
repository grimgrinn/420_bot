import { Controller } from '@nestjs/common';
import { MessageService } from './message.service';

@Controller()
export class MessageController {
  constructor(private readonly messageService: MessageService) {}
  
  message(): string {
    console.log(this.messageService.findAll());
    return 'mock';
  }
}
