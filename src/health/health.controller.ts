import { Controller, Inject } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { HealthCheckService, TypeOrmHealthIndicator, HealthCheck } from '@nestjs/terminus';
import { register } from 'src/user/entities/register.entity';
import { Repository } from 'typeorm';

@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private db: TypeOrmHealthIndicator,
    @Inject('USER_REPOSITORY')
    private photoRepository: Repository<register>
  ) {}

  @Get()
  async getApiHealth() {
    console.log(this.photoRepository.metadata.database);
    return 'available';
  }

  @Get('find')
  async findAll() {
    return this.photoRepository.find();
  }

  @Get('typeorm')
  @HealthCheck()
  check() {
    return this.health.check([() => this.db.pingCheck('login_table')]);
  }
}
