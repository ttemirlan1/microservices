import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo-dto';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
  @Post()
  async createTodo(@Body() body: CreateTodoDto) {
    return await this.todoService.create(body);
  }
  @Get()
  async showAllTodo() {
    return await 'showing all todos';
  }
  @Get()
  async showOneTodo() {
    return await 'showing all todos';
  }
  @Patch('')
  async upgradTodo() {
    return await 'upgradebyid';
  }
}
