import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from '../database/comment.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>,
  ) {}

  async findAll(): Promise<Comment[]> {
    return this.commentRepository.find();
  }

  async findById(id: number): Promise<Comment | undefined> {
    return this.commentRepository.findOneBy({ idComment: id });
  }

  async create(comment: Comment): Promise<Comment> {
    return this.commentRepository.save(comment);
  }

  async update(id: number, comment: Comment): Promise<Comment | undefined> {
    await this.commentRepository.update(id, comment);
    return this.findById(id);
  }

  async delete(id: number): Promise<void> {
    await this.commentRepository.delete(id);
  }
}
