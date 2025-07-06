import { useState } from "react"

export type StateKey = "A" | "B"

interface SelectorProps {
  onSelect: (state: StateKey) => void
}

export function Selector({ onSelect }: SelectorProps) {
  const [selectedState, setSelectedState] = useState<StateKey>("A")

  const handleSelect = (state: StateKey) => {
    setSelectedState(state)
    onSelect(state)
  }

  return (
    <div className="text-center font-serif">
      <h1 className="text-stone-500 text-2xl font-semibold mb-4">
        Clabby's Stories
      </h1>

      <p className="text-sm text-gray-600 mb-2">
        Choose a version of the app to preview:
      </p>

      <div className="flex justify-center space-x-2 mb-6">
        {(["A", "B"] as StateKey[]).map((state) => (
          <button
            key={state}
            onClick={() => handleSelect(state)}
            className={`px-4 py-2 border border-black rounded ${
              selectedState === state
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
          >
            {state}
          </button>
        ))}
      </div>

      <p className="text-sm text-gray-500">
        Selected State: <strong>{selectedState}</strong>
      </p>
    </div>
  )
}
