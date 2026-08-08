import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import { CreateTaskDto, UpdateTaskDto } from './task.dto';

export type Subtask = { id: number; title: string; completed: boolean };
export type Comment = { id: number; author: string; text: string; createdAt: string };
export type Task = {
  id: number; title: string; description: string; priority: string; dueDate: string | null;
  members: string[]; labels: string[]; status: string; subtasks: Subtask[]; comments: Comment[];
};

@Injectable()
export class TasksService {
  constructor(private readonly prisma: PrismaService) {}

  private parseArray(value: string): any[] { try { return JSON.parse(value || '[]'); } catch { return []; } }
  private mapTask(task: any): Task {
    return { ...task, members: this.parseArray(task.members), labels: this.parseArray(task.labels), subtasks: this.parseArray(task.subtasks), comments: this.parseArray(task.comments) };
  }

  async findAll() {
    const tasks = await this.prisma.task.findMany({ orderBy: { createdAt: 'asc' } });
    return tasks.map(t => this.mapTask(t));
  }

  async findOne(id: number) {
    const task = await this.prisma.task.findUnique({ where: { id } });
    if (!task) throw new NotFoundException('Task not found');
    return this.mapTask(task);
  }

  async create(dto: CreateTaskDto) {
    const task = await this.prisma.task.create({ data: {
      title: dto.title, description: dto.description ?? '', priority: dto.priority, dueDate: dto.dueDate ?? null,
      members: JSON.stringify(dto.members ?? ['AD']), labels: JSON.stringify(dto.labels ?? ['New']), status: dto.status ?? 'To Do',
      subtasks: JSON.stringify(dto.subtasks ?? []), comments: JSON.stringify(dto.comments ?? []),
    }});
    return this.mapTask(task);
  }

  async update(id: number, dto: UpdateTaskDto) {
    await this.findOne(id);
    const data: any = { ...dto };
    if (dto.members) data.members = JSON.stringify(dto.members);
    if (dto.labels) data.labels = JSON.stringify(dto.labels);
    if (dto.subtasks) data.subtasks = JSON.stringify(dto.subtasks);
    if (dto.comments) data.comments = JSON.stringify(dto.comments);
    const task = await this.prisma.task.update({ where: { id }, data });
    return this.mapTask(task);
  }

  async remove(id: number) { await this.findOne(id); await this.prisma.task.delete({ where: { id } }); return { success: true }; }

  async seed() {
    const count = await this.prisma.task.count();
    if (count > 0) return;
    await this.prisma.task.createMany({ data: [
      { title:'Design Homepage', description:'Create the homepage design and layout.', priority:'High', dueDate:'2026-09-12', members:JSON.stringify(['AD','AS']), labels:JSON.stringify(['Design','UI']), status:'To Do', subtasks:JSON.stringify([{id:1,title:'Create wireframe',completed:true},{id:2,title:'Finalize hero section',completed:false}]), comments:JSON.stringify([]) },
      { title:'Create Login Screen', description:'Implement the authentication screen.', priority:'Medium', dueDate:'2026-09-14', members:JSON.stringify(['AD']), labels:JSON.stringify(['Frontend']), status:'To Do', subtasks:JSON.stringify([]), comments:JSON.stringify([]) },
      { title:'Write API Documentation', description:'Create clear API documentation.', priority:'Low', dueDate:'2026-09-18', members:JSON.stringify(['AS']), labels:JSON.stringify(['Backend','Documentation']), status:'To Do', subtasks:JSON.stringify([]), comments:JSON.stringify([]) },
      { title:'Develop Dashboard', description:'Build the main task management dashboard.', priority:'High', dueDate:'2026-09-16', members:JSON.stringify(['AD','AS']), labels:JSON.stringify(['Development']), status:'Doing', subtasks:JSON.stringify([]), comments:JSON.stringify([]) },
      { title:'Task Filtering', description:'Implement task filters.', priority:'Medium', dueDate:'2026-09-19', members:JSON.stringify(['AD']), labels:JSON.stringify(['Frontend']), status:'Doing', subtasks:JSON.stringify([]), comments:JSON.stringify([]) },
      { title:'Project Setup', description:'Initial project configuration.', priority:'Low', dueDate:'2026-09-10', members:JSON.stringify(['AD']), labels:JSON.stringify(['Setup']), status:'Completed', subtasks:JSON.stringify([]), comments:JSON.stringify([]) },
    ] });
  }
}
