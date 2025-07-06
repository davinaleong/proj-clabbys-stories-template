import { StateKey, PageName, states } from "./states"

export interface AppState {
  currentKey: StateKey
  currentPage: PageName
}

export class StateManager {
  private state: AppState

  constructor(
    initialKey: StateKey = "A",
    initialPage: PageName = "Log In Page"
  ) {
    this.state = {
      currentKey: initialKey,
      currentPage: initialPage,
    }
  }

  getState(): AppState {
    return this.state
  }

  setKey(newKey: StateKey): void {
    if (!states.selector.includes(newKey)) {
      throw new Error(`Invalid key: ${newKey}`)
    }
    this.state.currentKey = newKey
    this.state.currentPage = states[newKey][0] // default to first page
  }

  setPage(newPage: PageName): void {
    const pages = states[this.state.currentKey]
    if (!pages.includes(newPage)) {
      throw new Error(
        `Page "${newPage}" is not valid for state "${this.state.currentKey}"`
      )
    }
    this.state.currentPage = newPage
  }

  getAvailablePages(): PageName[] {
    return states[this.state.currentKey]
  }
}
