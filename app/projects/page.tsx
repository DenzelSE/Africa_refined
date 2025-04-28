import Link from "next/link"
import Image from "next/image"

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
        {/* <div className="container mx-auto px-4 text-center mb-12">
          <p className="text-xl">Africa Refined is home to several impactful community driven projects</p>
        </div> */}

        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <ProjectCard
              title="Luteal Liberty Project"
              link="/projects/luteal-liberty"
              imageUrl="/carousel/WhatsApp Image 2024-12-13 at 07.38.41_e90d02ae.jpg"
              color="pink"
            />
            <ProjectCard
              title="Nelson Mandela Jersey"
              link="/projects/nelson-mandela-jersey"
              imageUrl="/carousel/WhatsApp Image 2024-12-05 at 00.11.13_5d2c4a45.jpg"
              color="blue"
            />
            <ProjectCard
              title="Moving Garden Project"
              link="/projects/moving-garden"
              imageUrl="/MovingGreen.jpeg"
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
  link,
  imageUrl,
  color = "amber",
}: {
  title: string
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
          hover: "hover:border-pink-600 hover:shadow-pink-100",
        }
      case "blue":
        return {
          card: "border-blue-600",
          title: "bg-blue-600",
          hover: "hover:border-blue-700 hover:shadow-blue-100",
        }
      case "green":
        return {
          card: "border-green-600",
          title: "bg-green-600",
          hover: "hover:border-green-700 hover:shadow-green-100",
        }
      default:
        return {
          card: "border-amber-800",
          title: "bg-amber-800",
          hover: "hover:border-amber-900 hover:shadow-amber-100",
        }
    }
  }

  const colorClasses = getColorClasses()

  return (
    <Link href={link} className="block h-full">
      <div
        className={`h-full flex flex-col overflow-hidden rounded-lg shadow-md border-t-4 ${
          colorClasses.card
        } transition-all duration-300 ${
          colorClasses.hover
        } hover:shadow-xl cursor-pointer transform hover:-translate-y-1`}
      >
        <div className="relative h-80 w-full">
          <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
        </div>
        <div className={`${colorClasses.title} py-5 px-4 text-center`}>
          <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
      </div>
    </Link>
  )
}
