import { Module } from '@nestjs/common';
import { NavService } from './nav.service';
import { NavController } from './nav.controller';

@Module({
  controllers: [NavController],
  providers: [NavService]
})
export class NavModule {}
