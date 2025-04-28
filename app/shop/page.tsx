import { ProductCard } from "@/components/shop/product-card"

export default function ShopPage() {
  // Sample product data
  const products = [
    {
      id: "1",
      name: "Madiba Jersey",
      price: 400,
      image_url: "/carousel/WhatsApp Image 2024-12-17 at 12.19.29_a349d8e0.jpg",
      description:
        "Stay warm with our Madiba-inspired jersey. Made from high-quality materials with Mandela's iconic silhouette.",
    },
    {
      id: "2",
      name: "Madiba T-Shirt",
      price: 250,
      image_url: "/carousel/mandelaJ.jpg",
      description: "Comfortable cotton t-shirt featuring Nelson Mandela's portrait and inspirational quote.",
    },
    {
      id: "3",
      name: "Madiba Sweater",
      price: 150,
      image_url: "/carousel/WhatsApp Image 2024-12-05 at 00.11.14_9828787d.jpg",
      description: "Stylish cap with embroidered Mandela silhouette. One size fits all.",
    },
  ]

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
              By purchasing these products, you are contributing to the work and fundraiser of Africa Refined.
              <br />
              Seize the moment and join us in keeping the Madiba legacy alive.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">KEEPING WARM THIS MANDELA MONTH</h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            The 'Keeping Warm this Mandela Month' features a clothing collection of Madiba Inspired designs and
            products, supporting the initiative.
          </p>
        </div>
      </section>
    </div>
  )
}
