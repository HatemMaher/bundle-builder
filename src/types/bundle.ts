export interface Selection {
  productId: string;

  variantId?: string;

  quantity: number;
}

export interface BundleState {
  selections: Selection[];
}