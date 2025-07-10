import React, { useState } from "react"
import Lightbox from "../../Lightboxes/BlurredLightbox"

import img0516 from "./../../../assets/images/IMG_0516.jpg"
import img0570 from "./../../../assets/images/IMG_0570.jpg"
import img0592 from "./../../../assets/images/IMG_0592.jpg"
import img0597 from "./../../../assets/images/IMG_0597.jpg"

const images = [img0516, img0570, img0592, img0597]

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
