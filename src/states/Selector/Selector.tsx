// Selector.tsx
import React from "react"
import type { StateKey } from "./../../data/states"

interface SelectorProps {
  selectedKey: StateKey
  onSelect: (key: StateKey) => void
}

export const Selector: React.FC<SelectorProps> = ({
  selectedKey,
  onSelect,
}) => {
  const keys: StateKey[] = ["A", "B"]

  return (
    <div>
      <h1>State Selector</h1>
      {keys.map((key) => (
        <button
          key={key}
          onClick={() => onSelect(key)}
          disabled={key === selectedKey}
        >
          {key}
        </button>
      ))}
    </div>
  )
}
