import React, { useState, useRef } from "react"
import type { StateKey, AppScreen } from "./data/states"
import FloatingNavigator from "./components/FloatingNavigator/FloatingNavigator"
import { Selector } from "./components/Selector/Selector"
import { StateManager } from "./lib/StateManager"

// Components for state A
import LoginPageA from "./components/A/Login/Login"
import EmailVerificationA from "./components/A/EmailVerification/EmailVerification"
import SampleEmailA from "./components/A/SampleEmail/SampleEmail"
import PinPageA from "./components/A/Pin/Pin"
import GalleriesPageA from "./components/A/Galleries/Galleries"
import GalleryPageA from "./components/A/Gallery/Gallery"
import LightboxPageA from "./components/A/Lightbox/Lightbox"

// Components for state B
import LoginPageB from "./components/B/Login/Login"
import EmailVerificationB from "./components/B/EmailVerification/EmailVerification"
import SampleEmailB from "./components/B/SampleEmail/SampleEmail"
import PinPageB from "./components/B/Pin/Pin"
import GalleriesPageB from "./components/B/Galleries/Galleries"
import GalleryPageB from "./components/B/Gallery/Gallery"
import LightboxPageB from "./components/B/Lightbox/Lightbox"

const App: React.FC = () => {
  const stateManagerRef = useRef(new StateManager())
  const [_, forceUpdate] = useState(0)

  const handleSelectKey = (key: StateKey) => {
    stateManagerRef.current.setKey(key)
    forceUpdate((n) => n + 1)
  }

  const handleSelectPage = (page: AppScreen) => {
    if (page === "selector") {
      stateManagerRef.current.reset()
    } else {
      stateManagerRef.current.setPage(page)
    }
    forceUpdate((n) => n + 1)
  }

  const handleLoginSuccess = () => {
    handleSelectPage("Email Verification")
  }

  const { currentKey, currentPage } = stateManagerRef.current.getState()

  const renderPage = () => {
    if (currentPage === "selector") {
      return <Selector selectedKey={null} onSelect={handleSelectKey} />
    }

    if (currentKey === "A") {
      switch (currentPage) {
        case "Log In Page":
          return <LoginPageA onLoginSuccess={handleLoginSuccess} />
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
          return <LoginPageB onLoginSuccess={handleLoginSuccess} />
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
      {renderPage()}

      {currentPage !== "selector" && currentKey && (
        <FloatingNavigator
          currentKey={currentKey}
          currentPage={currentPage}
          onSelectKey={handleSelectKey}
          onSelectPage={handleSelectPage}
        />
      )}
    </div>
  )
}

export default App
