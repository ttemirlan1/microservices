import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Todos } from 'src/todo/entities/todo.entity';
import { Users } from 'src/user/entities/user.entity';

export const DB_CONFIG: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'example',
  password: '0550tema',
  username: 'postgres',
  entities: [Todos, Users],
  autoLoadEntities: true,
  synchronize: true,
};
