import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { FindTopPageDto } from './dto/find-top-page.dto';
import { TopPageModel } from './top-page.model';

@Controller('top-page')
export class TopPageController {
  @Post('create')
  async create(@Body() dto: Omit<TopPageModel, '_id'>): Promise<any> {
    return 'This action adds a new product' + dto;
  }

  @Get(':id')
  async get(@Param('id') id: string): Promise<any> {
    return 'This action returns a single product' + id;
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: Partial<TopPageModel>,
  ): Promise<any> {
    return 'some' + id + dto;
  }
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<any> {
    return 'This action removes a single product' + id;
  }
  @Patch(':id')
  async patch(
    @Param('id') id: string,
    @Body() dto: Partial<TopPageModel>,
  ): Promise<any> {
    return 'This action updates a single product' + id + dto;
  }

  @Get('findAll')
  async findAll(): Promise<any> {
    return 'This action returns all products';
  }

  @HttpCode(200)
  @Post()
  async find(@Body() dto: FindTopPageDto): Promise<any> {
    return 'This action returns one products' + dto;
  }
}
