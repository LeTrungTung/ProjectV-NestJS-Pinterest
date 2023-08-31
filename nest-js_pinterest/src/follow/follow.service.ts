import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Follow } from '../database/follow.entity';

@Injectable()
export class FollowService {
  constructor(
    @InjectRepository(Follow)
    private followRepository: Repository<Follow>,
  ) {}

  async findAll(): Promise<Follow[]> {
    return this.followRepository.find();
  }

  async findOne(id: number): Promise<Follow | undefined> {
    return this.followRepository.findOneBy({ idFollow: id });
  }

  async create(follow: Follow): Promise<Follow> {
    return this.followRepository.save(follow);
  }

  async update(id: number, follow: Follow): Promise<Follow | undefined> {
    await this.followRepository.update(id, follow);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.followRepository.delete(id);
  }
}
