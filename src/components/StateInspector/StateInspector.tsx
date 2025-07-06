// src/components/StateInspector.tsx
import React from "react"
import type { StateKey, PageName } from "./../../data/states"

interface StateInspectorProps {
  currentKey: StateKey
  currentPage: PageName
}

const StateInspector: React.FC<StateInspectorProps> = ({
  currentKey,
  currentPage,
}) => {
  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white shadow-lg rounded-lg p-4 border border-gray-200 w-[280px]">
      <h2 className="text-sm font-semibold text-gray-700 mb-1">Current Key</h2>
      <p className="text-md font-bold text-blue-700 mb-3">{currentKey}</p>

      <h3 className="text-sm font-semibold text-gray-700 mb-1">Current Page</h3>
      <p className="text-md text-gray-800">{currentPage}</p>
    </div>
  )
}

export default StateInspector
