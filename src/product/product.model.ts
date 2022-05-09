export class ProductModel {
  _id: string;
  image: string[];
  title: string;
  price: number;
  oldPrice: number;
  credit: number;
  calculatedRating: number;
  description: string;
  advantages: string[];
  disadvantages: string[];
  category: string[];
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
  characteristics: {
    [key: string]: string;
  };
}
