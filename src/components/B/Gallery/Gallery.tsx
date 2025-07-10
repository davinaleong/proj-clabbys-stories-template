// B/Gallery.tsx
import React from "react"

import img0516 from "./../../../assets/images/IMG_0516.jpg"
import img0570 from "./../../../assets/images/IMG_0570.jpg"
import img0592 from "./../../../assets/images/IMG_0592.jpg"
import img0597 from "./../../../assets/images/IMG_0597.jpg"

const images = [img0516, img0570, img0592, img0597]

const Gallery: React.FC = () => {
  return (
    <div className="flex min-h-screen justify-center bg-pastel-pink-500">
      <div className="w-full max-w-screen-lg bg-pastel-pink-500 p-4">
        <header className="flow">
          <h1 className="text-4xl font-serif text-carbon-blue-500">
            Gallery Title Placeholder
          </h1>
          <p>
            <time>2025-07-10</time> · Jane Doe
          </p>
          <p>
            This is a placeholder description for your photo GalleryCard. Tap
            again to hide this panel.
          </p>
          <hr />
        </header>

        <div className="p-6 max-w-screen-lg mx-auto">
          <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Gallery Image ${i + 1}`}
                className="w-full rounded shadow-sm break-inside-avoid"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
