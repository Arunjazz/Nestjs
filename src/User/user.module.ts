import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { SharedModule } from 'src/shared/shared.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { register } from './entities/register.entity';

@Module({
  imports: [SharedModule, TypeOrmModule.forFeature([register])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
