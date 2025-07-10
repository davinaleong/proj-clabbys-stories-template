import React, { useState } from "react"

import img0516 from "./../assets/images/IMG_0516.jpg"
import img0570 from "./../assets/images/IMG_0570.jpg"
import img0592 from "./../assets/images/IMG_0592.jpg"
import img0597 from "./../assets/images/IMG_0597.jpg"

interface GalleryCardProps {
  onDoubleClick?: () => void
}

const GalleryCard: React.FC<GalleryCardProps> = ({ onDoubleClick }) => {
  const [showMeta, setShowMeta] = useState(false)

  return (
    <div
      className="relative cursor-pointer overflow-hidden max-w-[700px] aspect-square border-8 border-white shadow-xl mx-auto bg-white p-2"
      onClick={() => setShowMeta(!showMeta)}
      onDoubleClick={onDoubleClick}
    >
      {/* GalleryCard Metadata Overlay */}
      <div
        className={`absolute bottom-0  font-serif left-0 w-full bg-white/80 text-black p-4 z-10 transition-transform duration-300 ease-in-out ${
          showMeta ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <h2 className="text-2xl font-semibold">Gallery Title Placeholder</h2>
        <p className="mt-2">2025-07-10 · Jane Doe</p>
        <p className="mt-2">
          This is a placeholder description for your photo GalleryCard. Tap
          again to hide this panel.
        </p>
      </div>

      {/* 4-Image Golden Ratio Grid */}
      <div className="grid grid-cols-6 grid-rows-6 gap-2 w-full h-full pointer-events-none">
        {/* Image 1: wide */}
        <div className="col-span-4 row-span-3">
          <img
            src={img0516}
            alt="GalleryCard Image 1"
            className="w-full h-full object-cover aspect-[1.618/1]"
          />
        </div>

        {/* Image 2: tall */}
        <div className="col-span-2 row-span-3">
          <img
            src={img0597}
            alt="GalleryCard Image 2"
            className="w-full h-full object-cover aspect-[1/1.618]"
          />
        </div>

        {/* Image 3: tall */}
        <div className="col-span-2 row-span-3">
          <img
            src={img0570}
            alt="GalleryCard Image 3"
            className="w-full h-full object-cover aspect-[1/1.618]"
          />
        </div>

        {/* Image 4: wide */}
        <div className="col-span-4 row-span-3">
          <img
            src={img0592}
            alt="GalleryCard Image 4"
            className="w-full h-full object-cover aspect-[1.618/1]"
          />
        </div>
      </div>
    </div>
  )
}

export default GalleryCard
