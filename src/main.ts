import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'; 
import "reflect-metadata"
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
  .setTitle('Api para calcular el maximo de capacidad de contenedores')
  .setDescription('Api para calcular el maximo de capacidad de contenedores usando el algoritmo de la mochila o knapsack')
  .setVersion('1.0')
  .addTag('knapsack')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
