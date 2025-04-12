import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-amber-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">AFRICA REFINED</h3>
            <p className="mb-4">Refining health, sustainability, and empowerment across Africa</p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-amber-300">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="hover:text-amber-300">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="hover:text-amber-300">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="hover:text-amber-300">
                <Youtube size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-amber-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-amber-300">
                  Our Projects
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-amber-300">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="mb-2">Email: info@africarefined.org</p>
            <p className="mb-4">Phone: +27 123 456 789</p>
            <Link
              href="/donate"
              className="bg-white text-amber-900 px-4 py-2 rounded font-medium hover:bg-amber-100 transition-colors"
            >
              DONATE TODAY
            </Link>
          </div>
        </div>

        <div className="border-t border-amber-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Africa Refined. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

