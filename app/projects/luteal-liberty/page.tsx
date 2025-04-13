"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Book, Calendar, Heart, Link, Star, Users } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef } from "react"


// Video component with autoplay and loop
const VideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Ensure video plays when component mounts
    if (videoRef.current) {
      videoRef.current.playbackRate = 2.0
      videoRef.current.play().catch((error) => {
        console.error("Error playing video:", error)
      })
    }
  }, [])

  return (
    <video ref={videoRef} className="w-full h-full object-cover rounded-2xl" autoPlay muted loop  playsInline>
     
      <source src="/carousel/WhatsApp Video 2024-12-09 at 08.07.29_419d0be2.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}

export default function LutealLibertyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Hero Section with Curved Design */}
      <div className="relative min-h-[500px] overflow-hidden bg-gradient-to-b from-pink-400 to-pink-800">
        <div className="absolute inset-0 opacity-50">
          <Image
            src="/carousel/WhatsApp Image 2024-12-09 at 07.59.03_2a7f773f.jpg"
            alt="Luteal Liberty Banner"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="relative container mx-auto px-6 pt-32 pb-20">
          <div className="py-8"></div>
          <h1 className="text-5xl font-bold text-white mb-6">Luteal Liberty Project</h1>
          <p className="text-xl text-white max-w-2xl">
            {`Empowering young girls through reproductive and menstrual health education while addressing the challenges
            they face during their transition through puberty.`}
          </p>
        </div>
      </div>

      {/* About Section with Video */}
      <section className="py-16 bg-pink-200">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-pink-600">About Luteal Liberty</h2>
              <p className="text-gray-700 mb-6">
                {`The concept behind the Luteal Liberty project title stems from the fourth and final phase of the
                menstrual cycle, known as the luteal phase. During this phase, the corpus luteum, formed after
                ovulation, produces hormones and exits the body, as the body prepares for a potential pregnancy by
                increasing progesterone levels.`}
              </p>
              <p className="text-gray-700 mb-6">
                {`'Liberty' represents freedom, independence, and empowerment. It signifies the freedom to understand and
                manage one's body, the empowerment that comes from education and self-awareness, and the ability to
                independently make informed decisions about one's health.`}
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-pink-600">Key Focus Areas:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Menstrual Health Management Education</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Sexual Health and Reproductive Education</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Self-care and Mental Health Support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Access to Menstrual Products</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <VideoPlayer />
              </div>

              {/* Right side dots */}
              <div className="absolute -bottom-8 -right-8">
                <div className="flex flex-col gap-2 h-full justify-between">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div key={`right-${i}`} className="w-2 h-2 rounded-full bg-pink-500" />
                  ))}
                </div>
              </div>
              {/* Right side dots */}
              <div className="absolute -bottom-8 -right-4">
                <div className="flex flex-col gap-2 h-full justify-between">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div key={`right-${i}`} className="w-2 h-2 rounded-full bg-pink-500" />
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8">
                <div className="flex gap-2 w-full justify-between">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div key={`bottom-${i}`} className="w-2 h-2 rounded-full bg-pink-500" />
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-4 -right-8">
                <div className="flex gap-2 w-full justify-between">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div key={`bottom-${i}`} className="w-2 h-2 rounded-full bg-pink-500" />
                  ))}
                </div>
              </div>

              {/* Corner dots - additional dots to fill the corner */}
              <div className="absolute -bottom-8 -right-8">
                <div className="grid grid-cols-3 gap-2">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div key={`corner-${i}`} className="w-2 h-2 rounded-full bg-pink-500" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-pink-200">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center text-pink-600">Our Impact</h2>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/Luteal/menstrual-calendar-concept_52683-46271.jpg"
                  alt="Mandela Jersey Distribution"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6 text-pink-600">Community Warmth</h3>
                <p className="text-gray-700 mb-6">
                  {`Our Mandela Jersey initiative has made a significant impact in providing warmth to communities during
                  the cold winter months in South Africa. By distributing jerseys to those in need, we've helped address
                  immediate physical needs while also promoting Mandela's legacy of compassion and service.`}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-pink-600 mr-2">•</span>
                    <span className="text-gray-700">Provided warmth to vulnerable community members</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-600 mr-2">•</span>
                    <span className="text-gray-700">Supported local manufacturing and job creation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-600 mr-2">•</span>
                    <span className="text-gray-700">
                      Raised awareness about winter challenges in disadvantaged communities
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-600 mr-2">•</span>
                    <span className="text-gray-700">Promoted community solidarity and support</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16 md:flex-row-reverse">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-pink-600">{`Preserving Mandela's Legacy`}</h3>
                <p className="text-gray-700 mb-6">
                  {`Each jersey serves as a reminder of Nelson Mandela's legacy and the values he stood for. By featuring
                  his image and promoting his ideals, we help keep his memory alive and inspire others to continue his
                  work of equality, dignity, and compassion for all.`}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-pink-600 mr-2">•</span>
                    <span className="text-gray-700">{`Celebrated Mandela's vision and values`}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-600 mr-2">•</span>
                    <span className="text-gray-700">{`Educated younger generations about Mandela's impact`}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-600 mr-2">•</span>
                    <span className="text-gray-700">Inspired community service and volunteerism</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-600 mr-2">•</span>
                    <span className="text-gray-700">Promoted unity and reconciliation</span>
                  </li>
                </ul>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl order-first md:order-last">
                <Image
                  src="/Luteal/letual.webp"
                  alt="Mandela Jersey"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </section>
        
    </div>
  )
}

