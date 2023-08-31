import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Image } from '../database/image.entity';
import { Comment } from 'src/database/comment.entity';
import { User } from 'src/database/user.entity';

@Injectable()
export class ImageService {
  constructor(
    @InjectRepository(Image)
    private imageRepository: Repository<Image>,
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
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

  async getCombinedData(): Promise<any[]> {
    const combinedData = await this.commentRepository
      .createQueryBuilder('comment')
      .innerJoinAndSelect('comment.image', 'image')
      .innerJoinAndSelect('comment.user', 'user')
      .getMany();

    return combinedData;
  }
}
