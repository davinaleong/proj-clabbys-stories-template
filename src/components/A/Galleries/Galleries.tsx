import React from "react"
import GalleryCard from "./../../GalleryCard"

interface GalleriesPageProps {
  onOpenGallery: () => void
}

const Galleries: React.FC<GalleriesPageProps> = ({ onOpenGallery }) => {
  const galleryCount = 9

  return (
    <div className="bg-striped flex min-h-screen justify-center bg-carbon-blue-500">
      <div className="w-full max-w-screen-lg bg-pastel-pink-500 p-4">
        <header className="flow">
          <h1 className="text-4xl font-serif text-carbon-blue-500">
            Galleries Page
          </h1>
          <p>
            This is the galleries page. Here you can view various galleries.
          </p>
          <hr />
        </header>

        {/* Gallery Grid */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 p-6">
          {Array.from({ length: galleryCount }, (_, i) => (
            <GalleryCard key={i} onDoubleClick={onOpenGallery} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Galleries
