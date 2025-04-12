import Image from "next/image"
import { Heart, Book, Users, Star } from "lucide-react"
import ImageGallery from "../../components/ImageGallery"

const projectImages = [
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Luteal Liberty Workshop",
    width: 400,
    height: 300,
    category: "event" as const,
    title: "Menstrual Health Workshop",
    date: "2024-02-15",
  },
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Community Outreach",
    width: 400,
    height: 300,
    category: "engagement" as const,
    title: "School Outreach Program",
    date: "2024-01-30",
  },
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Project Achievement",
    width: 400,
    height: 300,
    category: "achievement" as const,
    title: "100 Schools Reached",
    date: "2024-03-01",
  },
]

export default function LutealLibertyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Hero Section with Curved Design */}
      <div className="relative min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20From%202025-03-03%2020-19-27-ebHrLR6nlMrnKzIDEjPheO2SAjHMMQ.png"
            alt="Luteal Liberty Banner"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="relative container mx-auto px-6 pt-32 pb-20">
          <h1 className="text-5xl font-bold text-white mb-6">Luteal Liberty Project</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            {`Empowering young girls through reproductive and menstrual health education while addressing the challenges
            they face during their transition through puberty.`}
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-pink-50 rounded-xl p-6 text-center">
              <div className="flex justify-center mb-4">
                <Heart className="w-10 h-10 text-pink-500" />
              </div>
              <h3 className="text-2xl font-bold text-pink-600">{`100+`}</h3>
              <p className="text-gray-600">Schools Reached</p>
            </div>
            <div className="bg-pink-50 rounded-xl p-6 text-center">
              <div className="flex justify-center mb-4">
                <Users className="w-10 h-10 text-pink-500" />
              </div>
              <h3 className="text-2xl font-bold text-pink-600">{`5,000+<`}</h3>
              <p className="text-gray-600">Girls Supported</p>
            </div>
            <div className="bg-pink-50 rounded-xl p-6 text-center">
              <div className="flex justify-center mb-4">
                <Book className="w-10 h-10 text-pink-500" />
              </div>
              <h3 className="text-2xl font-bold text-pink-600">{`200+`}</h3>
              <p className="text-gray-600">Workshops Conducted</p>
            </div>
            <div className="bg-pink-50 rounded-xl p-6 text-center">
              <div className="flex justify-center mb-4">
                <Star className="w-10 h-10 text-pink-500" />
              </div>
              <h3 className="text-2xl font-bold text-pink-600">{`50+`}</h3>
              <p className="text-gray-600">Partner Schools</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with GIF */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-pink-600">About Luteal Liberty</h2>
              <p className="text-gray-700 mb-6">
                {`The concept behind the Luteal Liberty project title stems from the fourth and final phase of the
                menstrual cycle, known as the luteal phase. During this phase, the corpus luteum, formed after
                ovulation, produces hormones and exits the body, as the body prepares for a potential pregnancy by
                increasing progesterone levels.`}
              </p>
              <p className="text-gray-700 mb-6">
                {`'Liberty' represents freedom, independence, and empowerment. It signifies the freedom to understand and
                manage one's body, the empowerment that comes from education and self-awareness, and the ability to
                independently make informed decisions about one's health.`}
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-pink-600">{`Key Focus Areas:`}</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Menstrual Health Management Education</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Sexual Health and Reproductive Education</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{`Self-care and Mental Health Support`}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Access to Menstrual Products</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/luteal-liberty.gif"
                  alt="Luteal Liberty Project in action"
                  layout="fill"
                  objectFit="cover"
                  unoptimized={true} // Important for GIFs to maintain animation
                />
              </div>

              {/* Right side dots */}
              <div className="absolute top-0 -right-8 h-full">
                <div className="flex flex-col gap-2 h-full justify-between">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div key={`right-${i}`} className="w-2 h-2 rounded-full bg-pink-500" />
                  ))}
                </div>
              </div>

              {/* Bottom side dots */}
              <div className="absolute -bottom-8 left-0 w-full">
                <div className="flex gap-2 w-full justify-between">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div key={`bottom-${i}`} className="w-2 h-2 rounded-full bg-pink-500" />
                  ))}
                </div>
              </div>

              {/* Corner dots - additional dots to fill the corner */}
              <div className="absolute -bottom-8 -right-8">
                <div className="grid grid-cols-3 gap-2">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div key={`corner-${i}`} className="w-2 h-2 rounded-full bg-pink-500" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-pink-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center text-pink-600">Our Impact in Pictures</h2>
          <ImageGallery images={projectImages} />
        </div>
      </section>
    </div>
  )
}

