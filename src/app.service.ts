import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '[Nestjs] Hello World!';
  }

  getStatus() {
    return { messagem: `[Server] Server is running on port ${process.env.PORT}.`}
  }

}
