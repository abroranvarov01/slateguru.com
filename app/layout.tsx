import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SlateGuru - Expert Tablet Reviews & Buying Guides",
  description:
    "In-depth tablet reviews, expert comparisons, and unbiased recommendations. Find the perfect tablet with SlateGuru's comprehensive testing and analysis.",
  keywords: "tablet reviews, iPad reviews, Android tablets, tablet comparison, tablet buying guide, best tablets",
  authors: [{ name: "SlateGuru Team" }],
  openGraph: {
    title: "SlateGuru - Expert Tablet Reviews & Buying Guides",
    description: "Your trusted guide to finding the perfect tablet",
    type: "website",
  },
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f9fa" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1d2e" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
