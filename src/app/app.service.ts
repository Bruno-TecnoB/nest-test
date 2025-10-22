import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello, world!';
  }

  solucionaExemplo() {
    return 'Exemplo usa o service';
  }
}
