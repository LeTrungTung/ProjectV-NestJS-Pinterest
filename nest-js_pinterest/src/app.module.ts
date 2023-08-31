import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'ormconfig';
import { UserModule } from './user/user.module';
import { ImageModule } from './image/image.module';
import { CommentModule } from './comment/comment.module';
import { ImageSavedUserModule } from './saveimage/saveimage.module';
import { OperationImageModule } from './operationimage/operationimage.module';
import { LikeLoveCommentModule } from './likelovecomment/likelovecomment.module';
import { FollowModule } from './follow/follow.module';
// import { CombinedImgCommentUserModule } from './combineImgCommentUser/ImgCommentUser.module';

@Module({
  imports: [
    UserModule,
    ImageModule,
    CommentModule,
    ImageSavedUserModule,
    OperationImageModule,
    LikeLoveCommentModule,
    FollowModule,
    // CombinedImgCommentUserModule,
    TypeOrmModule.forRoot(config),
  ],
})
export class AppModule {}
