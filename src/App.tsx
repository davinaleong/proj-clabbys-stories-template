import "./App.css"
import { useState } from "react"
import { Selector } from "./states/Selector/Selector"
import type { StateKey } from "./states/Selector/Selector"

function App() {
  const [selectedState, setSelectedState] = useState<StateKey>("A")

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div>
        <Selector onSelect={setSelectedState} />
      </div>
    </div>
  )
}

export default App
