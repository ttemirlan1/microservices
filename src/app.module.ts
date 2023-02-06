import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DB_CONFIG } from './config/db.config';
import { TodoModule } from './todo/todo.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [TypeOrmModule.forRoot(DB_CONFIG), UserModule, TodoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
