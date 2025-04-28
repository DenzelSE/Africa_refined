"use client"

import { useState } from "react"
import Image from "next/image"
import { ImageCarousel } from "@/components/image-carousel"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MobileSchoolSelector } from "@/components/gallery/mobile-school-selector"
import { ImageLightbox } from "@/components/gallery/image-lightbox"

export default function GalleryPage() {
  const [activeSchool, setActiveSchool] = useState<string>("all")
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [currentImages, setCurrentImages] = useState<{ src: string; alt: string; caption?: string }[]>([])

  // Featured carousel images - replace with your actual images
  const featuredImages = [
    {
      src: "/carousel/WhatsApp Image 2024-12-13 at 07.30.03_4f91a4c1.jpg",
      alt: "Africa Refined Featured Image 1",
    },
    {
      src: "/carousel/2019-06-06-00-50-32-197.jpg",
      alt: "Africa Refined Featured Image 2",
    },
    {
      src: "/carousel/WhatsApp Image 2024-12-09 at 07.59.03_2a7f773f.jpg",
      alt: "Africa Refined Featured Image 3",
    },
  ]

  // Gallery images organized by schools
  const schoolGalleries = [
    {
      id: "Zithathele-primary",
      name: "Zithathele Primary School",
      description: "Images from our projects at Zithathele Ptimary School",
      images: [
        { src: "/Schools/ Zithathele Ptimary School/20190710163841.gif", alt: "Zithathele Ptimary School - Image 1" },
        { src: "/Schools/ Zithathele Ptimary School/2019-06-06-00-54-02-126.jpg", alt: "Zithathele Ptimary School - Image 2" },
        { src: "/Schools/ Zithathele Ptimary School/2019-06-06-00-57-43-940.jpg", alt: "Zithathele Ptimary School - Image 3" },
        { src: "/Schools/ Zithathele Ptimary School/2019-06-05-23-58-21-989.jpg", alt: "Zithathele Ptimary School - Image 4" },
        { src: "/Schools/ Zithathele Ptimary School/2019-06-06-01-00-08-636.jpg", alt: "Zithathele Ptimary School - Image 5" },
      ],
    },
    {
      id: "Leratong-secondary",
      name: "Leratong Primary School",
      description: "Our initiatives at Leratong Primary School",
      images: [
        { src: "/Schools/Leratong Primary School/IMG_20191121_151934.jpg", alt: "Leratong Primary School - Image 1" },
        { src: "/Schools/Leratong Primary School/2019-11-21-20-01-05-780.jpg", alt: "Leratong Primary School - Image 2" },
        { src: "/Schools/Leratong Primary School/IMG_20191121_162909.jpg", alt: "Leratong Primary School - Image 3" },
        { src: "/Schools/Leratong Primary School/2019-11-21-20-46-08-382.jpg", alt: "Leratong Primary School - Image 4" },
        { src: "/Schools/Leratong Primary School/2019-11-21-20-35-06-529.jpg", alt: "Leratong Primary School - Image 5" },
        { src: "/Schools/Leratong Primary School/IMG_20191121_151600.jpg", alt: "Leratong Primary School - Image 6" },
        { src: "/Schools/Leratong Primary School/IMG_20191121_195346.jpg", alt: "Leratong Primary School - Image 7" },
        { src: "/Schools/Leratong Primary School/IMG_20191121_151934.jpg", alt: "Leratong Primary School - Image 8" },
      ],
    },
    {
      id: "Lereshe-primary",
      name: "Lereshe Primary School",
      description: "Photos from Lereshe Primary School projects",
      images: [
        { src: "/Schools/Lereshe Primary School/2019-11-20-17-30-08-403.jpg", alt: "Lereshe Primary School - Image 1" },
        { src: "/Schools/Lereshe Primary School/6L.jpg", alt: "Lereshe Primary School - Image 2" },
        { src: "/Schools/Lereshe Primary School/IMG_20191120_172043.jpg", alt: "Lereshe Primary School - Image 3" },
        { src: "/Schools/Lereshe Primary School/2019-11-20-17-27-45-201.jpg", alt: "Lereshe Primary School - Image 4" },
        { src: "/Schools/Lereshe Primary School/2019-11-20-17-31-21-112.jpg", alt: "Lereshe Primary School - Image 5" },
        { src: "/Schools/Lereshe Primary School/7L.jpg", alt: "Lereshe Primary School - Image 6" },
        { src: "/Schools/Lereshe Primary School/IMG_20191120_170408.jpg", alt: "Lereshe Primary School - Image 7" },
        { src: "/Schools/Lereshe Primary School/IMG_20191120_172043.jpg", alt: "Lereshe Primary School - Image 8" },
        { src: "/Schools/Lereshe Primary School/IMG_20191120_173706.jpg", alt: "Lereshe Primary School - Image 9" },
      ],
    },
    {
      id: "Noordgesig-primary",
      name: "Noordgesig Primary School",
      description: "Our work with Noordgesig Primary School",
      images: [
        { src: "/Schools/Noordgesig Primary School/WhatsApp Image 2024-12-13 at 07.41.46_b9b45d73.jpg", alt: "Noordgesig Primary School - Image 1" },
        { src: "/Schools/Noordgesig Primary School/WhatsApp Image 2024-12-12 at 12.35.04_ea043f7d.jpg", alt: "Noordgesig Primary School - Image 2" },
        { src: "/Schools/Noordgesig Primary School/WhatsApp Image 2024-12-13 at 07.35.38_72c68699.jpg", alt: "Noordgesig Primary School - Image 3" },
        { src: "/Schools/Noordgesig Primary School/WhatsApp Image 2024-12-13 at 07.22.58_4a93a9e4.jpg", alt: "Noordgesig Primary School - Image 4" },
        { src: "/Schools/Noordgesig Primary School/WhatsApp Image 2024-12-13 at 07.32.13_3fcfa258.jpg", alt: "Noordgesig Primary School - Image 5" },
        { src: "/Schools/Noordgesig Primary School/WhatsApp Image 2024-12-09 at 21.17.26_4454a00c.jpg", alt: "Noordgesig Primary School - Image 6" },
        { src: "/Schools/Noordgesig Primary School/WhatsApp Image 2024-12-13 at 01.35.46_2b15231c.jpg", alt: "Noordgesig Primary School - Image 7" },
        { src: "/Schools/Noordgesig Primary School/WhatsApp Image 2024-12-13 at 07.26.45_779e1f55.jpg", alt: "Noordgesig Primary School - Image 8" },
        { src: "/Schools/Noordgesig Primary School/WhatsApp Image 2024-12-13 at 07.28.17_41863e23.jpg", alt: "Noordgesig Primary School - Image 9" },
        { src: "/Schools/Noordgesig Primary School/WhatsApp Image 2024-12-13 at 07.28.34_171eee8c.jpg", alt: "Noordgesig Primary School - Image 10" },
        { src: "/Schools/Noordgesig Primary School/WhatsApp Image 2024-12-13 at 07.30.03_4f91a4c1.jpg", alt: "Noordgesig Primary School - Image 11" },
        { src: "/Schools/Noordgesig Primary School/WhatsApp Image 2024-12-13 at 07.38.41_e90d02ae.jpg", alt: "Noordgesig Primary School - Image 12" },
        { src: "/Schools/Noordgesig Primary School/WhatsApp Image 2024-12-13 at 07.39.48_c9e5c135.jpg", alt: "Noordgesig Primary School - Image 13" },
        { src: "/Schools/Noordgesig Primary School/WhatsApp Image 2024-12-13 at 07.39.48_c21cdb46.jpg", alt: "Noordgesig Primary School - Image 14" },
        { src: "/Schools/Noordgesig Primary School/WhatsApp Image 2024-12-13 at 07.41.46_2134567d.jpg", alt: "Noordgesig Primary School - Image 15" },
        { src: "/Schools/Noordgesig Primary School/WhatsApp Image 2024-12-13 at 07.42.09_0b73a1d9.jpg", alt: "Noordgesig Primary School - Image 16" },
      ],
    },
    {
      id: "AB-xuma-primary",
      name: "AB Xuma Primary School",
      description: "Our initiatives at AB Xuma Primary School",
      images: [
        { src: "/Schools/AB Xuma Primary School/WhatsApp Image 2024-12-09 at 07.59.03_2a7f773f.jpg", alt: "AB Xuma Primary School - Image 1" },
        { src: "/Schools/AB Xuma Primary School/WhatsApp Image 2024-12-09 at 07.59.45_b779ea0c.jpg", alt: "AB Xuma Primary School - Image 2" },
        { src: "/Schools/AB Xuma Primary School/WhatsApp Image 2024-12-09 at 07.47.20_43d493d6.jpg", alt: "AB Xuma Primary School - Image 3" },
        { src: "/Schools/AB Xuma Primary School/WhatsApp Image 2024-12-09 at 08.05.03_c7a96400.jpg", alt: "AB Xuma Primary School - Image 4" },
        { src: "/Schools/AB Xuma Primary School/WhatsApp Image 2024-12-09 at 08.12.38_13381707.jpg", alt: "AB Xuma Primary School - Image 5" },
        { src: "/Schools/AB Xuma Primary School/WhatsApp Image 2024-12-09 at 08.05.03_ba7837a5.jpg", alt: "AB Xuma Primary School - Image 6" },
      ],
    }
  ]

  // Get all images for the "All Schools" tab
  const allImages = schoolGalleries.flatMap((school) => school.images.map((img) => ({ ...img, caption: school.name })))

  const openLightbox = (images: { src: string; alt: string; caption?: string }[], index: number) => {
    setCurrentImages(images)
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  return (
    <div className="min-h-screen">
      <section className="bg-amber-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">GALLERY</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explore our projects and initiatives through images from different schools
          </p>
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

      {/* School Gallery Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">School Galleries</h2>

          {/* Mobile School Selector (visible on small screens) */}
          <MobileSchoolSelector
            schools={schoolGalleries}
            activeSchool={activeSchool}
            onSchoolChange={(schoolId) => {
              setActiveSchool(schoolId)
            }}
          />

          <Tabs defaultValue="all" className="w-full">
            <div className="hidden md:block mb-8 overflow-x-auto">
              <TabsList className="flex w-full justify-start p-1 mb-2">
                <TabsTrigger value="all" className="px-4 py-2">
                  All Schools
                </TabsTrigger>
                {schoolGalleries.map((school) => (
                  <TabsTrigger key={school.id} value={school.id} className="px-4 py-2">
                    {school.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* All Schools Tab */}
            <TabsContent value="all" className="mt-0">
              <div className="mb-6">
                <p className="text-gray-600">Showing images from all schools</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allImages.map((image, index) => (
                  <GalleryImage
                    key={`all-${index}`}
                    src={image.src}
                    alt={image.alt}
                    caption={image.caption}
                    onClick={() => openLightbox(allImages, index)}
                  />
                ))}
              </div>
            </TabsContent>

            {/* Individual School Tabs */}
            {schoolGalleries.map((school) => (
              <TabsContent key={school.id} value={school.id} className="mt-0">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">{school.name}</h3>
                  <p className="text-gray-600">{school.description}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {school.images.map((image, index) => (
                    <GalleryImage
                      key={`${school.id}-${index}`}
                      src={image.src}
                      alt={image.alt}
                      onClick={() => openLightbox(school.images, index)}
                    />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Lightbox for full-screen image viewing */}
      <ImageLightbox
        images={currentImages}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </div>
  )
}

function GalleryImage({
  src,
  alt,
  caption,
  onClick,
}: {
  src: string
  alt: string
  caption?: string
  onClick?: () => void
}) {
  return (
    <div
      className="group relative h-64 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-300"
      />
      {caption && (
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-2 text-sm">{caption}</div>
      )}
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity" />
    </div>
  )
}
