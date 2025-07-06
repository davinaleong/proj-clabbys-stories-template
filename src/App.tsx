import React, { useState, useRef } from "react"
import { Selector } from "./states/Selector/Selector"
import { states } from "./data/states"
import type { StateKey, PageName } from "./data/states"
import { StateManager } from "./lib/StateManager"

// Components for state A
import LoginPageA from "./states/A/Login/Login"
import EmailVerificationA from "./states/A/EmailVerification/EmailVerification"
import SampleEmailA from "./states/A/SampleEmail/SampleEmail"
import PinPageA from "./states/A/Pin/Pin"
import GalleriesPageA from "./states/A/Galleries/Galleries"
import GalleryPageA from "./states/A/Gallery/Gallery"
import LightboxPageA from "./states/A/Lightbox/Lightbox"

// Components for state B
import LoginPageB from "./states/B/Login/Login"
import EmailVerificationB from "./states/B/EmailVerification/EmailVerification"
import SampleEmailB from "./states/B/SampleEmail/SampleEmail"
import PinPageB from "./states/B/Pin/Pin"
import GalleriesPageB from "./states/B/Galleries/Galleries"
import GalleryPageB from "./states/B/Gallery/Gallery"
import LightboxPageB from "./states/B/Lightbox/Lightbox"

const App: React.FC = () => {
  const stateManagerRef = useRef(new StateManager())
  const [_, forceUpdate] = useState(0) // Used to trigger re-render

  const handleSelectKey = (key: StateKey) => {
    stateManagerRef.current.setKey(key)
    forceUpdate((n) => n + 1)
  }

  const handleSelectPage = (page: PageName) => {
    stateManagerRef.current.setPage(page)
    forceUpdate((n) => n + 1)
  }

  const { currentKey, currentPage } = stateManagerRef.current.getState()
  const pages = stateManagerRef.current.getAvailablePages()

  if (!currentKey || !currentPage) {
    return <Selector selectedKey={null} onSelect={handleSelectKey} />
  }

  const renderPage = () => {
    if (currentKey === "A") {
      switch (currentPage) {
        case "Log In Page":
          return <LoginPageA />
        case "Email Verification":
          return <EmailVerificationA />
        case "Sample Email":
          return <SampleEmailA />
        case "PIN Page":
          return <PinPageA />
        case "Galleries Page":
          return <GalleriesPageA />
        case "Gallery Page":
          return <GalleryPageA />
        case "Lightbox Page":
          return <LightboxPageA />
        default:
          return <p>Page not found.</p>
      }
    }

    if (currentKey === "B") {
      switch (currentPage) {
        case "Log In Page":
          return <LoginPageB />
        case "Email Verification":
          return <EmailVerificationB />
        case "Sample Email":
          return <SampleEmailB />
        case "PIN Page":
          return <PinPageB />
        case "Galleries Page":
          return <GalleriesPageB />
        case "Gallery Page":
          return <GalleryPageB />
        case "Lightbox Page":
          return <LightboxPageB />
        default:
          return <p>Page not found.</p>
      }
    }

    return <p>Page not found.</p>
  }

  return (
    <div>
      <Selector selectedKey={currentKey} onSelect={handleSelectKey} />

      <hr />

      <h2>Current Key: {currentKey}</h2>
      <h3>Current Page: {currentPage}</h3>

      <div className="flex flex-wrap gap-2">
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

      <div>{renderPage()}</div>
    </div>
  )
}

export default App
