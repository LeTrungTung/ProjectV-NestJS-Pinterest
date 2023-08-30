import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../database/user.entity';

@Controller('api/v1/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User | undefined> {
    return this.userService.findById(+id);
  }

  @Post()
  async create(@Body() user: User): Promise<User> {
    return this.userService.create(user);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() user: User,
  ): Promise<User | undefined> {
    return this.userService.update(+id, user);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.userService.delete(+id);
  }
}
