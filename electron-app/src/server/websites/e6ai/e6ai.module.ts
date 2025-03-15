import { Module } from '@nestjs/common';
import { e6ai } from './e6ai.service';

@Module({
  providers: [e6ai],
  exports: [e6ai],
})
export class e6aiModule {}
