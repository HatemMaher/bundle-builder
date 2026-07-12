import {
  createContext,
  useContext,
  useReducer,
  type Dispatch,
  type ReactNode,
} from "react";

import { builderReducer, type BuilderAction } from "./builderReducer";
import { initialState, type BuilderState } from "./initialState";

interface BuilderContextType {
  state: BuilderState;
  dispatch: Dispatch<BuilderAction>;
  saveState: () => void;
}

const STORAGE_KEY = "wyze_bundle_state";

const BuilderContext = createContext<BuilderContextType | null>(null);

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

export const BuilderProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(builderReducer, undefined, getInitialState);

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

export const useBuilder = () => {
  const context = useContext(BuilderContext);
  if (!context) {
    throw new Error("useBuilder must be used inside BuilderProvider");
  }
  return context;
};  