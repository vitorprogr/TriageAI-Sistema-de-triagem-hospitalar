import{Controller, Get} from '@nestjs/common';
import { ConceitosManualService } from './conceitos-manual.service';


@Controller('conceitos')
export class ConceitosManualController{
    constructor(private readonly conceitosManualService: ConceitosManualService){}

    @Get()
    home(): string{
       // return'conceitos-manual';
        return this.conceitosManualService.solucionaHome();
    }
}