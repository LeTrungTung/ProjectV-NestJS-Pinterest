import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { FollowService } from './follow.service';
import { Follow } from '../database/follow.entity';

@Controller('api/v1/follow')
export class FollowController {
  constructor(private readonly followService: FollowService) {}

  @Get()
  async findAll(): Promise<Follow[]> {
    return this.followService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Follow | undefined> {
    return this.followService.findOne(+id);
  }

  @Post()
  async create(@Body() follow: Follow): Promise<Follow> {
    return this.followService.create(follow);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() follow: Follow,
  ): Promise<Follow | undefined> {
    return this.followService.update(+id, follow);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.followService.remove(+id);
  }
}
