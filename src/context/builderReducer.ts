import type { BuilderState } from "./initialState";

/**
 * TypeScript Discriminated Union for Builder Actions.
 * * By explicitly defining the 'type' string for each action alongside its required payload,
 * TypeScript will automatically autocomplete and type-check the payload inside the reducer's switch statement.
 */
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

/**
 * builderReducer
 * * A pure function that calculates the next state tree based on the previous state and the dispatched action.
 * It enforces immutable state updates (creating new objects instead of mutating existing ones) 
 * so React knows exactly when to trigger re-renders.
 */
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