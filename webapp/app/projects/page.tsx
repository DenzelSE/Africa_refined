import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-amber-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">OUR PROJECTS</h1>
          <p className="text-xl max-w-3xl mx-auto">REFINING HEALTH, SUSTAINABILITY, AND EMPOWERMENT ACROSS AFRICA</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center mb-12">
          <p className="text-xl">Africa Refined is home to several impactful community driven projects</p>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <ProjectCard
              title="Luteal Liberty Project"
              description="The Luteal Liberty Project, founded in 2019, aims to empower young girls by providing them with essential knowledge and support through educative talks and workshops. The key focus areas include: Menstrual Hygiene Management, Sexual Health, Reproduction, Puberty, and Self-Love."
              link="/projects/luteal-liberty"
              imageUrl="/placeholder.svg?height=200&width=400"
            />
            <ProjectCard
              title="Nelson Mandela Jersey Project"
              description="The Nelson Mandela Day Jersey event themed 'Keeping Warm this Mandela Month' was established in 2024. This occurs seasonally between June and July of every year in line with the famous '67 minutes of Mandela Day' birthday celebration whereby people from disadvantaged communities are provided jerseys showing an image of Nelson Mandela to celebrate his legacy."
              link="/projects/nelson-mandela-jersey"
              imageUrl="/placeholder.svg?height=200&width=400"
            />
            <ProjectCard
              title="Moving Garden Project"
              description="In line with SDG 13 – Action for Climate Change, the Moving Garden project seeks to educate people about farming and agriculture while providing them with home-grown, healthy vegetables to feed on."
              link="/projects/moving-garden"
              imageUrl="/placeholder.svg?height=200&width=400"
            />
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
}: { title: string; description: string; link: string; imageUrl: string }) {
  return (
    <Card className="h-full flex flex-col">
      <div className="relative h-48 w-full">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
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
