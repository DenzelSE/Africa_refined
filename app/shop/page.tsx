import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ShopPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-amber-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">SHOP MADIBA STYLE</h1>
          <p className="text-xl max-w-3xl mx-auto">DESIGNED AND MANUFACTURED IN SOUTH AFRICA</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">SHOP OUR COLLECTION</h2>
            <p className="text-lg">
             {` By purchasing these products, you are contributing to the work and fundraiser of Africa Refined.`}
              <br />
              {`Seize the moment and join us in keeping the Madiba legacy alive.`}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <ProductCard title="Madiba Jersey" price="R500" imageUrl="/carousel/WhatsApp Image 2024-12-17 at 05.58.08_da6e057e.jpg" />
            <ProductCard title="Madiba T-Shirt" price="R250" imageUrl="/carousel/WhatsApp Image 2024-12-17 at 12.19.29_a349d8e0.jpg" />
            <ProductCard title="Madiba T-Shirt" price="R250" imageUrl="/carousel/WhatsApp Image 2024-12-05 at 00.11.13_5d2c4a45.jpg" />
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-amber-700 hover:bg-amber-800">
              <Link href="/shop/checkout">SHOP NOW</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">KEEPING WARM THIS MANDELA MONTH</h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            {`The 'Keeping Warm this Mandela Month' features a clothing collection of Madiba Inspired designs and
            products, supporting the initiative.`}
          </p>
          <Button asChild size="lg" className="bg-amber-700 hover:bg-amber-800">
            <Link href="/shop">VIEW COLLECTION</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

function ProductCard({ title, price, imageUrl }: { title: string; price: string; imageUrl: string }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-80 w-full">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardHeader>
        <CardTitle className="text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-center text-2xl font-bold">{price}</p>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button asChild className="bg-amber-700 hover:bg-amber-800">
          <Link href="/shop/checkout">BUY NOW</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
