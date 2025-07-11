import React, { useState } from "react"
import { states } from "./../../data/states"
import type { StateKey, AppScreen } from "./../../data/states"

interface FloatingNavigatorProps {
  currentKey: StateKey
  currentPage: AppScreen
  onSelectKey: (key: StateKey) => void
  onSelectPage: (page: AppScreen) => void
}

const FloatingNavigator: React.FC<FloatingNavigatorProps> = ({
  currentKey,
  currentPage,
  onSelectKey,
  onSelectPage,
}) => {
  const [isOpen, setIsOpen] = useState(true)
  const pages = states[currentKey]

  return (
    <div className="fixed bottom-4 right-4 z-50 w-[300px]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-3 py-2 text-xs font-semibold text-white bg-purple-600 rounded-t hover:bg-purple-700 transition"
      >
        {isOpen ? "Hide Navigator ▲" : "Show Navigator ▼"}
      </button>

      {isOpen && (
        <div className="bg-white shadow-lg rounded-b-lg p-4 border border-t-0 border-gray-200">
          {/* Go Back to Selector */}
          <button
            onClick={() => onSelectPage("selector")}
            className="w-full mb-4 px-3 py-2 text-xs font-semibold text-purple-700 border border-purple-300 rounded hover:bg-purple-100 transition"
          >
            ← Back to Selector
          </button>

          {/* Key Selector */}
          <h2 className="text-sm font-semibold text-gray-700 mb-1">
            Current Key:
          </h2>
          <div className="flex gap-2 mb-3">
            {states.selector.map((key) => (
              <button
                key={key}
                onClick={() => onSelectKey(key)}
                disabled={key === currentKey}
                className={`px-3 py-1 text-xs rounded border transition-all ${
                  key === currentKey
                    ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                    : "bg-purple-500 text-white hover:bg-purple-600"
                }`}
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
                className={`px-2 py-1 text-xs rounded border transition-all ${
                  page === currentPage
                    ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default FloatingNavigator
