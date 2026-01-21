/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, ValidationPipe } from '@nestjs/common'; // ⬅️ (1) เพิ่ม ValidationPipe
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { config } from 'dotenv';
import { AppModule } from './app/app.module';

// โหลด .env ก่อน
config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*', // ปรับเป็น URL ของ frontend ใน production
    credentials: true,
  });
  
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,           // ลบ field ที่ไม่มีใน DTO
      forbidNonWhitelisted: true, // ส่ง field แปลกมา → error
      transform: true,           // แปลง type อัตโนมัติ
    }),
  );

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  // Swagger Setup
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Assets Manager API')
    .setDescription('Assets Management System API Documentation')
    .setVersion('1.0.0')
    .addTag('Assets', 'Asset management endpoints')
    .addTag('Users', 'User management endpoints')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api/docs', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
  });

  const port = process.env.PORT || 3000;
  await app.listen(port);

  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`,
  );
  Logger.log(
    `📚 Swagger documentation available at: http://localhost:${port}/api/docs`,
  );
}

bootstrap();
