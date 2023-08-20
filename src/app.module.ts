import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContainerController } from './controller/container.controller';
import { ContainerService } from './service/container.service';
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Requests } from './entity/Requests';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.RDS_HOSTNAME,
      port: parseInt(process.env.RDS_PORT),
      username: process.env.RDS_USERNAME,
      password: process.env.RDS_PASSWORD,
      database: 'kiki_prueba',
      entities: [Requests],
      synchronize: false,
      logging: true,
    }),
    TypeOrmModule.forFeature([Requests])
  ],
  controllers: [AppController, ContainerController],
  providers: [AppService, ContainerService],
})
export class AppModule {}
