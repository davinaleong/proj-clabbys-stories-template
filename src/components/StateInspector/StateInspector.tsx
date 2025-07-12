// src/components/StateInspector/StateInspector.tsx
import React, { useState } from "react"
import type { StateKey, AppScreen } from "./../../data/states"

interface StateInspectorProps {
  currentKey: StateKey
  currentPage: AppScreen
  onBackToSelector: () => void
}

const StateInspector: React.FC<StateInspectorProps> = ({
  onBackToSelector,
  currentKey,
  currentPage,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-4 right-4 z-50 w-[300px]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-3 py-2 text-xs font-semibold text-white bg-purple-700 rounded-t hover:bg-purple-700 transition"
      >
        {isOpen ? "Hide State Inspector ▲" : "Show State Inspector ▼"}
      </button>

      <button
        onClick={onBackToSelector}
        className="mt-4 w-full px-3 py-2 text-xs font-medium text-white bg-gray-600 rounded hover:bg-gray-700 transition"
      >
        Back to Selector
      </button>

      {isOpen && (
        <div className="bg-white shadow-md rounded-b-lg p-4 border border-t-0 border-gray-200">
          <h2 className="text-sm font-semibold text-gray-700 mb-2">
            State Inspector
          </h2>

          <div className="mb-3">
            <p className="text-xs text-gray-500 mb-1">Current State:</p>
            <p className="font-mono text-sm text-purple-700">{currentKey}</p>
          </div>

          <div>
            <p className="text-xs text-gray-500 mb-1">Current Page:</p>
            <p className="font-mono text-sm text-blue-700">{currentPage}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default StateInspector
