// src/components/FloatingNavigator.tsx
import React from "react"
import { states } from "../data/states"
import type { StateKey, PageName } from "../data/states"

interface FloatingNavigatorProps {
  currentKey: StateKey
  currentPage: PageName
  onSelectKey: (key: StateKey) => void
  onSelectPage: (page: PageName) => void
}

const FloatingNavigator: React.FC<FloatingNavigatorProps> = ({
  currentKey,
  currentPage,
  onSelectKey,
  onSelectPage,
}) => {
  const pages = states[currentKey]

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white shadow-lg rounded-lg p-4 border border-gray-200 w-[300px]">
      {/* Version Selector */}
      <h2 className="text-sm font-semibold text-gray-700 mb-1">Current Key:</h2>
      <div className="flex gap-2 mb-3">
        {states.selector.map((key) => (
          <button
            key={key}
            onClick={() => onSelectKey(key)}
            disabled={key === currentKey}
            className={`px-3 py-1 text-xs rounded border transition-all
              ${
                key === currentKey
                  ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                  : "bg-purple-500 text-white hover:bg-purple-600"
              }
            `}
          >
            {key}
          </button>
        ))}
      </div>

      {/* Page Selector */}
      <h3 className="text-sm font-semibold text-gray-700 mb-1">
        Current Page:
      </h3>
      <p className="mb-2 text-md text-gray-800">{currentPage}</p>

      <div className="flex flex-wrap gap-2">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onSelectPage(page)}
            disabled={page === currentPage}
            className={`px-2 py-1 text-xs rounded border transition-all
              ${
                page === currentPage
                  ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }
            `}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  )
}

export default FloatingNavigator
