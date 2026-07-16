/**
 * Defines the strict, allowed categories for products in the builder flow.
 * * This drives the logic for sorting products into their respective Accordion Steps.
 */
export type ProductCategory =
  | "camera"
  | "plan"
  | "sensor"
  | "accessory";

/**
 * Represents a specific physical or digital variation of a product (e.g., Color).
 */
export interface ProductVariant {
  id: string;
  name: string;
  image?: string;
}

/**
 * The core Product interface defining the shape of all items available in the catalog data.
 */
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