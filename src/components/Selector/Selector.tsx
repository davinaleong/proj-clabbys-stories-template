import React from "react"
import type { StateKey } from "../../data/states"

interface SelectorProps {
  selectedKey: StateKey | null
  onSelect: (key: StateKey) => void
}

export const Selector: React.FC<SelectorProps> = ({
  selectedKey,
  onSelect,
}) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-serif">Clabby's Stories</h1>
        <p className="text-sm">Select a Variant</p>
        <div className="flex justify-center gap-4">
          {(["A", "B"] as StateKey[]).map((key) => (
            <button
              key={key}
              onClick={() => onSelect(key)}
              disabled={selectedKey === key}
              className={`px-4 py-2 rounded text-sm font-medium border transition 
                ${
                  selectedKey === key
                    ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                    : "bg-black text-white hover:bg-gray-800"
                }`}
            >
              {key}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
