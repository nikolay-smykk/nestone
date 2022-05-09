import { ProductModel } from './product.model';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('product')
export class ProductController {
  @Post('create')
  async create(@Body() dto: Omit<ProductModel, '_id'>): Promise<any> {
    return 'This action adds a new product' + dto;
  }

  @Get(':id')
  async get(@Param('id') id: string): Promise<any> {
    return 'This action returns a single product' + id;
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: Partial<ProductModel>,
  ): Promise<any> {
    return 'some' + id + dto;
  }
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<any> {
    return 'This action removes a single product' + id;
  }
}
