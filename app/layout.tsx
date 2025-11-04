import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "FOCAL + AUSTRIAN AUDIO en Audio Arte | 25 de Noviembre",
  description:
    "Evento exclusivo de audio profesional. Entrada gratuita, cupos limitados y sorteos exclusivos. Auditorio Audio Arte, Rosario.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={poppins.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
