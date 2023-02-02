import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from './message/message.entity';

@Module({
  imports: [
  	TypeOrmModule.forRoot({type: 'postgres', host: 'localhost', port: 5432, username: 'postgres', password: 'postgres', database: 'ftdb', 
			      entities: [Message], synchronize: true, }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}