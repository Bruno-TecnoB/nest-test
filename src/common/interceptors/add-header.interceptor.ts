/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';

export class AddHeaderInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    const response = context.switchToHttp().getResponse();

    response.setHeader('X-Custom-Header', 'O Valor do Cabeçalho');
    return next.handle();
  }
}
