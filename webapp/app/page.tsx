import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row h-[80vh]">
        {/* Left side - Text and CTA */}
        <div className="flex-1 flex items-center justify-center bg-[url('/placeholder.svg?height=800&width=800')] bg-amber-700 bg-blend-multiply bg-cover">
          <div className="px-8 py-12 md:py-0 max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">Be part of the vision.</h1>
            <p className="text-xl md:text-2xl mb-8 text-white">Help us refine Africa, one initiative at a time.</p>
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
            src="/images/carousel/WhatsApp Image 2024-12-13 at 07.30.03_4f91a4c1.jpg"
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
          <h2 className="text-3xl font-bold text-center mb-12">AREAS OF WORK</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ProjectCard
              title="Luteal Liberty Project"
              description="The Luteal Liberty Project, founded in 2019, aims to empower young girls through reproductive and menstrual health education whilst addressing the challenges young women experience as they transition through puberty, offering support and resources to help them manage their menstrual and reproductive health more effectively."
              link="/projects/luteal-liberty"
              imageUrl="/images/carousel/WhatsApp Image 2024-12-13 at 07.30.03_4f91a4c1.jpg"
            />
            <ProjectCard
              title="Nelson Mandela Jersey Project"
              description="Established in 2024, the Nelson Mandela Jersey initiative focuses on making a positive impact and continuing Mandela's legacy of service and compassion. This heartwarming project ties into the broader Mandela Day initiative and aligns with the spirit of Nelson Mandela Day."
              link="/projects/nelson-mandela-jersey"
              imageUrl="/images/carousel/WhatsApp Image 2024-12-13 at 07.30.03_4f91a4c1.jpg"
            />
            <ProjectCard
              title="Moving Garden Project"
              description="The Moving Garden project is a multifaceted initiative focusing on Sustainable Agriculture. This initiative is the latest addition to Africa Refined that provides valuable educational opportunities for scholars and contributes to several Sustainable Development Goals (SDGs), particularly SDG 2, which aims to end hunger, achieve food security and improved nutrition, and promote sustainable agriculture by 2030."
              link="/projects/moving-garden"
              imageUrl="/images/carousel/WhatsApp Image 2024-12-13 at 07.30.03_4f91a4c1.jpg"
            />
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">GET INVOLVED</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <GetInvolvedCard
              title="View Collection"
              imageUrl="/images/carousel/WhatsApp Image 2024-12-13 at 07.30.03_4f91a4c1.jpg"
              buttonText="SHOP NOW"
              buttonLink="/shop"
            />
            <GetInvolvedCard
              title="Donate Now"
              imageUrl="/images/carousel/WhatsApp Image 2024-12-13 at 07.30.03_4f91a4c1.jpg"
              buttonText="DONATE NOW"
              buttonLink="/donate"
              primary
            />
            <GetInvolvedCard
              title="Subscribe to our social media platforms"
              imageUrl="/images/carousel/WhatsApp Image 2024-12-13 at 07.30.03_4f91a4c1.jpg"
              buttonText="SUBSCRIBE NOW"
              buttonLink="/subscribe"
            />
          </div>
        </div>
      </section>

      {/* News and Events */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">NEWS & EVENTS</h2>
          <p className="text-center text-gray-600 mb-12">
            Stay updated with our latest initiatives and upcoming events
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <NewsCard
              title="Educational Workshop Success"
              date="April 10, 2025"
              excerpt="Our recent educational workshop on menstrual health reached over 200 young girls in local communities."
              imageUrl="/images/carousel/WhatsApp Image 2024-12-13 at 07.30.03_4f91a4c1.jpg"
              link="/news/educational-workshop"
            />
            <NewsCard
              title="Mandela Month Preparations"
              date="March 25, 2025"
              excerpt="Preparations are underway for our annual Keeping Warm this Mandela Month initiative. Join us in making a difference."
              imageUrl="/Images/carousel/WhatsApp Image 2024-12-13 at 07.30.03_4f91a4c1.jpg"
              link="/news/mandela-month-preparations"
            />
            <NewsCard
              title="Moving Garden Expansion"
              date="March 15, 2025"
              excerpt="We're excited to announce the expansion of our Moving Garden project to three new schools in the region."
              imageUrl="/images/carousel/WhatsApp Image 2024-12-13 at 07.30.03_4f91a4c1.jpg"
              link="/news/moving-garden-expansion"
            />
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="outline" className="border-amber-700 text-amber-700 hover:bg-amber-50">
              <Link href="/news" className="flex items-center">
                VIEW ALL NEWS & EVENTS <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

function ProjectCard({
  title,
  description,
  link,
  imageUrl,
}: {
  title: string
  description: string
  link: string
  imageUrl: string
}) {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-md h-[400px]">
      {/* Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>

      {/* Title overlay (always visible) */}
      <div className="absolute bottom-0 left-0 right-0 bg-amber-800 bg-opacity-90 p-4 transition-all duration-300 group-hover:translate-y-full">
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>

      {/* Description overlay (visible on hover) */}
      <div className="absolute inset-0 bg-amber-800 bg-opacity-90 p-6 flex flex-col justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
        <p className="text-white mb-6 line-clamp-6">{description}</p>
        <div className="mt-auto">
          <Button asChild variant="outline" className="border-white text-white hover:bg-amber-700">
            <Link href={link} className="flex items-center">
              LEARN MORE <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

function GetInvolvedCard({
  title,
  imageUrl,
  buttonText,
  buttonLink,
  primary = false,
}: {
  title: string
  imageUrl: string
  buttonText: string
  buttonLink: string
  primary?: boolean
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <h3 className="text-xl font-semibold mb-6">{title}</h3>
      <Button
        asChild
        variant={primary ? "default" : "outline"}
        className={primary ? "bg-amber-700 hover:bg-amber-800" : ""}
      >
        <Link href={buttonLink}>{buttonText}</Link>
      </Button>
    </div>
  )
}

function NewsCard({
  title,
  date,
  excerpt,
  imageUrl,
  link,
}: {
  title: string
  date: string
  excerpt: string
  imageUrl: string
  link: string
}) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg shadow-md">
      <div className="relative h-48">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <p className="text-sm text-amber-700 mb-2">{date}</p>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{excerpt}</p>
        <Button asChild variant="link" className="text-amber-800 p-0 justify-start">
          <Link href={link} className="flex items-center">
            READ MORE <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
