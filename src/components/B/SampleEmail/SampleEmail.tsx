import React from "react"

interface SampleEmailProps {
  onVerifyLinkClick: () => void
}

const SampleEmail: React.FC<SampleEmailProps> = ({ onVerifyLinkClick }) => {
  return (
    <div className="flex min-h-screen justify-center bg-pastel-pink-500 px-4">
      <div className="w-full max-w-screen-lg flex items-center justify-center bg-pastel-pink-500 py-16">
        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 max-w-md w-full text-left">
          {/* Subject */}
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Subject: Your Verification Code for App Name
          </h2>

          {/* Message */}
          <p className="text-sm text-gray-700 mb-4">
            Hi there,
            <br />
            <br />
            Here's your 6-digit code to verify your email address:
          </p>

          {/* Code */}
          <p className="text-2xl font-mono text-center text-black mb-6 tracking-widest">
            123456
          </p>

          {/* Simulated Link */}
          <p className="text-sm text-gray-700 mb-4">
            You can also verify your email by clicking the link below:
            <br />
            <button
              onClick={onVerifyLinkClick}
              className="text-blue-600 underline break-all hover:text-blue-800"
            >
              https://app.example.com/verify?code=123456
            </button>
          </p>

          {/* Footer */}
          <p className="text-xs text-gray-600">
            If you did not request this email, you can safely ignore it. The
            code will expire in 10 minutes.
            <br />
            <br />— The App Name Team
          </p>
        </div>
      </div>
    </div>
  )
}

export default SampleEmail
