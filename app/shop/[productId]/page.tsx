import { createServerClient } from "@/utils/supabase/server"
import { notFound } from "next/navigation"
import Image from "next/image"
import OrderForm from "../../../app/shop/order-form"

export default async function ProductPage({ params }: { params: { productId: string } }) {
  const supabase = createServerClient()

  // Fetch the product details
  const { data: product, error } = await supabase.from("products").select("*").eq("id", params.productId).single()

  if (error || !product) {
    notFound()
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
            <OrderForm product={product} />
          </div>
        </div>
      </div>
    </div>
  )
}
