import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MessageController } from './message/message.controller';
import { MessageService } from './message/message.service';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  const ms = app.get(MessageService);
  const ft = await ms.findOne(420);

  console.log(ft.message);   
}
bootstrap();
