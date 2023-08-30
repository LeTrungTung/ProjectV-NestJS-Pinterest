import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'ormconfig';
import { UserModule } from './user/user.module';
import { ImageModule } from './image/image.module';
import { CommentModule } from './comment/comment.module';
import { ImageSavedUserModule } from './saveimage/saveimage.module';
import { OperationImageModule } from './operationimage/operationimage.module';
import { LikeLoveCommentModule } from './likelovecomment/likelovecomment.module';

@Module({
  imports: [
    UserModule,
    ImageModule,
    CommentModule,
    ImageSavedUserModule,
    OperationImageModule,
    LikeLoveCommentModule,
    TypeOrmModule.forRoot(config),
  ],
})
export class AppModule {}
