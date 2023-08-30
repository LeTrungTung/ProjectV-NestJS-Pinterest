import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Image } from '../database/image.entity';

@Injectable()
export class ImageService {
  constructor(
    @InjectRepository(Image)
    private imageRepository: Repository<Image>,
  ) {}

  async findAll(): Promise<Image[]> {
    return this.imageRepository.find();
  }

  async findById(id: number): Promise<Image | undefined> {
    return this.imageRepository.findOneBy({ id: id });
  }

  async create(image: Image): Promise<Image> {
    return this.imageRepository.save(image);
  }

  async update(id: number, image: Image): Promise<Image | undefined> {
    await this.imageRepository.update(id, image);
    return this.findById(id);
  }

  async delete(id: number): Promise<void> {
    await this.imageRepository.delete(id);
  }
}
