import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ReviewModel } from './review.model';

@Controller('review')
export class ReviewController {
  @Post('create')
  async create(@Body() dto: Omit<ReviewModel, '_id'>): Promise<any> {
    return 'This action adds a new product' + dto;
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<any> {
    return 'This action removes a single product' + id;
  }

  @Get('byProduct/:id')
  async get(@Param('prodcutId') productId: string): Promise<any> {
    return '' + productId;
  }
}
