import { Module } from '@nestjs/common';
import { PrismaModule } from './common/prisma.module';
import { TasksModule } from './tasks/tasks.module';

@Module({ imports: [PrismaModule, TasksModule] })
export class AppModule {}
