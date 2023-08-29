import { Post, Controller, Get, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './DTO/create_user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAllUsers() {
    console.log('inside the controller of User');
    return await this.userService.findAllStudents();
  }

  @Post('create')
  async create(@Body() createUserDto: CreateUserDto) {
    console.log('This is the input', createUserDto);
    return await this.userService.createStudent(createUserDto);
  }
}
// ****** WE CAN ALSO EXPLORE ABOUT SWAGGER DECORATORS USIGN DOCUMENTATION ****** //
