import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Image } from '../database/image.entity';
import { ImageController } from './image.controller';
import { ImageService } from './image.service';
import { Comment } from 'src/database/comment.entity';
import { User } from 'src/database/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Image, Comment, User])],
  controllers: [ImageController],
  providers: [ImageService],
  exports: [ImageService],
})
export class ImageModule {} // Chỉ bao gồm ImageService và ImageController
