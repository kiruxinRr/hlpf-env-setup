import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Request, Response } from 'express';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger('Exception');

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();
    const traceId = randomUUID();

    let status = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
    let message = exception instanceof HttpException ? exception.getResponse() : 'Internal server error';

    this.logger.error(`[${traceId}] ${request.method} ${request.url} — ${status}`, exception instanceof Error ? exception.stack : undefined);

    response.status(status).json({
      error: {
        code: status,
        message: typeof message === 'object' ? (message as any).message : message,
        traceId,
      },
      timestamp: new Date().toISOString(),
    });
  }
}