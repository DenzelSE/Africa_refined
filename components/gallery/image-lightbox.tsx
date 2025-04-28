"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface ImageLightboxProps {
  images: { src: string; alt: string; caption?: string }[]
  initialIndex: number
  isOpen: boolean
  onClose: () => void
}

export function ImageLightbox({ images, initialIndex, isOpen, onClose }: ImageLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  useEffect(() => {
    setCurrentIndex(initialIndex)
  }, [initialIndex])

  useEffect(() => {
    if (isOpen) {
      // Prevent scrolling when lightbox is open
      document.body.style.overflow = "hidden"

      // Add keyboard event listeners
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose()
        if (e.key === "ArrowLeft") prev()
        if (e.key === "ArrowRight") next()
      }

      window.addEventListener("keydown", handleKeyDown)
      return () => {
        document.body.style.overflow = ""
        window.removeEventListener("keydown", handleKeyDown)
      }
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const currentImage = images[currentIndex]

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
        aria-label="Close lightbox"
      >
        <X size={32} />
      </button>

      {/* Navigation buttons */}
      <button
        onClick={prev}
        className="absolute left-4 text-white hover:text-gray-300 z-10"
        aria-label="Previous image"
      >
        <ChevronLeft size={40} />
      </button>

      <button onClick={next} className="absolute right-4 text-white hover:text-gray-300 z-10" aria-label="Next image">
        <ChevronRight size={40} />
      </button>

      {/* Image */}
      <div className="relative w-full h-full max-w-4xl max-h-[80vh] mx-auto">
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src={currentImage.src || "/placeholder.svg"}
            alt={currentImage.alt}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 80vw"
          />
        </div>

        {/* Caption */}
        {(currentImage.caption || currentImage.alt) && (
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4 text-center">
            {currentImage.caption || currentImage.alt}
          </div>
        )}

        {/* Image counter */}
        <div className="absolute top-4 left-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded-full text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  )
}
