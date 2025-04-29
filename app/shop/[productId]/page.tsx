import Image from "next/image"
import { Link } from "lucide-react"

const products = [
  {
    id: "1",
    name: "Madiba Jersey",
    price: 500,
    image_url: "/placeholder.svg?height=400&width=300",
    description:
      "Stay warm with our Madiba-inspired jersey. Made from high-quality materials with Mandela's iconic silhouette.",
  },
  {
    id: "2",
    name: "Madiba T-Shirt",
    price: 250,
    image_url: "/placeholder.svg?height=400&width=300",
    description: "Comfortable cotton t-shirt featuring Nelson Mandela's portrait and inspirational quote.",
  },
  {
    id: "3",
    name: "Madiba Cap",
    price: 150,
    image_url: "/placeholder.svg?height=400&width=300",
    description: "Stylish cap with embroidered Mandela silhouette. One size fits all.",
  },
]


export default function ProductPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Madiba Collection</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product) => (
            <div key={product.id} className="border rounded-lg overflow-hidden shadow-md">
              {/* Product Image */}
              <div className="relative h-64 w-full">
                <Image
                  src={product.image_url || "/placeholder.svg?height=400&width=300"}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Product Details */}
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{product.name}</h2>
                <p className="text-amber-700 font-bold mb-3">R{product.price.toFixed(2)}</p>
                <p className="text-gray-600 mb-4 text-sm line-clamp-2">{product.description}</p>
                
                <div className="flex justify-between items-center">
                  <Link 
                    href={`/shop/${product.id}`} 
                    className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-md text-sm"
                  >
                    View Details
                  </Link>
                  <button 
                    className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-md text-sm"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
