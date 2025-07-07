import React, { useEffect, useState } from "react"
import logo from "./../../../assets/images/logo-original.png"

interface EmailVerificationProps {
  onSuccess: () => void
  onChangeEmail: () => void
}

const RESEND_INTERVAL = 30

const generateCode = () =>
  Math.floor(100000 + Math.random() * 900000).toString()

const EmailVerification: React.FC<EmailVerificationProps> = ({
  onSuccess,
  onChangeEmail,
}) => {
  const [code, setCode] = useState(generateCode)
  const [inputCode, setInputCode] = useState("")
  const [countdown, setCountdown] = useState(RESEND_INTERVAL)
  const [canResend, setCanResend] = useState(false)

  // Countdown logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval)
          setCanResend(true)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [code])

  const handleResend = (e: React.MouseEvent) => {
    e.preventDefault()
    if (!canResend) return

    const newCode = generateCode()
    setCode(newCode)
    setCountdown(RESEND_INTERVAL)
    setCanResend(false)
    console.log("Resent code:", newCode)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputCode === code) {
      onSuccess()
    } else {
      alert("Invalid code. Please try again.")
    }
  }

  return (
    <div className="flex min-h-screen justify-center bg-pastel-pink-500">
      <div className="w-full max-w-screen-lg flex items-center justify-center bg-pastel-pink-500">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-xs sm:max-w-sm text-center px-4 py-8"
        >
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <img src={logo} alt="App Logo" className="h-14" />
          </div>

          {/* Headings */}
          <h1 className="text-2xl font-serif text-carbon-blue-500 mb-2">
            App Name
          </h1>
          <h2 className="text-lg font-semibold mb-4">Check Your Email</h2>

          {/* Instructions */}
          <p className="text-sm text-gray-800 mb-2">
            We've sent a 6-digit code to <br />
            <span className="font-mono">email@example.com</span>.
          </p>
          <p className="text-sm text-gray-800 mb-4">
            Please enter the code below to verify your identity and continue.
          </p>

          <p className="text-xs text-gray-700 mb-6">
            Tip: It may take a minute to arrive. Check your spam or promotions
            folder if you don't see it.
          </p>

          {/* Simulated Code */}
          <p className="text-lg font-mono text-gray-600 mb-2">
            Your code: <strong>{code}</strong>
          </p>

          {/* Input */}
          <input
            type="text"
            maxLength={6}
            placeholder="Enter Code"
            value={inputCode}
            onChange={(e) => setInputCode(e.target.value)}
            className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-sm bg-gray-100 text-center"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white font-semibold py-2 mb-6"
          >
            Verify & Continue
          </button>

          {/* Help Links */}
          <div className="text-sm text-gray-800">
            Need help?{" "}
            <button
              onClick={handleResend}
              disabled={!canResend}
              className={`underline ${
                canResend
                  ? "text-carbon-blue-500"
                  : "text-gray-400 cursor-not-allowed"
              }`}
            >
              {canResend ? "Resend Code" : `Resend in ${countdown}s`}
            </button>{" "}
            or{" "}
            <button
              type="button"
              onClick={onChangeEmail}
              className="text-carbon-blue-500 underline"
            >
              Change Email
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EmailVerification
