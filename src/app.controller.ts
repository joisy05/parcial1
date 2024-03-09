import { Controller, Get, Post, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/Darsaludo')
  getSaludo(): string {
    return this.appService.getSaludo();
  }

  @Post('/SaludoRespuesta')
  getRespuesta(): string {
    return this.appService.getRespuesta();
  }

  @Get('darunsaludo/:tomarnombre')
  getDarsaludo(@Param ('tomarnombre') tomarnombre: string): string {
    return this.appService.getDarsaludo(tomarnombre);
  }
}
