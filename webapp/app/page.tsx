import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

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
            src="/images/Luteal/2019-06-06-00-50-32-197.jpg"
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
            />
            <ProjectCard
              title="Nelson Mandela Jersey Project"
              description="Established in 2024, the Nelson Mandela Jersey initiative focuses on making a positive impact and continuing Mandela's legacy of service and compassion. This heartwarming project ties into the broader Mandela Day initiative and aligns with the spirit of Nelson Mandela Day."
              link="/projects/nelson-mandela-jersey"
            />
            <ProjectCard
              title="Moving Garden Project"
              description="The Moving Garden project is a multifaceted initiative focusing on Sustainable Agriculture. This initiative is the latest addition to Africa Refined that provides valuable educational opportunities for scholars and contributes to several Sustainable Development Goals (SDGs), particularly SDG 2."
              link="/projects/moving-garden"
            />
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">GET INVOLVED</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-4">View Collection</h3>
              <Button asChild variant="outline" className="mt-4">
                <Link href="/shop">SHOP NOW</Link>
              </Button>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-4">Donate Now</h3>
              <Button asChild className="mt-4 bg-amber-700 hover:bg-amber-800">
                <Link href="/donate">DONATE NOW</Link>
              </Button>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-4">Subscribe to our social media platforms</h3>
              <Button asChild variant="outline" className="mt-4">
                <Link href="/subscribe">SUBSCRIBE NOW</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function ProjectCard({ title, description, link }: { title: string; description: string; link: string }) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-base text-gray-700">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button asChild variant="link" className="text-amber-800">
          <Link href={link} className="flex items-center">
            LEARN MORE <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

