import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TasksService } from './tasks/tasks.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: true });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  await app.get(TasksService).seed();
  await app.listen(process.env.PORT || 4000);
}
bootstrap();
