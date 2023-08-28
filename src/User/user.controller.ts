import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
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

  @ApiOkResponse({ type: User })
  @Get(':id')
  getHello(@Param('id', ParseIntPipe) id: number) {
    console.log(
      `we are taking this parameter from the api -->  ${id} and type is ${typeof id}`,
    );
    // We want to make sure that the user give number as parmeter using ""ParseIntPipe""
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
