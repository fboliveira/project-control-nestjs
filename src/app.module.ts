import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ConfigModule } from '@nestjs/config';
import { ProjectsController } from './projects/projects.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectsModule } from './projects/projects.module.js';
import { ProjectsService } from './projects/projects.service.js';
import { Project } from './projects/entities/project.entity.js';

@Module({
  imports: [ ConfigModule.forRoot(),

    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: process.env.DATABASE_URL,
      entities: [ Project ],
      synchronize: true,
    }),

    ProjectsModule
    
   ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
