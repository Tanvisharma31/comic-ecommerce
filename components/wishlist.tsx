import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, ShoppingCart, Trash2 } from "lucide-react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

interface WishlistItem {
  id: string
  name: string
  price: number
  image: string
  category: string
  theme: string
}

const wishlistItems: WishlistItem[] = [
  {
    id: "1",
    name: "Superman Starry Night T-Shirt",
    price: 29.99,
    image: "/products/superman-starry.jpg",
    category: "Graphic Printed",
    theme: "DC Comics",
  },
  {
    id: "2",
    name: "Batman Gotham Nights T-Shirt",
    price: 34.99,
    image: "/products/batman-gotham.jpg",
    category: "Oversized",
    theme: "DC Comics",
  },
  {
    id: "3",
    name: "Spider-Man Web Design T-Shirt",
    price: 32.99,
    image: "/products/spiderman-web.jpg",
    category: "Graphic Printed",
    theme: "Marvel Universe",
  },
]

export default function Wishlist() {
  const wishlistRef = useRef(null)

  useEffect(() => {
    gsap.from(wishlistRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: wishlistRef.current,
        start: "top center",
      },
    })
  }, [])

  return (
    <motion.div
      ref={wishlistRef}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Your Wishlist</CardTitle>
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {wishlistItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center space-x-4 p-4 border rounded-lg"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.category} • {item.theme}
                  </p>
                  <p className="font-bold">${item.price}</p>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="icon">
                    <ShoppingCart className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
} 