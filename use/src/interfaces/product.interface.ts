export interface ProductCharacteristic {
  value: string;
  name: string;
}
export interface ReviewsModel {
  _id: string;
  name: string;
  title: string;
  description: string;
  rating: number;
  createAt: Date;
}
export interface ProductModel {
  _id: string;
  categories: string[];
  tags: string[];
  title: string;
  link: string;
  price: number;
  credit: number;
  oldPrice: number;
  description: string;
  characteristic: ProductCharacteristic[];
  createAt: Date;
  updateAt: Date;
  _v: number;
  image: string;
  initialRating: number;
  reviews: ReviewsModel[];
  reviewsCount: number;
  reviewsAvg: number;
  advanteges: string;
}
