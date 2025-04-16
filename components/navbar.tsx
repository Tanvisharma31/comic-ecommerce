"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ShoppingCart, Heart, User, Search, Menu, X, Sun, Moon, LogIn, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useTheme } from "next-themes"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ThemeToggle } from "@/components/theme-toggle"

const Navbar = () => {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false) // This should come from auth context
  const [isAdmin, setIsAdmin] = useState(false) // This should come from auth context

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Categories", href: "/categories" },
    { name: "New Arrivals", href: "/new-arrivals" },
    { name: "Sale", href: "/sale" },
  ]

  const userMenuItems = [
    { name: "Profile", href: "/profile", icon: User },
    { name: "Orders", href: "/profile/orders", icon: ShoppingCart },
    { name: "Wishlist", href: "/wishlist", icon: Heart },
    { name: "Settings", href: "/profile/settings", icon: User },
  ]

  const adminMenuItems = [
    { name: "Dashboard", href: "/admin", icon: User },
    { name: "Products", href: "/admin/products", icon: ShoppingCart },
    { name: "Orders", href: "/admin/orders", icon: ShoppingCart },
    { name: "Users", href: "/admin/users", icon: User },
    { name: "Settings", href: "/admin/settings", icon: User },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <nav className="grid gap-6 text-lg font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`hover:text-primary ${pathname === link.href ? "text-primary font-bold" : ""}`}
                >
                  {link.name}
                </Link>
              ))}
              {isLoggedIn && (
                <>
                  <DropdownMenuSeparator />
                  {userMenuItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`hover:text-primary ${pathname === item.href ? "text-primary font-bold" : ""}`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </>
              )}
              {isAdmin && (
                <>
                  <DropdownMenuSeparator />
                  {adminMenuItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`hover:text-primary ${pathname === item.href ? "text-primary font-bold" : ""}`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </>
              )}
            </nav>
          </SheetContent>
        </Sheet>

        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-comic text-xl font-bold sm:text-2xl">
            <span className="text-primary">Zidio</span> Comics
          </span>
        </Link>

        <nav className="hidden md:flex flex-1 items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors hover:text-primary ${
                pathname === link.href ? "text-primary font-bold" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center space-x-4">
          <ThemeToggle />
          <div className="flex items-center space-x-2">
            {isSearchOpen ? (
              <div className="flex items-center">
                <Input type="search" placeholder="Search..." className="w-[200px] md:w-[300px]" autoFocus />
                <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(false)}>
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close search</span>
                </Button>
              </div>
            ) : (
              <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
            )}

            <Link href="/wishlist">
              <Button variant="ghost" size="icon">
                <Heart className="h-5 w-5" />
                <span className="sr-only">Wishlist</span>
              </Button>
            </Link>

            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Cart</span>
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-xs font-bold text-primary-foreground flex items-center justify-center">
                  0
                </span>
              </Button>
            </Link>

            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <User className="h-5 w-5" />
                    <span className="sr-only">Account</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {userMenuItems.map((item) => (
                    <DropdownMenuItem key={item.href} asChild>
                      <Link href={item.href} className="flex items-center">
                        <item.icon className="mr-2 h-4 w-4" />
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                  {isAdmin && (
                    <>
                      <DropdownMenuSeparator />
                      {adminMenuItems.map((item) => (
                        <DropdownMenuItem key={item.href} asChild>
                          <Link href={item.href} className="flex items-center">
                            <item.icon className="mr-2 h-4 w-4" />
                            {item.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </>
                  )}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => setIsLoggedIn(false)}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link href="/auth/login">
                <Button variant="ghost" size="icon">
                  <LogIn className="h-5 w-5" />
                  <span className="sr-only">Sign In</span>
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
