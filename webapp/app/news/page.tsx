import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NewsPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-amber-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">NEWS & EVENTS</h1>
          <p className="text-xl max-w-3xl mx-auto">Stay updated with our latest initiatives and upcoming events</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <NewsCard
              title="Educational Workshop Success"
              date="April 10, 2025"
              excerpt="Our recent educational workshop on menstrual health reached over 200 young girls in local communities. The workshop focused on providing essential knowledge about menstrual hygiene management and reproductive health."
              imageUrl="/placeholder.svg?height=300&width=400"
              link="/news/educational-workshop"
            />
            <NewsCard
              title="Mandela Month Preparations"
              date="March 25, 2025"
              excerpt="Preparations are underway for our annual Keeping Warm this Mandela Month initiative. Join us in making a difference by donating warm clothing or volunteering your time to help distribute jerseys to those in need."
              imageUrl="/placeholder.svg?height=300&width=400"
              link="/news/mandela-month-preparations"
            />
            <NewsCard
              title="Moving Garden Expansion"
              date="March 15, 2025"
              excerpt="We're excited to announce the expansion of our Moving Garden project to three new schools in the region. This expansion will provide more students with hands-on experience in sustainable agriculture and food security."
              imageUrl="/placeholder.svg?height=300&width=400"
              link="/news/moving-garden-expansion"
            />
            <NewsCard
              title="Community Outreach Program"
              date="March 5, 2025"
              excerpt="Our team recently conducted a community outreach program focusing on health education and sustainable practices. The event was well-received with over 150 community members participating."
              imageUrl="/placeholder.svg?height=300&width=400"
              link="/news/community-outreach"
            />
            <NewsCard
              title="Partnership Announcement"
              date="February 28, 2025"
              excerpt="Africa Refined is proud to announce a new partnership with local businesses to support our initiatives. This collaboration will help us expand our reach and impact in the community."
              imageUrl="/placeholder.svg?height=300&width=400"
              link="/news/partnership-announcement"
            />
            <NewsCard
              title="Volunteer Appreciation Day"
              date="February 15, 2025"
              excerpt="We recently held our annual Volunteer Appreciation Day to recognize the dedicated individuals who contribute their time and energy to our projects. Thank you to all our amazing volunteers!"
              imageUrl="/placeholder.svg?height=300&width=400"
              link="/news/volunteer-appreciation"
            />
          </div>
        </div>
      </section>

      <section className="py-12 bg-amber-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Upcoming Events</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <EventCard
              title="Menstrual Health Workshop"
              date="May 15, 2025"
              location="Johannesburg Community Center"
              description="Join us for an educational workshop on menstrual health and hygiene. Open to young girls and women of all ages."
            />
            <EventCard
              title="Mandela Day Jersey Collection"
              date="June 1-30, 2025"
              location="Various Locations"
              description="Donate warm jerseys for our annual Keeping Warm this Mandela Month initiative. Collection points available throughout the city."
            />
            <EventCard
              title="Sustainable Gardening Workshop"
              date="May 22, 2025"
              location="Green Community Garden"
              description="Learn practical skills for sustainable gardening and agriculture. Suitable for beginners and experienced gardeners."
            />
            <EventCard
              title="Volunteer Orientation"
              date="May 10, 2025"
              location="Africa Refined Headquarters"
              description="Interested in volunteering with Africa Refined? Join our orientation session to learn about opportunities and how you can contribute."
            />
          </div>
        </div>
      </section>
    </div>
  )
}

function NewsCard({
  title,
  date,
  excerpt,
  imageUrl,
  link,
}: {
  title: string
  date: string
  excerpt: string
  imageUrl: string
  link: string
}) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg shadow-md h-full">
      <div className="relative h-48">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <p className="text-sm text-amber-700 mb-2">{date}</p>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{excerpt}</p>
        <Button asChild variant="link" className="text-amber-800 p-0 justify-start">
          <Link href={link} className="flex items-center">
            READ MORE <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

function EventCard({
  title,
  date,
  location,
  description,
}: {
  title: string
  date: string
  location: string
  description: string
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-left">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <div className="flex flex-col space-y-1 mb-4">
        <p className="text-amber-700 font-medium">{date}</p>
        <p className="text-gray-600">{location}</p>
      </div>
      <p className="text-gray-700 mb-4">{description}</p>
      <Button asChild className="bg-amber-700 hover:bg-amber-800">
        <Link href="/contact">REGISTER</Link>
      </Button>
    </div>
  )
}
