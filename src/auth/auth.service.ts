import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { UserService } from "src/user/user.service";
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';

const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async signup(email: string, password: string) {
    const users = await this.userService.find(email);
    if (users.length) {
      throw new BadRequestException('email in use');
    }
    //hash the users password
    //generate a salt
    const salt = randomBytes(8).toString('hex');
    // hash the salt and password together
    const hash = (await scrypt(password, salt, 32)) as Buffer;
    //join the hashed and solted pass together
    const result = salt + '.' + hash.toString('hex');
    //create a user and store it
    const user = await this.userService.create(email, result);
    //return user
    return user;
  }

  async signin(email: string, password: string) {
    const [user] = await this.userService.find(email);
    if (!user) {
      throw new NotFoundException('there is no such user or pass bitch');
    }
    const [salt, storedHash] = user.password.split('.');
    const hash = (await scrypt(password, salt, 32)) as Buffer;
    if (storedHash !== hash.toString('hex')) {
      throw new BadRequestException('baad password bish');
    }
    return user;
  }
}
