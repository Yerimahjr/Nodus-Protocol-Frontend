import type { Metadata } from "next"
import { Geist } from "next/font/google"
import Navbar from "@/components/Navbar"
import "./globals.css"

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default:  "Nodus Protocol",
    template: "%s | Nodus Protocol",
  },
  description:
    "Permissionless AMM DEX on Stellar Soroban. Swap XLM/USDC, provide liquidity, and earn fees with zero custody.",
  keywords: ["AMM", "DEX", "Stellar", "Soroban", "DeFi", "XLM", "USDC", "liquidity"],
  authors: [{ name: "Nodus Protocol" }],
  openGraph: {
    type:        "website",
    siteName:    "Nodus Protocol",
    title:       "Nodus Protocol — AMM DEX on Stellar Soroban",
    description: "Swap, provide liquidity, and earn fees on the fastest AMM built on Stellar Soroban.",
    locale:      "en_US",
  },
  twitter: {
    card:        "summary_large_image",
    title:       "Nodus Protocol",
    description: "Permissionless AMM liquidity on Stellar Soroban.",
  },
  robots: {
    index:  true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full bg-black text-white">
        <Navbar />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  )
}
