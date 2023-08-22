import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './DTO/create_user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getData() {
    return this.userService.findAll();
  }

  // how to take one paramter in the api
  @Get(':id')
  // getHello(@Param('id') id: number) {
  getHello(@Param('id') id: string) {
    console.log(`we are taking this parameter from the api -->  ${id}`);
    // By default the id's datatype is string , so we need to typeCast to ""number""
    // return this.userService.findOneById(Number(id));
    return this.userService.findOneById(id);
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }
}
