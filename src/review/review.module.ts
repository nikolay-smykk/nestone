import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { ProductModel } from 'src/product/product.model';
import { ReviewController } from './review.controller';
import { ReviewModel } from './review.model';

@Module({
  controllers: [ReviewController],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: ReviewModel,
        schemaOptions: { collection: 'Review' },
      },
    ]),
  ],
})
export class ReviewModule {}
