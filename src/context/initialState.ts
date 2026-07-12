export interface BuilderState {
  selectedVariants: Record<string, Record<string, number>>;

  activeVariant: Record<string, string>;
}

export const initialState: BuilderState = {
  selectedVariants: {},

  activeVariant: {},
};