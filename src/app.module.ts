import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContainerController } from './controller/container.controller';
import { ContainerService } from './service/container.service';

@Module({
  imports: [],
  controllers: [AppController, ContainerController],
  providers: [AppService, ContainerService],
})
export class AppModule {}
