import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo-dto';
import { Todos } from './entities/todo.entity';

@Injectable()
export class TodoService {
  constructor(@InjectRepository(Todos) private todoRepo: Repository<Todos>) {}

  async create(body: CreateTodoDto) {
    return await this.todoRepo.save(body);
  }
}
