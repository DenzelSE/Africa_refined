import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import MeetTheTeam from "@/components/MeetTheTeam"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row h-[80vh]">
        {/* Left side - Text and CTA */}
        <div className="flex-1 flex items-center justify-center bg-[url('/carousel/bgHDpattern.jpg')] bg-cover bg-amber-900">
          <div className="px-8 py-12 md:py-0 max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">Be part of the vision.</h1>
            <p className="text-xl md:text-2xl mb-8 text-white">Help us Refine Africa, one initiative at a time.</p>
            <Button
              asChild
              size="lg"
              className="border-2 border-white bg-transparent hover:bg-white hover:text-amber-800 text-white rounded-full px-8"
            >
              <Link href="/donate">DONATE TODAY</Link>
            </Button>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="flex-1 relative">
          <Image
            src="/Lbg.jpg"
            alt="African children celebrating"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Areas of Work */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-black font-bold text-center mb-12">AREAS OF WORK</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ProjectCard
              title="Luteal Liberty Project"
              description="The Luteal Liberty Project, founded in 2019, aims to empower young girls through reproductive and menstrual health education whilst addressing the challenges young women experience as they transition through puberty, offering support and resources to help them manage their menstrual and reproductive health more effectively."
              link="/projects/luteal-liberty"
              imageUrl="/carousel/WhatsApp Image 2024-12-13 at 07.38.41_e90d02ae.jpg"
              color="pink"
            />
            <ProjectCard
              title="Nelson Mandela Jersey Project"
              description="Established in 2024, the Nelson Mandela Jersey initiative focuses on making a positive impact and continuing Mandela's legacy of service and compassion. This heartwarming project ties into the broader Mandela Day initiative and aligns with the spirit of Nelson Mandela Day."
              link="/projects/nelson-mandela-jersey"
              imageUrl="/carousel/WhatsApp Image 2024-12-05 at 00.11.13_5d2c4a45.jpg"
              color="blue"
            />
            <ProjectCard
              title="Moving Garden Project"
              description="The Moving Garden project is a multifaceted initiative focusing on Sustainable Agriculture. This initiative is the latest addition to Africa Refined that provides valuable educational opportunities for scholars and contributes to several Sustainable Development Goals (SDGs), particularly SDG 2, which aims to end hunger, achieve food security and improved nutrition, and promote sustainable agriculture by 2030."
              link="/projects/moving-garden"
              imageUrl="/MovingGreen.jpeg"
              color="green"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-black font-bold text-center mb-12">GET INVOLVED</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-8xl h-[400px] mx-auto">
            <div className="flex flex-col items-center text-center border-1 border-amber-200 rounded-lg transition-all duration-300 hover:shadow-xl hover:border-amber-400 overflow-hidden">
              <div className="relative overflow-hidden  w-full h-100">
                <Image
                  src="/carousel/WhatsApp Image 2024-12-17 at 05.54.11_889e6d00.jpg"
                  alt="Shop Collection"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl text-black font-semibold mb-6">View Collection</h3>
                <div className="mt-auto">
                  <Button asChild className="bg-amber-700 hover:bg-amber-800 w-full md:w-auto">
                    <Link href="/shop">SHOP NOW</Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center text-center border-2 border-amber-200 rounded-lg transition-all duration-300 hover:shadow-xl hover:border-amber-400 overflow-hidden">
              <div className="relative w-full h-100">
                <Image src="/carousel/donate.jpg" alt="Donate" fill className="object-cover" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl text-black font-semibold mb-6">Donate Now</h3>
                <div className="mt-auto">
                  <Button asChild className="bg-amber-700 hover:bg-amber-800 w-full md:w-auto">
                    <Link href="/donate">DONATE NOW</Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center text-center border-2 border-amber-200 rounded-lg transition-all duration-300 hover:shadow-xl hover:border-amber-400 overflow-hidden">
              <div className="relative w-full h-100">
                <Image src="/carousel/WhatsApp Image 2024-12-17 at 12.06.22_69a56246.jpg" alt="Subscribe" fill className="object-cover" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl text-black font-semibold mb-6">Subscribe to our social media platforms</h3>
                <div className="mt-auto">
                  <Button asChild className="bg-amber-700 hover:bg-amber-800 w-full md:w-auto">
                    <Link href="/subscribe">SUBSCRIBE NOW</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <MeetTheTeam/>
    </div>
  )
}

function ProjectCard({
  title,
  description,
  link,
  imageUrl,
  color = "amber",
}: {
  title: string
  description: string
  link: string
  imageUrl: string
  color?: "pink" | "blue" | "green" | "amber"
}) {
  // Define color classes based on the color prop
  const getColorClasses = () => {
    switch (color) {
      case "pink":
        return {
          title: "bg-pink-500 bg-opacity-90",
          overlay: "bg-pink-500 bg-opacity-50",
          button: "border-white text-white hover:bg-pink-600",
        }
      case "blue":
        return {
          title: "bg-blue-600 bg-opacity-90",
          overlay: "bg-blue-600 bg-opacity-80",
          button: "border-white text-white hover:bg-blue-700",
        }
      case "green":
        return {
          title: "bg-green-600 bg-opacity-90",
          overlay: "bg-green-600 bg-opacity-80",
          button: "border-white text-white hover:bg-green-700",
        }
      default:
        return {
          title: "bg-amber-800 bg-opacity-90",
          overlay: "bg-amber-800 bg-opacity-90",
          button: "border-white text-white hover:bg-amber-700",
        }
    }
  }

  const colorClasses = getColorClasses()

  return (
    <div className="group relative overflow-hidden rounded-lg shadow-md h-[400px]">
      {/* Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>

      {/* Title overlay (always visible) */}
      <div
        className={`absolute bottom-0 left-0 right-0 ${colorClasses.title} p-4 transition-all duration-300 group-hover:translate-y-full`}
      >
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>

      {/* Description overlay (visible on hover) - Changed to slide from bottom to top */}
      <div
        className={`absolute inset-0 ${colorClasses.overlay} p-6 flex flex-col justify-center translate-y-full transition-transform duration-300 group-hover:translate-y-0 group-hover:opacity-70`}
      >
        <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
        <p className="text-white mb-6 line-clamp-6">{description}</p>
        <div className="mt-auto">
          <Button asChild variant="outline" className={`rounded-lg bg-white ${colorClasses.button}`}>
            <Link href={link} className="flex text-black items-center">
              LEARN MORE <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

