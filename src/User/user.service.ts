import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { register } from './entities/register.entity';
import { CreateUserDto } from './DTO/create_user.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<register>
  ) {}

  async findAllStudents(): Promise<register[]> {
    return this.userRepository.find();
  }

  async createStudent(createUserDto: CreateUserDto): Promise<register> {
    const newStudent = this.userRepository.create(createUserDto);
    return this.userRepository.save(newStudent);
  }
}
