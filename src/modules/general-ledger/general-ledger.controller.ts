import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GeneralLedgerService } from './general-ledger.service';
import { CreateGeneralLedgerDto } from './dto/create-general-ledger.dto';
import { UpdateGeneralLedgerDto } from './dto/update-general-ledger.dto';

@Controller('general-ledger')
export class GeneralLedgerController {
  constructor(private readonly generalLedgerService: GeneralLedgerService) {}

  @Post()
  create(@Body() createGeneralLedgerDto: CreateGeneralLedgerDto) {
    return this.generalLedgerService.create(createGeneralLedgerDto);
  }

  @Get()
  findAll() {
    return this.generalLedgerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.generalLedgerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGeneralLedgerDto: UpdateGeneralLedgerDto) {
    return this.generalLedgerService.update(+id, updateGeneralLedgerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.generalLedgerService.remove(+id);
  }
}
