import React, { useState } from "react"
import logo from "./../../../assets/images/logo-original.png"

interface LoginPageProps {
  onLoginSuccess: () => void
}

const LoginPage: React.FC<LoginPageProps> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Simple validation
    const isValid = /\S+@\S+\.\S+/.test(email)
    if (isValid) {
      onLoginSuccess()
    } else {
      alert("Please enter a valid email.")
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-pastel-pink-500">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xs sm:max-w-sm text-center px-4"
      >
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img src={logo} alt="App Logo" className="h-14" />
        </div>

        {/* App Name */}
        <h1 className="text-2xl font-serif text-carbon-blue-500 mb-6">
          App Name
        </h1>

        {/* Email Input */}
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-sm bg-gray-100"
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-black text-white font-semibold py-2"
        >
          Log In
        </button>
      </form>
    </div>
  )
}

export default LoginPage
