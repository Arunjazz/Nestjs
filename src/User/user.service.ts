import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { register } from './entities/register.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { faker } from '@faker-js/faker';

@Injectable()
export class UserService {
  constructor(
    // @Inject('USER_REPOSITORY')
    // private userRepository: Repository<register>
    @InjectRepository(register)
    private readonly registerRepo: Repository<register>
  ) {}

  async findAllStudents(): Promise<register[]> {
    return this.registerRepo.query('SELECT * FROM register');
  }

  // async createStudent(createUserDto: CreateUserDto): Promise<register> {
  async createStudent(): Promise<register> {
    const newStud = new register();
    newStud.fname = faker.lorem.words(1);
    newStud.lname = faker.lorem.words(1);
    newStud.email = faker.internet.email().toString();
    newStud.password = faker.phone.number('9#########').toString();
    newStud.contact = faker.internet.password().toString();
    newStud.securityA = faker.lorem.words(5);
    newStud.securityQ = faker.lorem.words(5);

    const newStudent = this.registerRepo.create(newStud);
    return this.registerRepo.save(newStudent);
  }
}
