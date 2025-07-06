// states.ts

// Define valid page names as a union type
export type PageName =
  | "Log In Page"
  | "PIN Page"
  | "Galleries Page"
  | "Gallery Page"
  | "Lightbox Page"

// Define state keys
export type StateKey = "A" | "B"

// Interface for the overall structure
export interface StatesMap {
  selector: StateKey[]
  A: PageName[]
  B: PageName[]
}

// Export the actual states as a constant with full typing
export const states: StatesMap = {
  selector: ["A", "B"],
  A: [
    "Log In Page",
    "PIN Page",
    "Galleries Page",
    "Gallery Page",
    "Lightbox Page",
  ],
  B: [
    "Log In Page",
    "PIN Page",
    "Galleries Page",
    "Gallery Page",
    "Lightbox Page",
  ],
}
