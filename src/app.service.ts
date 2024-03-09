import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getSaludo(): string {
    return '¡Hola Mundo!';
  }

  getRespuesta(): string {
    return '¡Bienvenid@ Usuari@!'
  }

  getDarsaludo(tomarnombre: string): string {
    return `¡Hola!, ${tomarnombre}! ¡Bienvenido de nuevo!`
}
}
