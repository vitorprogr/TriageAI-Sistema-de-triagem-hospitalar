import { Body, Controller, Get, Post, Param, Patch, Delete,HttpCode, Query, HttpStatus} from '@nestjs/common';
import { get } from 'http';
import { RecadosService } from './recados.service';

@Controller('recados')

export class RecadosController {
    constructor(private readonly recadosService: RecadosService) {}
    @HttpCode(HttpStatus.OK)
    @Get()
    findALL(@Query() pagination: any){  
        const {limit = 10, offset = 0 } = pagination;
        //return `retorna todos os recados. limit =${limit}, offset=${offset}.`;
        return this.recadosService.findALL();
    }

    @Get(':id')
    findOne(@Param('id') id:string){
        console.log(id)
        return this.recadosService.findOne(id);
    }

    @Post()
    create(@Body()body:any){
       // return body;
         return this.recadosService.create(body);
    }

    @Patch(':id')
    update( @Param('id') id: string, @Body() body: any){
         return this.recadosService.update(id, body)
    }

    @Delete(':id')
    remove(@Param('id') id:string){
        console.log(id)
        return this.recadosService.remove(id)
    }

}
