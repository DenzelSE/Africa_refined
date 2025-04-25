"use server"

import nodemailer from "nodemailer"

interface EmailOptions {
  to: string
  subject: string
  html: string
}

export async function sendEmail({ to, subject, html }: EmailOptions) {
  // Get the Africa Refined Gmail credentials from environment variables
  const emailUser = process.env.EMAIL_USER
  const emailAppPassword = process.env.EMAIL_APP_PASSWORD

  if (!emailUser || !emailAppPassword) {
    console.error("Missing email configuration. Please set EMAIL_USER and EMAIL_APP_PASSWORD environment variables.")
    throw new Error("Email configuration is missing")
  }

  // Create a transporter for Gmail
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: emailUser, // Africa Refined Gmail address
      pass: emailAppPassword, // App password for the Gmail account
    },
  })

  // Send the email
  try {
    const info = await transporter.sendMail({
      from: `"Africa Refined" <${emailUser}>`,
      to,
      subject,
      html,
    })

    console.log("Email sent successfully:", info.messageId)
    return info
  } catch (error) {
    console.error("Failed to send email:", error)
    throw error
  }
}
