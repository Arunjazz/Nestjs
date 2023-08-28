import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './DTO/create_user.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { User } from './entities/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  // Here we are telling the swagger that this api will return the User type
  @ApiCreatedResponse({ type: User })
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }
}
// ****** WE CAN ALSO EXPLORE ABOUT SWAGGER DECORATORS USIGN DOCUMENTATION ****** //
