// data/states.ts

export type StateKey = "A" | "B"

export type PageName =
  | "Log In Page"
  | "Email Verification"
  | "Sample Email"
  | "PIN Page"
  | "Galleries Page"
  | "Gallery Page"
  | "Lightbox Page"

// Special app screen (adds 'selector' to pages)
export type AppScreen = PageName | "selector"

export interface StatesMap {
  selector: StateKey[]
  A: PageName[]
  B: PageName[]
}

export const states: StatesMap = {
  selector: ["A", "B"],
  A: [
    "Log In Page",
    "Email Verification",
    "Sample Email",
    "PIN Page",
    "Galleries Page",
    "Gallery Page",
    "Lightbox Page",
  ],
  B: [
    "Log In Page",
    "Email Verification",
    "Sample Email",
    "PIN Page",
    "Galleries Page",
    "Gallery Page",
    "Lightbox Page",
  ],
}
