import type { BuilderState } from "./initialState";

export type BuilderAction =
  | {
      type: "UPDATE_QUANTITY";
      productId: string;
      variantId: string;
      quantity: number;
    }
  | {
      type: "SET_ACTIVE_VARIANT";
      productId: string;
      variantId: string;
    };

export function builderReducer(
  state: BuilderState,
  action: BuilderAction
): BuilderState {
  switch (action.type) {
    case "UPDATE_QUANTITY":
      return {
        ...state,
        selectedVariants: {
          ...state.selectedVariants,

          [action.productId]: {
            ...(state.selectedVariants[action.productId] || {}),
            [action.variantId]: action.quantity,
          },
        },
      };

      case "SET_ACTIVE_VARIANT":
        return {
            ...state,

            activeVariant: {
            ...state.activeVariant,

            [action.productId]: action.variantId,
            },
        };

    default:
      return state;
  }
}