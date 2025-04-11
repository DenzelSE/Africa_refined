import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NelsonMandelaJerseyPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-amber-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nelson Mandela Jersey Project</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-64 w-full mb-8">
              <Image
                src="/placeholder.svg?height=300&width=800"
                alt="Nelson Mandela Jersey Project"
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <p className="text-lg mb-6">
              Established in 2024, the Nelson Mandela Jersey initiative focuses on making a positive impact and
              continuing Mandela's legacy of service and compassion. This heartwarming project ties into the broader
              Mandela Day initiative and aligns with the spirit of Nelson Mandela Day.
            </p>

            <p className="text-lg mb-6">
              Under the theme 'Keeping Warm this Mandela Month', this imitative occurs seasonally between June and July
              each year, which is winter in South Africa. This timing ensures that the jerseys are distributed when they
              are most needed to help people stay warm. The Nelson Mandela Jersey Project is one amongst many
              initiatives in South Africa that continue the long-living legacy and vision of Tata Nelson Rolihlahla
              Mandela.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">The key focus areas of the project include:</h2>
            <ul className="list-disc pl-6 text-lg space-y-4">
              <li>
                <strong>Seasonal Timing:</strong> The event takes place between June and July each year, which is winter
                in South Africa. This timing ensures that the jerseys are distributed when they are most needed to help
                people stay warm.
              </li>
              <li>
                <strong>Community Support:</strong> By providing jerseys to disadvantaged communities, the project
                addresses immediate needs and offers practical support to those who may struggle with the cold weather.
              </li>
              <li>
                <strong>Celebrating Mandela's Legacy:</strong> The jerseys feature an image of Nelson Mandela, serving
                as a reminder of his legacy and the values he stood for. This helps keep his memory alive and inspires
                others to continue his work.
              </li>
              <li>
                <strong>Fulfilling Mandela's Vision:</strong> The project embodies Mandela's vision of equality,
                dignity, and compassion for all. It encourages people to come together and support one another,
                fostering a sense of community and shared responsibility.
              </li>
              <li>
                <strong>67 Minutes of Service:</strong> The project ties into the broader Mandela Day initiative, which
                encourages people to spend 67 minutes doing something positive for their communities. This can include
                volunteering, helping those in need, or participating in projects like this one.
              </li>
            </ul>

            <blockquote className="border-l-4 border-amber-700 pl-4 italic my-8 text-lg">
              "There can be no greater gift than that of giving one's time and energy to help others without expecting
              anything in return." - Nelson Mandela
            </blockquote>

            <div className="bg-amber-50 p-8 rounded-lg my-12">
              <h2 className="text-2xl font-bold mb-4">KEEPING WARM THIS MANDELA MONTH</h2>
              <p className="text-lg mb-4">
                The 'Keeping Warm this Mandela Month' features a clothing collection of Madiba Inspired designs and
                products, supporting the initiative. These can be purchased on the website.
              </p>
              <div className="text-center mt-6">
                <Button asChild className="bg-amber-700 hover:bg-amber-800">
                  <Link href="/shop">VIEW COLLECTION</Link>
                </Button>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button asChild className="bg-amber-700 hover:bg-amber-800">
                <Link href="/donate">SUPPORT THIS PROJECT</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
