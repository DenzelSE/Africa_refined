import Image from "next/image"
import OrderForm from "@/components/shop/order-form"

// Sample product data - in a real app, this would come from a CMS or API
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

export default function ProductPage({ params }: { params: { productId: string } }) {
  // Find the product by ID
  const product = products.find((p) => p.id === params.productId)

  // If product not found, show a message
  if (!product) {
    return (
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <p>The product you're looking for doesn't exist.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Product Image */}
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image
              src={product.image_url || "/placeholder.svg?height=500&width=500"}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-2xl font-bold text-amber-700 mb-6">R{product.price.toFixed(2)}</p>

            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-2">Description</h2>
              <p className="text-gray-600">{product.description}</p>
            </div>

            {/* Order Form */}
            <OrderForm
              product={product}
              onSuccess={() => (window.location.href = "/shop/confirmation")}
              onCancel={() => (window.location.href = "/shop")}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

// Generate static paths for all products
export function generateStaticParams() {
  return products.map((product) => ({
    productId: product.id,
  }))
}
