import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function MovingGardenPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-amber-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Moving Garden Project</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-64 w-full mb-8">
              <Image
                src="/placeholder.svg?height=300&width=800"
                alt="Moving Garden Project"
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <p className="text-lg mb-6">
              The Moving Garden project is a multifaceted initiative focusing on Sustainable Agriculture. This
              initiative is the latest addition to Africa Refined that provides valuable educational opportunities for
              scholars and contributes to several Sustainable Development Goals (SDGs), particularly SDG 2, which aims
              to end hunger, achieve food security and improved nutrition, and promote sustainable agriculture by 2030.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">The key focus areas of the project include:</h2>
            <ul className="list-disc pl-6 text-lg space-y-4">
              <li>
                <strong>Community Garden:</strong> Establishing a community garden that provides nutritious vegetables
                to local community members. This helps improve access to fresh, healthy food and supports overall
                well-being.
              </li>
              <li>
                <strong>Mobile Wheelbarrow Garden:</strong> Introducing a mobile wheelbarrow garden managed by scholars.
                This innovative approach not only makes gardening more accessible but also provides a hands-on learning
                experience for students, teaching them about sustainable agriculture and farming practices.
              </li>
              <li>
                <strong>Educational Opportunities:</strong> Offering educational workshops and practical experience in
                gardening and farming. This empowers scholars with knowledge and skills that they can use to promote
                sustainability and food security in their communities.
              </li>
              <li>
                <strong>Promoting Sustainability:</strong> Encouraging sustainable farming practices that are
                environmentally friendly and resource efficient. This helps build resilience against climate change and
                supports long-term food security.
              </li>
              <li>
                <strong>Community Engagement:</strong> Fostering a sense of community by bringing people together to
                work on the garden. This strengthens social ties and creates a supportive network of individuals
                committed to sustainable practices.
              </li>
              <li>
                <strong>Nutritional Benefits:</strong> By establishing community gardens and mobile wheelbarrow gardens,
                the project ensures access to fresh, nutritious vegetables. This can improve the overall health and
                well-being of the community members, including the young girls involved in Africa Refined.
              </li>
              <li>
                <strong>Empowerment through Skills:</strong> Managing the mobile wheelbarrow gardens gives scholars
                practical skills in farming and agriculture. This empowers them with knowledge and experience that can
                be valuable for their future, promoting self-sufficiency and confidence.
              </li>
              <li>
                <strong>Sustainable Development:</strong> Aligning with SDG 2, the Moving Garden project promotes
                sustainable agriculture and food security. This not only addresses immediate needs but also contributes
                to long-term environmental and economic sustainability.
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">Sustainable Development Goals</h2>
            <p className="text-lg mb-6">
              The Sustainable Development Goals (SDGs) are a universal call to action to end poverty, protect the planet
              and improve the lives and prospects of everyone, everywhere. The 17 Goals were adopted by all UN Member
              States in 2015, as part of the 2030 Agenda for Sustainable Development. South Africa reaffirmed its
              commitment to Agenda 2030 and the SDGs during the SDG Summit in September 2023, pledging transformation in
              several critical areas, including the just energy transition, climate finance, digital inclusion, women's
              empowerment, and biodiversity protection.
            </p>

            <p className="text-lg mb-6">
              The Moving Garden project contributes to several Sustainable Development Goals (SDGs), particularly:
            </p>

            <ul className="list-disc pl-6 text-lg space-y-4">
              <li>
                <strong>SDG 2: Zero Hunger:</strong> The project helps to end hunger and achieve food security by
                establishing community gardens that provide nutritious vegetables to local community members. This
                ensures access to fresh, healthy food and supports improved nutrition.
              </li>
              <li>
                <strong>SDG 3: Good Health and Well-being:</strong> By promoting the consumption of home-grown
                vegetables, the project enhances the health and well-being of the community. Access to fresh produce can
                lead to better dietary habits and improved overall health. Additionally, gardening activities can have
                positive effects on mental health and physical fitness.
              </li>
              <li>
                <strong>SDG 13: Climate Action:</strong> The project encourages sustainable agriculture practices, which
                contribute to climate change mitigation. By promoting local food production, it reduces the carbon
                footprint associated with transporting food over long distances. Sustainable gardening practices also
                help in conserving resources and protecting the environment.
              </li>
              <li>
                <strong>SDG 4: Quality Education:</strong> The mobile wheelbarrow garden managed by scholars provides
                hands-on learning experiences in sustainable agriculture. This educational component helps students
                understand the importance of sustainable practices, food security, and environmental stewardship. It
                also fosters a sense of responsibility and community engagement.
              </li>
            </ul>

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
