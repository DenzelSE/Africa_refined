"use client"
import Image from "next/image"
import { useEffect, useRef } from "react"
import "@/style/animations.css"
import LutealCycleDiagram from "@/components/luteal-cycle-diagram"

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
            src="/carousel/2019-06-06-00-50-32-197.jpg"
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
      
      <section className="py-1 bg-pink-200">
          <div className="container mx-auto px-6">
              <LutealCycleDiagram />
            
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
              <h2 className="text-3xl font-bold mb-4 text-pink-600">Our Impact</h2>
                <p className="text-gray-700 mb-6">
                  {`Our Luteal Liberty Project has made a significant impact in empowering young girls through menstrual health education and support.`}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-pink-600 mr-2">•</span>
                    <span className="text-gray-700">Distributed over 500 menstrual hygiene kits to school-age girls in underserved communities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-600 mr-2">•</span>
                    <span className="text-gray-700">Trained 150 local teachers and community leaders as menstrual health educators</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-600 mr-2">•</span>
                    <span className="text-gray-700">
                    Reduced school absenteeism by 63% among participating girls during menstruation
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-600 mr-2">•</span>
                    <span className="text-gray-700">Improved self-reported confidence and body awareness in 82% of program participants</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16 md:flex-row-reverse">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-pink-600">SDG Alignment</h3>
                <p className="text-gray-700 mb-6">
                  {`The Luteal Liberty Project directly contributes to achieving these Sustainable Development Goals:`}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-pink-600 mr-2">•</span>
                    <span className="text-gray-700">{`SDG 3: Good Health and Well-being - Improving menstrual hygiene management and reproductive health knowledge`}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-600 mr-2">•</span>
                    <span className="text-gray-700">{`ESDG 4: Quality Education - Reducing period-related school absenteeism and providing comprehensive health education`}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-600 mr-2">•</span>
                    <span className="text-gray-700">{`SDG 5: Gender Equality - Empowering girls to overcome stigma and manage their bodies with confidence and dignity`}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-600 mr-2">•</span>
                    <span className="text-gray-700">{`SDG 6: Clean Water and Sanitation - Promoting proper hygiene practices and access to sanitation facilities`}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-600 mr-2">•</span>
                    <span className="text-gray-700">{`SDG 10: Reduced Inequalities - Ensuring marginalized girls have equal access to menstrual products and education`}</span>
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

