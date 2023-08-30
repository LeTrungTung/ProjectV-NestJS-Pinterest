import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  Inject,
  Module,
} from '@nestjs/common';
import { ImageService } from './image.service';
import { Image } from '../database/image.entity';

@Controller('api/v1/image')
// @Module({
//   imports: [ImageModule], // Đảm bảo ImageModule được import ở đây
// })
export class ImageController {
  constructor(
    private imageService: ImageService, // @Inject(ImageService) private readonly imageService: ImageService,
  ) {}

  @Get()
  async findAll(): Promise<Image[]> {
    return this.imageService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Image | undefined> {
    return this.imageService.findById(+id);
  }

  @Post()
  async create(@Body() image: Image): Promise<Image> {
    return this.imageService.create(image);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() image: Image,
  ): Promise<Image | undefined> {
    return this.imageService.update(+id, image);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.imageService.delete(+id);
  }
}
