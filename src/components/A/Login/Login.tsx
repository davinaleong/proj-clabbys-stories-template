import React from "react"
import logo from "./../../../assets/images/logo-original.png" // Update if needed

const LoginPage: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-pastel-pink-500">
      <div className="w-full max-w-xs sm:max-w-sm text-center px-4">
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
        />

        {/* Login Button */}
        <button className="w-full bg-black text-white font-semibold py-2">
          Log In
        </button>
      </div>
    </div>
  )
}

export default LoginPage
