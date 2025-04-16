"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { LogOut, Settings, Package, Users, ShoppingCart, LayoutDashboard } from "lucide-react"

const AdminNavbar = () => {
  const pathname = usePathname()

  const adminLinks = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Products", href: "/admin/products", icon: Package },
    { name: "Orders", href: "/admin/orders", icon: ShoppingCart },
    { name: "Users", href: "/admin/users", icon: Users },
    { name: "Settings", href: "/admin/settings", icon: Settings },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/admin" className="mr-6 flex items-center space-x-2">
          <span className="font-comic text-xl font-bold sm:text-2xl">
            <span className="text-primary">Zidio</span> Admin
          </span>
        </Link>

        <nav className="hidden md:flex flex-1 items-center space-x-6 text-sm font-medium">
          {adminLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center transition-colors hover:text-primary ${
                pathname === link.href ? "text-primary font-bold" : ""
              }`}
            >
              <link.icon className="mr-2 h-4 w-4" />
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-2">
          <Link href="/">
            <Button variant="outline" size="sm">
              View Store
            </Button>
          </Link>
          <Button variant="ghost" size="icon">
            <LogOut className="h-5 w-5" />
            <span className="sr-only">Sign Out</span>
          </Button>
        </div>
      </div>
    </header>
  )
}

export default AdminNavbar 