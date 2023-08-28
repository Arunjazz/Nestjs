import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  // This is for the swagger ui, to show the id datatype in the swagger ui
  @ApiProperty({ required: false })
  // If the parameter is optinal then we need to make it in this way, bcz swagger don't know about it
  id?: number;

  @ApiProperty()
  name: string;
}
