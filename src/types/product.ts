export type ProductCategory =
  | "camera"
  | "plan"
  | "sensor"
  | "accessory";

export interface ProductVariant {
  id: string;
  name: string;
  image?: string;
}

export interface Product {
  id: string;
  category: ProductCategory;
  title: string;
  description: string;
  image?: string;
  badge?: string;
  price: number;
  compareAtPrice?: number;
  learnMoreUrl?: string;
  variants?: ProductVariant[];
  suffix?: string;
}