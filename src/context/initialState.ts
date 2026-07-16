/**
 * Defines the structure of the global builder state.
 */
export interface BuilderState {
  selectedVariants: Record<string, Record<string, number>>;
  activeVariant: Record<string, string>;
}

/**
 * initialState
 * * The default starting structure for the builder context. 
 * Currently pre-seeded with specific data to immediately match the Figma desktop mockup 
 * upon loading, preventing an empty cart visual state for demonstration purposes.
 */
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
  // Sets the default UI view for products that have variants
  activeVariant: {
    "wyze-cam-v4": "white",
    "wyze-cam-pan-v3": "white",
  },
};