import React from "react"

interface BlurredLightboxProps {
  src: string
  alt?: string
  onClose: () => void
}

const BlurredLightbox: React.FC<BlurredLightboxProps> = ({
  src,
  alt = "",
  onClose,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Blurred Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover blur-lg scale-110"
        style={{ backgroundImage: `url(${src})` }}
        aria-hidden="true"
      ></div>

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white text-3xl font-bold z-20"
        aria-label="Close lightbox"
      >
        &times;
      </button>

      {/* Foreground Image */}
      <img
        src={src}
        alt={alt}
        className="max-w-full max-h-full object-contain z-20 shadow-lg rounded"
      />
    </div>
  )
}

export default BlurredLightbox
