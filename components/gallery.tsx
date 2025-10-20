"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const images = [
  {
    title: "Living Room",
    query: "modern luxury living room with terracotta accents",
  },
  {
    title: "Master Bedroom",
    query: "contemporary master bedroom with city view",
  },
  {
    title: "Kitchen",
    query: "modern kitchen with premium appliances",
  },
  {
    title: "Bathroom",
    query: "luxury bathroom with marble finishes",
  },
  {
    title: "Balcony",
    query: "spacious balcony with city skyline view",
  },
  {
    title: "Entrance",
    query: "elegant apartment entrance foyer",
  },
]

export function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <section id="gallery" className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Explore the Space</h2>
          <p className="text-lg text-muted-foreground">Take a virtual tour of our stunning 2BHK apartments</p>
        </div>

        <div className="space-y-6">
          {/* Main Image */}
          <div className="relative w-full h-64 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden group">
            <img
              src={`/.jpg?height=500&width=800&query=${images[currentIndex].query}`}
              alt={images[currentIndex].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />

            {/* Navigation Buttons */}
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary/80 hover:bg-primary text-primary-foreground p-2 rounded-full transition z-10"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary/80 hover:bg-primary text-primary-foreground p-2 rounded-full transition z-10"
            >
              <ChevronRight size={24} />
            </button>

            {/* Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-primary to-transparent">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground">{images[currentIndex].title}</h3>
            </div>
          </div>

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`relative h-20 md:h-24 rounded-lg overflow-hidden transition-all ${
                  index === currentIndex ? "ring-2 ring-primary scale-105" : "opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={`/.jpg?height=100&width=100&query=${image.query}`}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
