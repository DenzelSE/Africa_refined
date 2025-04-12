import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function MovingGardenPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-green-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Moving Garden Project</h1>
          <p className="text-xl max-w-3xl mx-auto">Promoting sustainable agriculture and food security</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-64 w-full mb-8 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=800"
                alt="Moving Garden Project"
                fill
                className="object-cover"
              />
            </div>

            <p className="text-lg mb-6">
              The Moving Garden project is a multifaceted initiative focusing on Sustainable Agriculture. This
              initiative is the latest addition to Africa Refined that provides valuable educational opportunities for
              scholars and contributes to several Sustainable Development Goals (SDGs), particularly SDG 2, which aims
              to end hunger, achieve food security and improved nutrition, and promote sustainable agriculture by 2030.
            </p>

            <div className="bg-green-50 p-8 rounded-lg my-8 border-l-4 border-green-600">
              <h2 className="text-2xl font-bold mb-4 text-green-700">Sustainable Development Goals</h2>
              <p className="text-lg mb-4">
                The Moving Garden project contributes to several Sustainable Development Goals (SDGs), particularly:
              </p>
              <ul className="list-disc pl-6 text-lg space-y-2">
                <li>
                  <strong>SDG 2: Zero Hunger</strong> - Establishing community gardens that provide nutritious
                  vegetables
                </li>
                <li>
                  <strong>SDG 3: Good Health and Well-being</strong> - Promoting consumption of home-grown vegetables
                </li>
                <li>
                  <strong>SDG 13: Climate Action</strong> - Encouraging sustainable agriculture practices
                </li>
                <li>
                  <strong>SDG 4: Quality Education</strong> - Providing hands-on learning experiences
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-green-700">
              The key focus areas of the project include:
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <FocusArea
                title="Community Garden"
                description="Establishing a community garden that provides nutritious vegetables to local community members. This helps improve access to fresh, healthy food and supports overall well-being."
              />
              <FocusArea
                title="Mobile Wheelbarrow Garden"
                description="Introducing a mobile wheelbarrow garden managed by scholars. This innovative approach makes gardening more accessible and provides hands-on learning experiences."
              />
              <FocusArea
                title="Educational Opportunities"
                description="Offering educational workshops and practical experience in gardening and farming. This empowers scholars with knowledge and skills for sustainability."
              />
              <FocusArea
                title="Promoting Sustainability"
                description="Encouraging sustainable farming practices that are environmentally friendly and resource efficient. This helps build resilience against climate change."
              />
            </div>

            <div className="mt-12 text-center">
              <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
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
    <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-600">
      <h3 className="text-xl font-bold mb-3 text-green-700">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  )
}
