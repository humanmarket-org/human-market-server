import {
  Money, StoredImage,
  PhysicalCharacteristics, FoodCharacteristics
} from './support';

import { Category, Tag, Review } from './categorization';

export default class Product {
  createdAt: Date;
  name: string;
  price: Money;
  description: string;
  characteristics: PhysicalCharacteristics | FoodCharacteristics;
  pictures: StoredImage[];
  variations: Product[];
  stockMeasurement: 'unit' | 'g' | 'kg'
  minimumUnits: number;
  bulkDiscounts: [number, number][]; // [>=10 units, 10% discount], [>=20 units, 15% discount]
  subscriptionOnly: boolean;
  reviews: Review[];
  category: Category; // Global site category
  tags: Tag[];
  scheduledContent: ScheduledContent;
}

export class ProductStock {
  product: Product;
  stock: number;
}

export class ProductsBundles {
  title: string;
  products: Product[];
  discount: number;
}

export class ProductsSection {
  title: string;
  products: Product[];
  order: number;
}

export class ScheduledContent {
  date: Date;
  description: string;
  product?: Product; // It can be another product too!
}
