import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
require('dotenv').config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Kích hoạt CORS
  app.enableCors();

  app.useGlobalPipes(new ValidationPipe());

  const PORT = process.env.APP_PORT || 8000;
  await app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
  });
}
bootstrap();
