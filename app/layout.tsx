import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "Scooby-Doo",
  description: "Scooby-Doo ($SCOOBY) - Where mystery meets meme magic on the Base blockchain!",
  generator: "v0.dev",
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/scooby-favicon.png", sizes: "32x32", type: "image/png" }],
    apple: [{ url: "/scooby-favicon.png", sizes: "180x180", type: "image/png" }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/scooby-favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/scooby-favicon.png" />
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
