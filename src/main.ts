import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  // Nullish coalescing operator
  // Para puertos, es mejor usar ?? porque:
  //   El puerto 0 es un valor válido (el sistema asigna un puerto disponible automáticamente)
  //   Solo quieres usar el valor por defecto (3000) cuando realmente no hay configuración (undefined/null)
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
