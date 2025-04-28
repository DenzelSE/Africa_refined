import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function OrderConfirmationPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="text-center mb-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
            <p className="text-gray-600">
              Thank you for your order. We have sent a confirmation email to your provided email address.
            </p>
          </div>

          <div className="border-t border-b border-gray-200 py-4 mb-6">
            <p className="text-center text-gray-600">
              Your order has been received and will be processed shortly. If you have any questions about your order,
              please contact us at info@africarefined.org
            </p>
          </div>

          <div className="text-center">
            <Button asChild className="bg-amber-700 hover:bg-amber-800">
              <Link href="/shop">Continue Shopping</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
