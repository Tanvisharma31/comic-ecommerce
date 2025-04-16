import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/lib/theme-provider"
import { AuthProvider } from "@/lib/auth"
import { CartProvider } from "@/lib/cart"
import { ClientWrapper } from "@/components/client-wrapper"
import Navbar from "@/components/navbar"
import './globals.css'
import Footer from "@/components/footer"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Zidio Comics - Superhero T-Shirt E-Commerce",
  description: "Your one-stop shop for superhero-themed t-shirts and merchandise",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <CartProvider>
              <Navbar/>
              {children}
              <Footer/>
            </CartProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

