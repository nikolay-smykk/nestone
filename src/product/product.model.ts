import { prop } from '@typegoose/typegoose';
import { Base } from '@typegoose/typegoose/lib/defaultClasses';

class ProductCharacteristic {
  name: string;
  value: string;
}

export interface ProductModel extends Base {}
export class ProductModel {
  id: string;
  @prop()
  image: string[];

  @prop()
  title: string;

  @prop()
  price: number;

  @prop()
  oldPrice: number;

  @prop()
  credit: number;

  @prop()
  calculatedRating: number;

  @prop()
  description: string;

  @prop()
  advantages: string[];

  @prop()
  disadvantages: string[];

  @prop({ type: () => [String] })
  category: string[];

  @prop({ type: () => [String] })
  tags: string[];

  createdAt: Date;
  updatedAt: Date;
  characteristics: ProductCharacteristic[];
}
