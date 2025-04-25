"use server"

import { createServerClient } from "@/utils/supabase/server"
import { sendEmail } from "@/lib/email"
import { v4 as uuidv4 } from "uuid"

interface OrderData {
  productId: string
  productName: string
  productPrice: number
  size: string
  quantity: number
  totalAmount: number
  customerName: string
  customerEmail: string
  customerPhone: string
  address: string
  city: string
  postalCode: string
}

export async function createOrder(data: OrderData) {
  try {
    const supabase = createServerClient()

    // Generate a unique order ID
    const orderId = uuidv4()

    // Insert the order into the database
    const { error: orderError } = await supabase.from("orders").insert({
      id: orderId,
      customer_name: data.customerName,
      customer_email: data.customerEmail,
      customer_phone: data.customerPhone,
      address: data.address,
      city: data.city,
      postal_code: data.postalCode,
      total_amount: data.totalAmount,
      status: "pending",
      payment_method: "cash_on_delivery", // Default payment method
      payment_status: "pending",
    })

    if (orderError) {
      throw new Error(`Error creating order: ${orderError.message}`)
    }

    // Insert the order item
    const { error: itemError } = await supabase.from("order_items").insert({
      order_id: orderId,
      product_id: data.productId,
      quantity: data.quantity,
      price: data.productPrice,
      size: data.size,
    })

    if (itemError) {
      throw new Error(`Error creating order item: ${itemError.message}`)
    }

    // The Africa Refined email address (from environment variable)
    const africarefinedEmail = process.env.EMAIL_USER || "your-gmail@gmail.com"

    // Send order notification to Africa Refined
    await sendEmail({
      to: africarefinedEmail,
      subject: "New Order Received - Africa Refined",
      html: generateAdminEmailHtml({
        orderId,
        customerName: data.customerName,
        customerEmail: data.customerEmail,
        customerPhone: data.customerPhone,
        address: data.address,
        city: data.city,
        postalCode: data.postalCode,
        productName: data.productName,
        size: data.size,
        quantity: data.quantity,
        totalAmount: data.totalAmount,
      }),
    })

    // Send confirmation email to the customer
    await sendEmail({
      to: data.customerEmail,
      subject: "Your Africa Refined Order Confirmation",
      html: generateCustomerEmailHtml({
        orderId,
        customerName: data.customerName,
        productName: data.productName,
        size: data.size,
        quantity: data.quantity,
        totalAmount: data.totalAmount,
      }),
    })

    return { success: true, orderId }
  } catch (error) {
    console.error("Order creation error:", error)
    return { error: error instanceof Error ? error.message : "An error occurred while processing your order" }
  }
}

// Email template for customer
function generateCustomerEmailHtml({ orderId, customerName, productName, size, quantity, totalAmount }: any) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background-color: #78350f; color: white; padding: 20px; text-align: center;">
        <h1>Order Confirmation</h1>
      </div>
      <div style="padding: 20px;">
        <p>Dear ${customerName},</p>
        <p>Thank you for your order with Africa Refined. We have received your order and will process it shortly.</p>
        <h2>Order Details</h2>
        <p><strong>Order ID:</strong> ${orderId}</p>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr style="background-color: #f2f2f2;">
            <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">Product</th>
            <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">Size</th>
            <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">Quantity</th>
            <th style="padding: 10px; text-align: right; border: 1px solid #ddd;">Price</th>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;">${productName}</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${size}</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${quantity}</td>
            <td style="padding: 10px; text-align: right; border: 1px solid #ddd;">R${totalAmount.toFixed(2)}</td>
          </tr>
          <tr>
            <td colspan="3" style="padding: 10px; text-align: right; border: 1px solid #ddd;"><strong>Total:</strong></td>
            <td style="padding: 10px; text-align: right; border: 1px solid #ddd;"><strong>R${totalAmount.toFixed(2)}</strong></td>
          </tr>
        </table>
        <p>We will contact you shortly to confirm your order and arrange delivery.</p>
        <p>If you have any questions, please contact us at ${process.env.EMAIL_USER || "africarefined@gmail.com"}.</p>
        <p>Thank you for supporting Africa Refined!</p>
      </div>
      <div style="background-color: #f2f2f2; padding: 20px; text-align: center; font-size: 12px; color: #666;">
        <p>&copy; ${new Date().getFullYear()} Africa Refined. All rights reserved.</p>
      </div>
    </div>
  `
}

// Email template for admin
function generateAdminEmailHtml({
  orderId,
  customerName,
  customerEmail,
  customerPhone,
  address,
  city,
  postalCode,
  productName,
  size,
  quantity,
  totalAmount,
}: any) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background-color: #78350f; color: white; padding: 20px; text-align: center;">
        <h1>New Order Received</h1>
      </div>
      <div style="padding: 20px;">
        <p>A new order has been placed on the Africa Refined website.</p>
        <h2>Order Details</h2>
        <p><strong>Order ID:</strong> ${orderId}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
        
        <h3>Customer Information</h3>
        <p><strong>Name:</strong> ${customerName}</p>
        <p><strong>Email:</strong> ${customerEmail}</p>
        <p><strong>Phone:</strong> ${customerPhone}</p>
        <p><strong>Address:</strong> ${address}, ${city}, ${postalCode}</p>
        
        <h3>Order Items</h3>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr style="background-color: #f2f2f2;">
            <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">Product</th>
            <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">Size</th>
            <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">Quantity</th>
            <th style="padding: 10px; text-align: right; border: 1px solid #ddd;">Price</th>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;">${productName}</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${size}</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${quantity}</td>
            <td style="padding: 10px; text-align: right; border: 1px solid #ddd;">R${totalAmount.toFixed(2)}</td>
          </tr>
          <tr>
            <td colspan="3" style="padding: 10px; text-align: right; border: 1px solid #ddd;"><strong>Total:</strong></td>
            <td style="padding: 10px; text-align: right; border: 1px solid #ddd;"><strong>R${totalAmount.toFixed(2)}</strong></td>
          </tr>
        </table>
        
        <p><strong>IMPORTANT:</strong> Please contact the customer to confirm this order and arrange delivery.</p>
      </div>
    </div>
  `
}
