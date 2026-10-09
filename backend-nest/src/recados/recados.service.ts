import { Injectable, NotFoundException } from '@nestjs/common';
import { Recado } from './entities/recado.entity';

@Injectable()
export class RecadosService {
    private lastId = 1;
    private recados: Recado[] = [
        {
            id: 1,
            texto: 'este é um recado de teste',
            de: 'joana',
            para: 'joao',
            lido: false,
            data: new Date(),
        },
    ];

    throwNotFoundError() {
    throw new NotFoundException('Recado não encontrado');
  }

    findALL(){
    return this.recados;
    }

    findOne(id: string){
    const recado = this.recados.find(item => item.id === +id);

    if(recado) return recado;

    this.throwNotFoundError();
    }

    create(body:any){
           // return body;
      this.lastId++;
      const id = this.lastId;
      const newRecado = {
                id,
                ...body,
             };
      this.recados.push(newRecado)
      return newRecado;
       }

    update(id : string, body : any){
        const recadoExistenteIndex = this.recados.findIndex(
            item => item.id === +id,
        );
      if(recadoExistenteIndex < 0){
        this.throwNotFoundError();
      }

      const recadoExistente = this.recados[recadoExistenteIndex];

      this.recados[recadoExistenteIndex] = {
        ...recadoExistente,
        ...body,
      } ;

     return this.recados[recadoExistenteIndex]
    }
    
    remove(id: string) {
    const recadoExistenteIndex = this.recados.findIndex(
      item => item.id === +id,
    );
    
    if (recadoExistenteIndex < 0) {
      this.throwNotFoundError();
    }

    const recado = this.recados[recadoExistenteIndex];

    this.recados.splice(recadoExistenteIndex, 1);

    return recado;
  }

          
    
}
