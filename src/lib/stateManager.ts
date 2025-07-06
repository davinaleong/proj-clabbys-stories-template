// lib/stateManager.ts
import { states } from "../data/states"
import type { StateKey, PageName, AppScreen } from "../data/states"

export interface AppState {
  currentKey: StateKey | null
  currentPage: AppScreen
}

export class StateManager {
  private state: AppState

  constructor() {
    this.state = {
      currentKey: null,
      currentPage: "selector",
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
    this.state.currentPage = states[newKey][0] // Start at the first page
  }

  setPage(newPage: PageName): void {
    if (!this.state.currentKey) {
      throw new Error("Cannot set page before selecting a state key.")
    }

    const pages = states[this.state.currentKey]
    if (!pages.includes(newPage)) {
      throw new Error(
        `Invalid page "${newPage}" for state "${this.state.currentKey}"`
      )
    }

    this.state.currentPage = newPage
  }

  getAvailablePages(): PageName[] {
    return this.state.currentKey ? states[this.state.currentKey] : []
  }

  reset(): void {
    this.state = {
      currentKey: null,
      currentPage: "selector",
    }
  }
}
