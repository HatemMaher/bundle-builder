import {
  createContext,
  useContext,
  useReducer,
  type Dispatch,
  type ReactNode,
} from "react";

import { builderReducer, type BuilderAction } from "./builderReducer";
import { initialState, type BuilderState } from "./initialState";

/**
 * Defines the shape of the global Builder context.
 */
interface BuilderContextType {
  state: BuilderState;
  dispatch: Dispatch<BuilderAction>;
  saveState: () => void;
}

// Constant key used for localStorage hydration and persistence
const STORAGE_KEY = "wyze_bundle_state";

// Initialize the context with a null default. 
// We will enforce its usage within a Provider via the custom hook below.
const BuilderContext = createContext<BuilderContextType | null>(null);

/**
 * Hydration Function: Checks for an existing saved session in the browser's localStorage.
 * If one exists and is valid JSON, it loads that state. Otherwise, it defaults to the initial state.
 */
const getInitialState = (): BuilderState => {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Failed to parse saved state", e);
      }
    }
  }
  return initialState;
};

/**
 * BuilderProvider Component
 * * Wraps the application (or a subtree) to provide global access to the builder's state and dispatch.
 */
export const BuilderProvider = ({ children }: { children: ReactNode }) => {
  // useReducer is ideal here over useState because of the deeply nested, complex state object
  const [state, dispatch] = useReducer(builderReducer, undefined, getInitialState);

  // useReducer is ideal here over useState because of the deeply nested, complex state object
  const saveState = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    alert("System successfully saved for later!");
  };

  return (
    <BuilderContext.Provider value={{ state, dispatch, saveState }}>
      {children}
    </BuilderContext.Provider>
  );
};

/**
 * Custom Hook: useBuilder
 * * A strict accessor for the BuilderContext. It throws a helpful error if a developer
 * tries to use this hook outside of the BuilderProvider tree.
 */
export const useBuilder = () => {
  const context = useContext(BuilderContext);
  if (!context) {
    throw new Error("useBuilder must be used inside BuilderProvider");
  }
  return context;
};  