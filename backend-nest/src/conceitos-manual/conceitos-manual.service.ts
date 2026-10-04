import {Injectable } from "@nestjs/common";

@Injectable()
export class ConceitosManualService{
    solucionaHome(): string {
        return 'home do conceitos Manual solucionada.';
    }
}