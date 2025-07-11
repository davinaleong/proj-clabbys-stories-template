import React, { useState } from "react"
import Lightbox from "../../Lightboxes/BlurredLightbox"

import imgA from "./../../../assets/images/0002.jpg"
import imgB from "./../../../assets/images/0007.jpg"
import imgC from "./../../../assets/images/0008.jpg"
import imgD from "./../../../assets/images/0003.jpg"

const images = [imgA, imgB, imgC, imgD]

const Gallery: React.FC = () => {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)

  return (
    <div className="bg-striped flex min-h-screen justify-center bg-carbon-blue-500">
      <div className="w-full max-w-screen-lg bg-pastel-pink-500 p-4">
        <header className="flow">
          <h1 className="text-4xl font-serif text-carbon-blue-500">
            Gallery Title Placeholder
          </h1>
          <p>
            <time>2025-07-10</time> · Jane Doe
          </p>
          <p>
            This is a placeholder description for your photo GalleryCard. Tap an
            image to view full screen.
          </p>
          <hr className="border-0 h-1 bg-carbon-blue-500 rounded my-4" />
        </header>

        <div className="p-6 max-w-screen-lg mx-auto">
          <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Gallery Image ${i + 1}`}
                className="w-full rounded shadow-sm break-inside-avoid cursor-pointer"
                onClick={() => setLightboxSrc(src)}
              />
            ))}
          </div>
        </div>
      </div>

      {lightboxSrc && (
        <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
      )}
    </div>
  )
}

export default Gallery
