import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-comic text-xl font-bold">
                <span className="text-primary">Starry</span> Heroes
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Premium superhero themed t-shirts with a Starry Night twist. Wear your favorite heroes in style.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-medium text-lg">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/shop" className="text-muted-foreground hover:text-primary">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/new-arrivals" className="text-muted-foreground hover:text-primary">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/bestsellers" className="text-muted-foreground hover:text-primary">
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link href="/sale" className="text-muted-foreground hover:text-primary">
                  Sale
                </Link>
              </li>
              <li>
                <Link href="/gift-cards" className="text-muted-foreground hover:text-primary">
                  Gift Cards
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-medium text-lg">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/categories/marvel" className="text-muted-foreground hover:text-primary">
                  Marvel Universe
                </Link>
              </li>
              <li>
                <Link href="/categories/dc" className="text-muted-foreground hover:text-primary">
                  DC Comics
                </Link>
              </li>
              <li>
                <Link href="/categories/anime" className="text-muted-foreground hover:text-primary">
                  Anime Superheroes
                </Link>
              </li>
              <li>
                <Link href="/categories/classic" className="text-muted-foreground hover:text-primary">
                  Classic Comics
                </Link>
              </li>
              <li>
                <Link href="/categories/custom" className="text-muted-foreground hover:text-primary">
                  Custom Fan Art
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-medium text-lg">Help</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-muted-foreground hover:text-primary">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="text-muted-foreground hover:text-primary">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Starry Heroes. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Link href="/terms" className="text-xs text-muted-foreground hover:text-primary">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="text-xs text-muted-foreground hover:text-primary">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
