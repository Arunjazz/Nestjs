import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './DTO/create_user.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { User } from './entities/user.entity';
@ApiTags('user')
// This is for seperarting the api's in the swagger ui
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // This will tell us that the api will return the User type in Array format
  @ApiOkResponse({ type: User, isArray: true })
  @Get()
  getData() {
    return this.userService.findAll();
  }

  // This will also return the User type as above not in array format
  @ApiOkResponse({ type: User })
  // how to take one paramter in the api
  @Get(':id')
  // getHello(@Param('id') id: number) {
  getHello(@Param('id') id: string) {
    console.log(`we are taking this parameter from the api -->  ${id}`);
    // By default the id's datatype is string , so we need to typeCast to ""number""
    // return this.userService.findOneById(Number(id));
    return this.userService.findOneById(id);
  }

  // Here we are telling the swagger that this api will return the User type
  @ApiCreatedResponse({ type: User })
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }
}
// ****** WE CAN ALSO EXPLORE ABOUT SWAGGER DECORATORS USIGN DOCUMENTATION ****** //
