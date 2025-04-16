import Image from "next/image"
import Link from "next/link"
import { Star, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

// Mock data for products
const products = [
  {
    id: 1,
    name: "Starry Spider T-Shirt",
    price: 29.99,
    rating: 4.5,
    image: "/placeholder.svg?height=400&width=300",
    category: "Marvel Universe",
    isNew: true,
  },
  {
    id: 2,
    name: "Cosmic Batman Tee",
    price: 34.99,
    rating: 4.8,
    image: "/placeholder.svg?height=400&width=300",
    category: "DC Comics",
    isNew: false,
  },
  {
    id: 3,
    name: "Starry Night Superman",
    price: 32.99,
    rating: 4.7,
    image: "/placeholder.svg?height=400&width=300",
    category: "DC Comics",
    isNew: true,
  },
  {
    id: 4,
    name: "Galaxy Iron Man",
    price: 29.99,
    rating: 4.6,
    image: "/placeholder.svg?height=400&width=300",
    category: "Marvel Universe",
    isNew: false,
  },
  {
    id: 5,
    name: "Starry Wonder Woman",
    price: 31.99,
    rating: 4.9,
    image: "/placeholder.svg?height=400&width=300",
    category: "DC Comics",
    isNew: false,
  },
  {
    id: 6,
    name: "Cosmic Captain America",
    price: 28.99,
    rating: 4.4,
    image: "/placeholder.svg?height=400&width=300",
    category: "Marvel Universe",
    isNew: true,
  },
  {
    id: 7,
    name: "Night Sky Flash",
    price: 27.99,
    rating: 4.3,
    image: "/placeholder.svg?height=400&width=300",
    category: "DC Comics",
    isNew: false,
  },
  {
    id: 8,
    name: "Starry Black Panther",
    price: 33.99,
    rating: 4.7,
    image: "/placeholder.svg?height=400&width=300",
    category: "Marvel Universe",
    isNew: false,
  },
  {
    id: 9,
    name: "Cosmic Hulk Tee",
    price: 30.99,
    rating: 4.5,
    image: "/placeholder.svg?height=400&width=300",
    category: "Marvel Universe",
    isNew: false,
  },
]

export function ProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden group hover:shadow-xl transition-shadow duration-300">
          <Link href={`/products/${product.id}`}>
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {product.isNew && (
                <div className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-md">
                  NEW
                </div>
              )}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm hover:bg-background/90"
              >
                <Heart className="h-5 w-5" />
                <span className="sr-only">Add to wishlist</span>
              </Button>
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                <Button className="w-full font-comic">Quick View</Button>
              </div>
            </div>
            <CardContent className="p-4">
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">{product.category}</div>
                <h3 className="font-medium text-lg line-clamp-1">{product.name}</h3>
                <div className="flex items-center gap-0.5">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? "fill-primary text-primary"
                            : i < product.rating
                              ? "fill-primary text-primary"
                              : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  <span className="text-xs text-muted-foreground ml-1">({product.rating})</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex items-center justify-between">
              <div className="font-bold">${product.price.toFixed(2)}</div>
              <Button size="sm" variant="ghost">
                Add to cart
              </Button>
            </CardFooter>
          </Link>
        </Card>
      ))}
    </div>
  )
}
