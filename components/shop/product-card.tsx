"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Modal } from "@/components/ui/modal"
import OrderForm from "@/components/shop/order-form"

interface Product {
  id: string
  name: string
  price: number
  image_url?: string
  description?: string
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false)

  return (
    <>
      <Card className="overflow-hidden h-full flex flex-col">
        <div className="relative h-64 w-full">
          <Image
            src={product.image_url || "/placeholder.svg?height=400&width=300"}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
        <CardHeader>
          <CardTitle className="text-center">{product.name}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-center text-2xl font-bold mb-4">R{product.price.toFixed(2)}</p>
          {product.description && <p className="text-gray-600 text-sm">{product.description}</p>}
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button className="bg-amber-700 hover:bg-amber-800" onClick={() => setIsOrderModalOpen(true)}>
            ORDER NOW
          </Button>
        </CardFooter>
      </Card>

      {/* Order Modal */}
      <Modal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        title={`Order ${product.name}`}
        className="max-w-lg max-h-[90vh] overflow-y-auto"
      >
        <OrderForm
          product={product}
          onSuccess={() => setIsOrderModalOpen(false)}
          onCancel={() => setIsOrderModalOpen(false)}
        />
      </Modal>
    </>
  )
}
