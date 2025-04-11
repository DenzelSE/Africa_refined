import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function LutealLibertyPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-amber-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Luteal Liberty Project</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-64 w-full mb-8">
              <Image
                src="/placeholder.svg?height=300&width=800"
                alt="Luteal Liberty Project"
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <p className="text-lg mb-6">
              The Luteal Liberty Project, founded in 2019, aims to empower young girls through reproductive and
              menstrual health education whilst addressing the challenges young women experience as they transition
              through puberty, offering support and resources to help them manage their menstrual and reproductive
              health more effectively.
            </p>

            <p className="text-lg mb-6">
              The concept behind the 'Luteal Liberty' project title stems from the fourth and final phase of the
              menstrual cycle called the 'Luteal' Phase, which occurs after ovulation and before menstruation. During
              this phase, no menstrual fluid exits the body, as the body prepares for a potential pregnancy by
              increasing progesterone levels. Moreover, women experience a break from menstruation and enjoy greater
              freedom of movement. This phase symbolizes a period of preparation, introspection, freedom, and
              empowerment.
            </p>

            <p className="text-lg mb-6">
              'Liberty' represents freedom, independence, and empowerment. It signifies the freedom to understand and
              manage one's body, the empowerment that comes from education and self-awareness, and the ability to
              independently take control of one's health and well-being.
            </p>

            <p className="text-lg mb-6">
              Together, 'Luteal Liberty' embodies the idea of empowering young girls through education about
              reproductive and menstrual health, providing them with the necessary knowledge and resources they need to
              navigate their life journeys with confidence. It aims to offer freedom from the lack of knowledge and
              awareness about menstrual health and hygiene. Removing the negative stigma of school girls missing school
              because of menstruation and the increased incidence of teenage pregnancy due to lack of knowledge about
              reproductive health. Overall, emphasizing the importance of knowledge, self-awareness, and empowerment in
              navigating reproductive and menstrual health as well as Being A Women.
            </p>

            <p className="text-lg mb-6">
              To date, the Luteal Liberty Project has distributed over 100 sanitary products to girls from disadvantaged
              communities and has facilitated several educative talks and workshops.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">The key focus areas of the project include:</h2>
            <ul className="list-disc pl-6 text-lg space-y-4">
              <li>
                <strong>Menstrual Hygiene Management:</strong> Educating girls on how to manage their menstrual health
                effectively, including the use of sanitary products and maintaining hygiene.
              </li>
              <li>
                <strong>Sexual Health:</strong> Providing information on sexual health, helping girls understand their
                bodies, and promoting safe practices.
              </li>
              <li>
                <strong>Reproduction:</strong> Teaching about the reproductive system, how it works, and the changes
                that occur during puberty.
              </li>
              <li>
                <strong>Puberty:</strong> Offering guidance on the physical and emotional changes that come with
                puberty, helping girls navigate this transitional period with confidence.
              </li>
              <li>
                <strong>Empowerment, Self-Care and Self-Love:</strong> Encouraging self-acceptance and self-care,
                promoting a positive body image and mental well-being. Teaching girls to prioritize self-care and listen
                to their bodies, promoting a sense of liberty and independence during menstruation.
              </li>
              <li>
                <strong>Education and Awareness:</strong> Providing information about menstruation and how to manage
                them. This can help girls understand their bodies better and feel more in control.
              </li>
              <li>
                <strong>Access to Resources:</strong> Offering access to products and services that can alleviate
                symptoms, such as pain relief, nutritional advice, and mental health support.
              </li>
              <li>
                <strong>Advocacy and Policy Change:</strong> Working towards policy changes that support menstrual
                health and well-being, such as ensuring access to menstrual products and promoting workplace
                accommodations.
              </li>
              <li>
                <strong>Community Support:</strong> Creating a supportive community where individuals can share their
                experiences, seek advice, and find solidarity with others going through similar experiences.
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
