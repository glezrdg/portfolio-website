// pages/api/contact.js

import nodemailer from "nodemailer"

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  const { name, email, message } = req.body

  // Basic server-side validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" })
  }

  // Set up Nodemailer transporter using your SMTP configuration
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, // e.g., smtp.gmail.com
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === "true", // true for port 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  })

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL, // Your receiving email address
      subject: "New Contact Form Submission",
      html: `
        <h3>New Message from Portfolio Contact Form</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/> ${message}</p>
      `
    })

    res.status(200).json({ message: "Email sent successfully" })
  } catch (error) {
    console.error("Error sending email:", error)
    res.status(500).json({ error: "Failed to send email" })
  }
}
