import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContainerController } from './controller/container.controller';

@Module({
  imports: [],
  controllers: [AppController, ContainerController],
  providers: [AppService],
})
export class AppModule {}
