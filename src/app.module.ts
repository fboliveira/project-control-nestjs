import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ConfigModule } from '@nestjs/config';
import { ProjectsController } from './projects/projects.controller.js';

@Module({
  imports: [ ConfigModule.forRoot() ],
  controllers: [AppController, ProjectsController],
  providers: [AppService],
})
export class AppModule {}
