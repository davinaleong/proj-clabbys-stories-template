// App.tsx
import React, { useState } from "react"
import { Selector } from "./states/Selector/Selector"
import { states } from "./data/states"
import type { StateKey, PageName } from "./data/states"

interface AppState {
  currentKey: StateKey
  currentPage: PageName
}

class StateManager {
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
    if (!states.selector.includes(newKey))
      throw new Error(`Invalid key: ${newKey}`)
    this.state.currentKey = newKey
    this.state.currentPage = states[newKey][0]
  }

  setPage(newPage: PageName): void {
    const pages = states[this.state.currentKey]
    if (!pages.includes(newPage))
      throw new Error(`Invalid page for key ${this.state.currentKey}`)
    this.state.currentPage = newPage
  }

  getAvailablePages(): PageName[] {
    return states[this.state.currentKey]
  }
}

const App: React.FC = () => {
  const manager = new StateManager()
  const [currentKey, setCurrentKey] = useState<StateKey>(
    manager.getState().currentKey
  )
  const [currentPage, setCurrentPage] = useState<PageName>(
    manager.getState().currentPage
  )

  const handleSelectKey = (key: StateKey) => {
    manager.setKey(key)
    setCurrentKey(key)
    setCurrentPage(manager.getState().currentPage)
  }

  const handleSelectPage = (page: PageName) => {
    manager.setPage(page)
    setCurrentPage(page)
  }

  const pages = states[currentKey]

  return (
    <div>
      <Selector selectedKey={currentKey} onSelect={handleSelectKey} />

      <hr />

      <h2>Current Key: {currentKey}</h2>
      <h3>Current Page: {currentPage}</h3>

      <div>
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => handleSelectPage(page)}
            disabled={page === currentPage}
          >
            {page}
          </button>
        ))}
      </div>

      <hr />

      <div>
        <h1>{currentPage}</h1>
        <p>
          This is the placeholder content for <strong>{currentPage}</strong>{" "}
          under state <strong>{currentKey}</strong>.
        </p>
      </div>
    </div>
  )
}

export default App
