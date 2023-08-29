import { Post, Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  // Here we are telling the swagger that this api will return the User type
  // @ApiCreatedResponse({ type: User })
  // @Post()
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this.userService.createUser(createUserDto);
  // }

  @Get()
  async getAllUsers() {
    console.log('inside the controller of User');
    return await this.userService.findAllStudents();
  }

  @Post('create')
  // async create(@Body() createUserDto: CreateUserDto) {
  async create() {
    console.log('inside the controller of User for creating the user');
    return await this.userService.createStudent();
  }
}
// ****** WE CAN ALSO EXPLORE ABOUT SWAGGER DECORATORS USIGN DOCUMENTATION ****** //
