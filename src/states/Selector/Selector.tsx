// Selector.tsx
import React from "react"
import type { StateKey } from "./../../data/states"

interface SelectorProps {
  selectedKey: StateKey | null
  onSelect: (key: StateKey) => void
}

export const Selector: React.FC<SelectorProps> = ({
  selectedKey,
  onSelect,
}) => {
  return (
    <div>
      <h1>Select a State</h1>
      <div className="flex flex-wrap gap-2">
        {(["A", "B"] as StateKey[]).map((key) => (
          <button
            key={key}
            onClick={() => onSelect(key)}
            disabled={selectedKey === key}
          >
            {key}
          </button>
        ))}
      </div>
    </div>
  )
}
