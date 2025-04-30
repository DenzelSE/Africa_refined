import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function NelsonMandelaJerseyPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nelson Mandela Jersey Project</h1>
          <p className="text-xl max-w-3xl mx-auto">Keeping Warm this Mandela Month</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div>
                <h2 className="text-3xl font-bold mb-6 text-blue-600">About the Initiative</h2>
                <p className="text-lg text-gray-700 mb-6">
                  {`Established in 2024, the Nelson Mandela Jersey initiative focuses on making a positive impact and
                  continuing Mandela's legacy of service and compassion. This heartwarming project ties into the broader
                  Mandela Day initiative and aligns with the spirit of Nelson Mandela Day.`}
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  {`Under the theme 'Keeping Warm this Mandela Month', this initiative occurs seasonally between June and
                  July each year, which is winter in South Africa. Its timing ensures that the jerseys are distributed
                  when they are most needed to help people stay warm. The Nelson Mandela Jersey Project is one amongst
                  many initiatives in South Africa that continue the long-living legacy and vision of Tata Nelson
                  Rolihlahla Mandela.`}
                </p>
                <div className="space-y-4 mt-8">
                  <h3 className="text-3xl font-semibold text-blue-600">{`Key Focus Areas:`}</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-2xl font-bold text-gray-800">Seasonal Timing</h4>
                      <p className="text-lg text-gray-700">
                        {`"The event takes place between June and July each year, which is winter in South Africa. This
                        timing ensures that the jerseys are distributed when they are most needed to help people stay
                        warm.`}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-800">Community Support</h4>
                      <p className="text-lg text-gray-700">
                        {`By providing jerseys to disadvantaged communities, the project addresses immediate needs and
                        offers practical support to those who may struggle with the cold weather.`}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-800">{`Celebrating Mandela's Legacy`}</h4>
                      <p className="text-lg text-gray-700">
                        {`The jerseys feature an image of Nelson Mandela, serving as a reminder of his legacy and the
                        values he stood for. This helps keep his memory alive and inspires others to continue his work.`}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-800">67 Minutes of Service</h4>
                      <p className="text-lg text-gray-700">
                        {`The project ties into the broader Mandela Day initiative, which encourages people to spend 67
                        minutes doing something positive for their communities.`}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <blockquote className="italic text-gray-700 border-l-4 text-lg border-blue-600 pl-4 py-2">
                    {`"There can be no greater gift than that of giving one's time and energy to help others without
                    expecting anything in return." - Nelson Mandela`}
                  </blockquote>
                </div>
              </div>
              <div className="relative">
                <div className="relative h-[800px] rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/carousel/WhatsApp Image 2024-12-05 at 00.11.13_5d2c4a45.jpg"
                    alt="Nelson Mandela Jersey Initiative"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>

            <div className="bg-blue-100 text-black p-8 rounded-lg my-12">
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
