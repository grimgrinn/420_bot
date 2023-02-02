import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from './message/message.entity';
import { MessageService } from './message/message.service';
import { MessageModule } from './message/message.module';

@Module({
  imports: [
  	TypeOrmModule.forRoot({type: 'postgres', host: 'localhost', port: 5432, username: 'postgres', password: 'postgres', database: 'ftdb', 
			      entities: [Message], synchronize: true, }), MessageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
