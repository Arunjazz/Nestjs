import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { register } from './entities/register.entity';
import { faker } from '@faker-js/faker';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<register>
  ) {}

  async findAllStudents(): Promise<register[]> {
    return this.userRepository.find();
  }

  // async createStudent(): Promise<register> {
  async createStudent() {
    const createUser = [
      {
        fname: faker.lorem.words(1),
        lname: faker.lorem.words(1),
        email: faker.internet.email().toString(),
        contact: faker.phone.number('9#########').toString(),
        password: faker.internet.password().toString(),
        securityQ: faker.lorem.words(5),
        securityA: faker.lorem.words(5),
      },
    ];
    const newStudent = this.userRepository.create(createUser);
    return this.userRepository.save(newStudent);
  }
}
