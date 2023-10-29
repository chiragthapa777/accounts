import { Module } from '@nestjs/common';
import { ChartOfAccountService } from './chart-of-account.service';
import { ChartOfAccountController } from './chart-of-account.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChartOfAccountEntity } from './entities/chart-of-account.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ChartOfAccountEntity])],
  controllers: [ChartOfAccountController],
  providers: [ChartOfAccountService],
})
export class ChartOfAccountModule {}
