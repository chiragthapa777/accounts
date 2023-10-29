import { Module } from '@nestjs/common';
import { GeneralLedgerService } from './general-ledger.service';
import { GeneralLedgerController } from './general-ledger.controller';

@Module({
  controllers: [GeneralLedgerController],
  providers: [GeneralLedgerService]
})
export class GeneralLedgerModule {}
