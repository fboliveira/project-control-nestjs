import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto.js';
import { UpdateProjectDto } from './dto/update-project.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './entities/project.entity.js';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectsService {

  constructor(
    @InjectRepository(Project)
    private projectRepository: Repository<Project>
  ) {}

  async create(createProjectDto: CreateProjectDto) {
    
    const project = new Project();
    project.name = createProjectDto.name;

    const new_project = await this.projectRepository.save(project);

    return {
      new_project
    }

  }

  async findAll(): Promise<Project[]> {
    return await this.projectRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} project`;
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    return `This action updates a #${id} project`;
  }

  remove(id: number) {
    return `This action removes a #${id} project`;
  }
}
