"use client"

import type React from "react"

import { useState, useRef, type FormEvent } from "react"
import emailjs from "@emailjs/browser"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AlertCircle, CheckCircle } from "lucide-react"

const SIZES = ["XS", "S", "M", "L", "XL", "XXL"]

interface Product {
  id: string
  name: string
  price: number
  image_url?: string
}

interface OrderFormProps {
  product: Product
  onSuccess: () => void
  onCancel: () => void
}

export default function OrderForm({ product, onSuccess, onCancel }: OrderFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)
  const [formSuccess, setFormSuccess] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    size: "M",
    quantity: 1,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormError(null)
    setFormSuccess(null)

    try {
      // Calculate total amount
      const totalAmount = product.price * formData.quantity

      // Prepare the email template parameters
      const templateParams = {
        product_name: product.name,
        product_price: product.price.toFixed(2),
        size: formData.size,
        quantity: formData.quantity,
        total_amount: totalAmount.toFixed(2),
        customer_name: formData.fullName,
        customer_email: formData.email,
        customer_phone: formData.phone,
        customer_address: `${formData.address}, ${formData.city}, ${formData.postalCode}`,
        order_date: new Date().toLocaleString(),
      }

    //   // Send email to Africa Refined (admin notification)
    //   await emailjs.send(
    //     "service_mmxu68g", 
    //     "order_temp", 
    //     templateParams,
    //     "BadZ2OkPXYtF4dydz",
    //   )

      // Send confirmation email to customer
      await emailjs.send(
        "service_mmxu68g", 
        "order_temp", 
        templateParams,
        "BadZ2OkPXYtF4dydz", 
      )

      setFormSuccess(
        "Your order has been placed successfully! A confirmation email has been sent to your email address.",
      )

      // Clear form
      if (formRef.current) {
        formRef.current.reset()
      }

      // Close modal after 3 seconds
      setTimeout(() => {
        onSuccess()
      }, 3000)
    } catch (error) {
      console.error("Order submission error:", error)
      setFormError("An error occurred while placing your order. Please try again or contact us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      {formSuccess ? (
        <div className="bg-green-50 p-6 rounded-lg text-center">
          <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-green-800 mb-2">Order Placed Successfully!</h3>
          <p className="text-green-600">{formSuccess}</p>
        </div>
      ) : (
        <>
          {/* Size Selection */}
          <div className="space-y-2">
            <Label htmlFor="size">Size</Label>
            <select
              id="size"
              name="size"
              value={formData.size}
              onChange={handleChange}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {SIZES.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>

          {/* Quantity */}
          <div className="space-y-2">
            <Label htmlFor="quantity">Quantity</Label>
            <Input
              id="quantity"
              name="quantity"
              type="number"
              min="1"
              value={formData.quantity}
              onChange={handleChange}
              required
            />
          </div>

          <div className="pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold mb-4">Your Information</h3>

            {/* Full Name */}
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required />
            </div>

            {/* Email */}
            <div className="space-y-2 mt-4">
              <Label htmlFor="email">Email Address (for order confirmation)</Label>
              <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
            </div>

            {/* Phone */}
            <div className="space-y-2 mt-4">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
            </div>

            {/* Address */}
            <div className="space-y-2 mt-4">
              <Label htmlFor="address">Delivery Address</Label>
              <Input id="address" name="address" value={formData.address} onChange={handleChange} required />
            </div>

            {/* City */}
            <div className="space-y-2 mt-4">
              <Label htmlFor="city">City</Label>
              <Input id="city" name="city" value={formData.city} onChange={handleChange} required />
            </div>

            {/* Postal Code */}
            <div className="space-y-2 mt-4">
              <Label htmlFor="postalCode">Postal Code</Label>
              <Input id="postalCode" name="postalCode" value={formData.postalCode} onChange={handleChange} required />
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
            <div className="flex justify-between mb-2">
              <span>
                {product.name} (Size: {formData.size})
              </span>
              <span>R{product.price.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Quantity</span>
              <span>{formData.quantity}</span>
            </div>
            <div className="flex justify-between font-bold text-lg pt-2 border-t">
              <span>Total</span>
              <span>R{(product.price * formData.quantity).toFixed(2)}</span>
            </div>
          </div>

          {/* Error Message */}
          {formError && (
            <div className="bg-red-50 p-4 rounded-lg flex items-center gap-2 text-red-700">
              <AlertCircle className="h-5 w-5 flex-shrink-0" />
              <span>{formError}</span>
            </div>
          )}

          {/* Submit Button */}
          <div className="flex space-x-4">
            <Button type="button" variant="outline" className="flex-1" onClick={onCancel} disabled={isSubmitting}>
              Cancel
            </Button>
            <Button type="submit" className="flex-1 bg-amber-700 hover:bg-amber-800" disabled={isSubmitting}>
              {isSubmitting ? "Processing..." : "Place Order"}
            </Button>
          </div>
        </>
      )}
    </form>
  )
}
