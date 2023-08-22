import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './DTO/create_user.dto';

@Injectable()
export class UserService {
  private users = [{ id: '1', name: 'John' }];

  findAll() {
    return this.users;
  }

  findOneById(id: string) {
    const result = this.users.find((user) => user.id === id);
    return result;
  }

  getAll(): string {
    return 'Hello World! from the user service';
  }

  createUser(createUserDto: CreateUserDto) {
    // Important line for dealing with dates
    const dt = new Date(Date.now());
    this.users.push({ id: dt.toISOString(), ...createUserDto });
    console.log(this.users);
    return 'user created successfully';
  }
}
