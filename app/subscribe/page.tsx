import type React from "react"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export default function SubscribePage() {
  return (
    <div className="min-h-screen">
      <section className="bg-amber-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">SUBSCRIBE</h1>
          <p className="text-xl max-w-3xl mx-auto">Stay connected with Africa Refined</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-6">Follow Our Journey</h2>
              <p className="text-lg mb-8">
                {`Stay updated with our latest news, events, and initiatives by subscribing to our newsletter and
                following us on social media. Join our community and be part of the change we're making across Africa.`}
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
                  <div className="flex space-x-6">
                    <SocialButton icon={<Facebook size={24} />} href="https://facebook.com" label="Facebook" />
                    <SocialButton icon={<Instagram size={24} />} href="https://instagram.com" label="Instagram" />
                    <SocialButton icon={<Twitter size={24} />} href="https://twitter.com" label="Twitter" />
                    <SocialButton icon={<Youtube size={24} />} href="https://youtube.com" label="YouTube" />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Why Subscribe?</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Receive updates on our projects and initiatives</li>
                    <li>Learn about upcoming events and workshops</li>
                    <li>Get exclusive content and stories from the field</li>
                    <li>Be the first to know about volunteer opportunities</li>
                    <li>Join a community of like-minded individuals passionate about making a difference</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function SocialButton({
  icon,
  href,
  label,
}: {
  icon: React.ReactNode
  href: string
  label: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 text-amber-800 hover:bg-amber-200 transition-colors"
      aria-label={`Follow us on ${label}`}
    >
      {icon}
    </a>
  )
}
