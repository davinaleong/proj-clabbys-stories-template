import React from "react"

interface BlackLightboxProps {
  src: string
  alt?: string
  onClose: () => void
}

const BlackLightbox: React.FC<BlackLightboxProps> = ({
  src,
  alt = "",
  onClose,
}) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white text-3xl font-bold"
        aria-label="Close lightbox"
      >
        &times;
      </button>
      <img
        src={src}
        alt={alt}
        className="max-w-full max-h-full object-contain rounded shadow-lg"
      />
    </div>
  )
}

export default BlackLightbox
