import { Injectable } from '@nestjs/common';
import { CreateChartOfAccountDto } from './dto/create-chart-of-account.dto';
import { UpdateChartOfAccountDto } from './dto/update-chart-of-account.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ChartOfAccountEntity } from './entities/chart-of-account.entity';

@Injectable()
export class ChartOfAccountService {
  constructor(
    @InjectRepository(ChartOfAccountEntity)
    private coaRepo: Repository<ChartOfAccountEntity>,
  ) {}

  create(createChartOfAccountDto: CreateChartOfAccountDto) {
    return 'This action adds a new chartOfAccount';
  }

  createTree(coaList: ChartOfAccountEntity[], match: string): any[] {
    const data = coaList.filter((coa) => coa.namespace === match);
    for (const i in data) {
      data[i]['children'] = this.createTree(coaList, `${match}${data[i].id}/`);
    }
    return data;
  }

  async findAll() {
    const coaList = await this.coaRepo.find();

    return this.createTree(coaList, '/');
  }

  findOne(id: number) {
    return `This action returns a #${id} chartOfAccount`;
  }

  update(id: number, updateChartOfAccountDto: UpdateChartOfAccountDto) {
    return `This action updates a #${id} chartOfAccount`;
  }

  remove(id: number) {
    return `This action removes a #${id} chartOfAccount`;
  }
}
