import { Module } from '@nestjs/common';
import { ConceitosAutomaticoService } from './conceitos-automatico.service';
import { ConceitosAutomaticoController } from './conceitos-automatico.controller';

@Module({
  providers: [ConceitosAutomaticoService],
  controllers: [ConceitosAutomaticoController]
})
export class ConceitosAutomaticoModule {}
