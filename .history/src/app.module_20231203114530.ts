import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NesjsModule } from './nesjs/nesjs.module';
import { NestjsController } from './nestjs/nestjs.controller';
import { NestjsService } from './nestjs/nestjs.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [NesjsModule, UsersModule],
  controllers: [AppController, NestjsController],
  providers: [AppService, NestjsService],
})
export class AppModule {}
