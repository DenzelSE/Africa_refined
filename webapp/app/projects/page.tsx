import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

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
        <div className="grid md:grid-cols-3 gap-8">
            <ProjectCard
              title="Luteal Liberty Project"
              description="The Luteal Liberty Project, founded in 2019, aims to empower young girls through reproductive and menstrual health education whilst addressing the challenges young women experience as they transition through puberty, offering support and resources to help them manage their menstrual and reproductive health more effectively."
              link="/projects/luteal-liberty"
              imageUrl="/carousel/WhatsApp Image 2024-12-09 at 07.59.03_2a7f773f.jpg"
              color="pink"
            />
            <ProjectCard
              title="Nelson Mandela Jersey Project"
              description="Established in 2024, the Nelson Mandela Jersey initiative focuses on making a positive impact and continuing Mandela's legacy of service and compassion. This heartwarming project ties into the broader Mandela Day initiative and aligns with the spirit of Nelson Mandela Day."
              link="/projects/nelson-mandela-jersey"
              imageUrl="/carousel/WhatsApp Image 2024-12-09 at 07.59.03_2a7f773f.jpg"
              color="blue"
            />
            <ProjectCard
              title="Moving Garden Project"
              description="The Moving Garden project is a multifaceted initiative focusing on Sustainable Agriculture. This initiative is the latest addition to Africa Refined that provides valuable educational opportunities for scholars and contributes to several Sustainable Development Goals (SDGs), particularly SDG 2, which aims to end hunger, achieve food security and improved nutrition, and promote sustainable agriculture by 2030."
              link="/projects/moving-garden"
              imageUrl="/carousel/WhatsApp Image 2024-12-09 at 07.59.03_2a7f773f.jpg"
              color="green"
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
          card: "border-pink-500",
          title: "bg-pink-500",
          button: "text-pink-600 hover:text-pink-700",
        }
      case "blue":
        return {
          card: "border-blue-600",
          title: "bg-blue-600",
          button: "text-blue-600 hover:text-blue-700",
        }
      case "green":
        return {
          card: "border-green-600",
          title: "bg-green-600",
          button: "text-green-600 hover:text-green-700",
        }
      default:
        return {
          card: "border-amber-800",
          title: "bg-amber-800",
          button: "text-amber-800 hover:text-amber-900",
        }
    }
  }

  const colorClasses = getColorClasses()

  return (
    <div
      className={`h-full flex flex-col overflow-hidden rounded-lg shadow-md border-t-4 ${colorClasses.card} transition-all duration-300 hover:shadow-xl`}
    >
      <div className="relative h-48 w-full">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className={`${colorClasses.title} py-3 px-4`}>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      <div className="p-6 flex-grow">
        <p className="text-base text-gray-700 mb-6">{description}</p>
      </div>
      <div className="px-6 pb-6">
        <Button asChild variant="link" className={colorClasses.button}>
          <Link href={link} className="flex items-center">
            LEARN MORE <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
