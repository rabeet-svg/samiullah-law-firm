import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import { TRPCProvider } from "@/lib/trpc/react"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "Sami Ullah Dayo & Co - Professional Legal Services",
  description:
    "Sami Ullah Dayo & Co specializes in property, land, tax, corporate and employment law. Trusted legal partners across multiple locations in Karachi, Malir, and Hyderabad.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable} antialiased`}>
      <body>
        <TRPCProvider>
          {children}
          <Toaster />
        </TRPCProvider>
      </body>
    </html>
  )
}
