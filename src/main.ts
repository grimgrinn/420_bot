import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MessageController } from './message/message.controller';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  const m = new MessageController(1);
  console.log(m);

  console.log(429);
}
bootstrap();
