// Define possible state keys
export type StateKey = "A" | "B"

// Define valid page names
export type PageName =
  | "Log In Page"
  | "PIN Page"
  | "Galleries Page"
  | "Gallery Page"
  | "Lightbox Page"

// Map of available states for each key
export interface StatesMap {
  selector: StateKey[]
  A: PageName[]
  B: PageName[]
}

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
