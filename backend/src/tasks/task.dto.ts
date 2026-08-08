import { IsArray, IsDateString, IsIn, IsOptional, IsString, MinLength } from 'class-validator';

const priorities = ['High', 'Medium', 'Low'] as const;
const statuses = ['To Do', 'Doing', 'Completed', 'On Hold'] as const;

export class CreateTaskDto {
  @IsString() @MinLength(1) title!: string;
  @IsOptional() @IsString() description?: string;
  @IsIn(priorities) priority!: string;
  @IsOptional() @IsDateString() dueDate?: string;
  @IsOptional() @IsArray() @IsString({ each: true }) members?: string[];
  @IsOptional() @IsArray() @IsString({ each: true }) labels?: string[];
  @IsOptional() @IsIn(statuses) status?: string;
  @IsOptional() @IsArray() subtasks?: { id: number; title: string; completed: boolean }[];
  @IsOptional() @IsArray() comments?: { id: number; author: string; text: string; createdAt: string }[];
}

export class UpdateTaskDto {
  @IsOptional() @IsString() @MinLength(1) title?: string;
  @IsOptional() @IsString() description?: string;
  @IsOptional() @IsIn(priorities) priority?: string;
  @IsOptional() @IsDateString() dueDate?: string;
  @IsOptional() @IsArray() @IsString({ each: true }) members?: string[];
  @IsOptional() @IsArray() @IsString({ each: true }) labels?: string[];
  @IsOptional() @IsIn(statuses) status?: string;
  @IsOptional() @IsArray() subtasks?: { id: number; title: string; completed: boolean }[];
  @IsOptional() @IsArray() comments?: { id: number; author: string; text: string; createdAt: string }[];
}
