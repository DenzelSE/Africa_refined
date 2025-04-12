import Image from "next/image"
import { ImageCarousel } from "@/components/image-carousel"

export default function GalleryPage() {
  // Featured carousel images - replace with your actual images
  const featuredImages = [
    {
      src: "/carousel/WhatsApp Image 2024-12-05 at 00.11.14_9828787d.jpg",
      alt: "Africa Refined Featured Image 1",
    },
    {
      src: "/carousel/WhatsApp Image 2024-12-13 at 07.38.41_e90d02ae.jpg",
      alt: "Africa Refined Featured Image 2",
    },
    {
      src: "/carousel/WhatsApp Image 2024-12-17 at 12.05.01_3b9a8aab.jpg",
      alt: "Africa Refined Featured Image 3",
    },
    // Add your actual image when available
    // { src: "/images/carousel/WhatsApp Image 2024-12-13 at 07.30.03_4f91a4c1.jpg", alt: "Africa Refined Project" },
  ]

  // Gallery images - replace with your actual images
  const galleryImages = [
    { src: "/carousel/2019-06-06-00-50-32-197.jpg", alt: "Gallery Image 1" },
    { src: "/carousel/WhatsApp Image 2024-12-17 at 12.19.29_a349d8e0.jpg", alt: "Gallery Image 2" },
    { src: "/carousel/WhatsApp Image 2024-12-17 at 05.54.11_889e6d00.jpg", alt: "Gallery Image 3" },
    { src: "/carousel/2019-06-06-00-50-32-197.jpg", alt: "Gallery Image 4" },
    { src: "/carousel/2019-06-06-00-50-32-197.jpg", alt: "Gallery Image 5" },
    { src: "/carousel/2019-06-06-00-50-32-197.jpg", alt: "Gallery Image 6" },
    { src: "/carousel/2019-06-06-00-50-32-197.jpg", alt: "Gallery Image 7" },
    { src: "/carousel/2019-06-06-00-50-32-197.jpg", alt: "Gallery Image 8" },
    { src: "/carousel/2019-06-06-00-50-32-197.jpg", alt: "Gallery Image 9" },
  ]

  return (
    <div className="min-h-screen">
      <section className="bg-amber-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">GALLERY</h1>
          <p className="text-xl max-w-3xl mx-auto">Explore our projects and initiatives through images</p>
        </div>
      </section>

      {/* Featured Images Carousel */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Featured Images</h2>
          <div className="h-[400px] md:h-[500px]">
            <ImageCarousel images={featuredImages} />
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Image Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <GalleryImage key={index} src={image.src} alt={image.alt} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function GalleryImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-64 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        fill
        className="object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>
  )
}
