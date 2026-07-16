/**
 * Represents a single product selection within the user's bundle.
 */
export interface Selection {
  productId: string;

  variantId?: string;

  quantity: number;
}

/**
 * Represents the overall state payload for a user's customized bundle.
 */
export interface BundleState {
  selections: Selection[];
}