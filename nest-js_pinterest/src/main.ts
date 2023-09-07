import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import express from 'express';
require('dotenv').config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.use(express.json()); // Kích hoạt JSON body parser
  // app.use(express.urlencoded({ extended: true })); // Kích hoạt x-www-form-urlencoded body parser

  // Kích hoạt CORS
  app.enableCors();

  app.useGlobalPipes(new ValidationPipe());

  const PORT = process.env.APP_PORT || 8000;
  await app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
  });
}
bootstrap();
