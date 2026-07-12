export interface BuilderState {
  selectedVariants: Record<string, Record<string, number>>;
  activeVariant: Record<string, string>;
}

export const initialState: BuilderState = {
  // Seeding the exact state shown in the Figma desktop screenshot
  selectedVariants: {
    "wyze-cam-v4": { white: 1 },
    "wyze-cam-pan-v3": { white: 2 },
    "cam-unlimited": { default: 1 },
    "wyze-sense-motion": { default: 2 },
    "wyze-sense-hub": { default: 1 },
    "wyze-microsd-256": { default: 2 },
  },
  activeVariant: {
    "wyze-cam-v4": "white",
    "wyze-cam-pan-v3": "white",
  },
};