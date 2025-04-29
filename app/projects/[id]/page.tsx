import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { projects } from "../../config/projects"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

interface ProjectPageProps {
  params: {
    id: string
  }
  searchParams?: { [key: string]: string | string[] | undefined }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    notFound()
  }

  // Define color classes based on the project color
  const getColorClasses = () => {
    switch (project.color) {
      case "pink":
        return {
          bg: "bg-pink-500",
          border: "border-pink-500",
          text: "text-pink-700",
          button: "bg-pink-500 hover:bg-pink-600",
          light: "bg-pink-50",
        }
      case "blue":
        return {
          bg: "bg-blue-600",
          border: "border-blue-600",
          text: "text-blue-700",
          button: "bg-blue-600 hover:bg-blue-700",
          light: "bg-blue-50",
        }
      case "green":
        return {
          bg: "bg-green-600",
          border: "border-green-600",
          text: "text-green-700",
          button: "bg-green-600 hover:bg-green-700",
          light: "bg-green-50",
        }
      default:
        return {
          bg: "bg-amber-800",
          border: "border-amber-800",
          text: "text-amber-700",
          button: "bg-amber-800 hover:bg-amber-900",
          light: "bg-amber-50",
        }
    }
  }

  const colorClasses = getColorClasses()

  return (
    <div className="min-h-screen">
      <section className={`${colorClasses.bg} text-white py-20`}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
          <p className="text-xl max-w-3xl mx-auto">{project.shortDescription}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-64 w-full mb-8 rounded-lg overflow-hidden">
              <Image src={project.imageUrl || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            </div>

            {project.description.split("\n\n").map((paragraph, index) => (
              <p key={index} className="text-lg mb-6">
                {paragraph}
              </p>
            ))}

            {project.impact && (
              <div className={`${colorClasses.light} p-8 rounded-lg my-8 border-l-4 ${colorClasses.border}`}>
                <h2 className={`text-2xl font-bold mb-4 ${colorClasses.text}`}>Our Impact</h2>
                <p className="text-lg">{project.impact}</p>
              </div>
            )}

            {project.quote && (
              <blockquote
                className={`border-l-4 ${colorClasses.border} pl-4 italic my-8 text-lg ${colorClasses.light} p-6 rounded-r-lg`}
              >
                {project.quote} {project.quoteAuthor && <span>- {project.quoteAuthor}</span>}
              </blockquote>
            )}

            {project.sdgs && (
              <div className={`${colorClasses.light} p-8 rounded-lg my-8 border-l-4 ${colorClasses.border}`}>
                <h2 className={`text-2xl font-bold mb-4 ${colorClasses.text}`}>Sustainable Development Goals</h2>
                <p className="text-lg mb-4">
                  The {project.title} contributes to several Sustainable Development Goals (SDGs), particularly
                </p>
                <ul className="list-disc pl-6 text-lg space-y-2">
                  {project.sdgs.map((sdg, index) => (
                    <li key={index}>
                      <strong>{sdg.title}</strong> - {sdg.description}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <h2 className={`text-2xl font-bold mt-12 mb-6 ${colorClasses.text}`}>
              {`The key focus areas of the project include:`}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.focusAreas.map((area, index) => (
                <FocusArea
                  key={index}
                  title={area.title}
                  description={area.description}
                  borderColor={colorClasses.border}
                  textColor={colorClasses.text}
                />
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button asChild className={`text-white ${colorClasses.button}`}>
                <Link href="/donate" className="flex items-center">
                  SUPPORT THIS PROJECT <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function FocusArea({
  title,
  description,
  borderColor,
  textColor,
}: {
  title: string
  description: string
  borderColor: string
  textColor: string
}) {
  return (
    <div className={`bg-white p-6 rounded-lg shadow-md border-t-4 ${borderColor}`}>
      <h3 className={`text-xl font-bold mb-3 ${textColor}`}>{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  )
}
