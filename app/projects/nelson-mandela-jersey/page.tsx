import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function NelsonMandelaJerseyPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nelson Mandela Jersey Project</h1>
          <p className="text-xl max-w-3xl mx-auto">Keeping Warm this Mandela Month</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-64 w-full mb-8 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=800"
                alt="Nelson Mandela Jersey Project"
                fill
                className="object-cover"
              />
            </div>

            <p className="text-lg mb-6">
              {`Established in 2024, the Nelson Mandela Jersey initiative focuses on making a positive impact and
              continuing Mandela's legacy of service and compassion. This heartwarming project ties into the broader
              Mandela Day initiative and aligns with the spirit of Nelson Mandela Day.`}
            </p>

            <p className="text-lg mb-6">
              {`Under the theme 'Keeping Warm this Mandela Month', this imitative occurs seasonally between June and July
              each year, which is winter in South Africa. This timing ensures that the jerseys are distributed when they
              are most needed to help people stay warm. The Nelson Mandela Jersey Project is one amongst many
              initiatives in South Africa that continue the long-living legacy and vision of Tata Nelson Rolihlahla
              Mandela.`}
            </p>

            <blockquote className="border-l-4 border-blue-600 pl-4 italic my-8 text-lg bg-blue-50 p-6 rounded-r-lg">
              {`"There can be no greater gift than that of giving one's time and energy to help others without expecting
              anything in return." - Nelson Mandela`}
            </blockquote>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-blue-700">The key focus areas of the project include:</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <FocusArea
                title="Seasonal Timing"
                description="The event takes place between June and July each year, which is winter in South Africa. This timing ensures that the jerseys are distributed when they are most needed to help people stay warm."
              />
              <FocusArea
                title="Community Support"
                description="By providing jerseys to disadvantaged communities, the project addresses immediate needs and offers practical support to those who may struggle with the cold weather."
              />
              <FocusArea
                title="Celebrating Mandela's Legacy"
                description="The jerseys feature an image of Nelson Mandela, serving as a reminder of his legacy and the values he stood for. This helps keep his memory alive and inspires others to continue his work."
              />
              <FocusArea
                title="Fulfilling Mandela's Vision"
                description="The project embodies Mandela's vision of equality, dignity, and compassion for all. It encourages people to come together and support one another, fostering a sense of community and shared responsibility."
              />
            </div>

            <div className="bg-blue-50 p-8 rounded-lg my-12">
              <h2 className="text-2xl font-bold mb-4 text-blue-700">KEEPING WARM THIS MANDELA MONTH</h2>
              <p className="text-lg mb-4">
                {`The 'Keeping Warm this Mandela Month' features a clothing collection of Madiba Inspired designs and
                products, supporting the initiative. These can be purchased on the website.`}
              </p>
              <div className="text-center mt-6">
                <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Link href="/shop" className="flex items-center">
                    VIEW COLLECTION <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
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

function FocusArea({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600">
      <h3 className="text-xl font-bold mb-3 text-blue-700">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  )
}
