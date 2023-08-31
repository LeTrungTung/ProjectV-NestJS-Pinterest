import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from '../database/comment.entity';
import { CommentController } from './comment.controller';
import { CommentService } from './comment.service';
import { Image } from 'src/database/image.entity';
import { User } from 'src/database/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Comment])],
  controllers: [CommentController],
  providers: [CommentService],
})
export class CommentModule {}
