import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, ShoppingCart, Star } from "lucide-react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { useEffect, useRef } from "react"

interface ProductCardProps {
  id: string
  name: string
  price: number
  image: string
  category: string
  theme: string
  rating: number
  reviews: number
}

export default function ProductCard({
  id,
  name,
  price,
  image,
  category,
  theme,
  rating,
  reviews,
}: ProductCardProps) {
  const cardRef = useRef(null)

  useEffect(() => {
    gsap.from(cardRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.5,
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 80%",
      },
    })
  }, [])

  return (
    <motion.div
      ref={cardRef}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="overflow-hidden">
        <div className="relative group">
          <img
            src={image}
            alt={name}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-2 right-2 flex space-x-1">
            <Button variant="ghost" size="icon" className="bg-white/80 hover:bg-white">
              <Heart className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="bg-white/80 hover:bg-white">
              <ShoppingCart className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <CardContent className="p-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">{category}</span>
              <span className="text-sm text-muted-foreground">{theme}</span>
            </div>
            <h3 className="font-medium">{name}</h3>
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm">{rating}</span>
              <span className="text-sm text-muted-foreground">({reviews} reviews)</span>
            </div>
            <p className="font-bold">${price}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
} 