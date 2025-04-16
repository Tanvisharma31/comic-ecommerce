import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Mock data for related products
const relatedProducts = [
  {
    id: 2,
    name: "Cosmic Batman Tee",
    price: 34.99,
    rating: 4.8,
    image: "/placeholder.svg?height=400&width=300",
    category: "DC Comics",
  },
  {
    id: 3,
    name: "Starry Night Superman",
    price: 32.99,
    rating: 4.7,
    image: "/placeholder.svg?height=400&width=300",
    category: "DC Comics",
  },
  {
    id: 4,
    name: "Galaxy Iron Man",
    price: 29.99,
    rating: 4.6,
    image: "/placeholder.svg?height=400&width=300",
    category: "Marvel Universe",
  },
  {
    id: 5,
    name: "Starry Wonder Woman",
    price: 31.99,
    rating: 4.9,
    image: "/placeholder.svg?height=400&width=300",
    category: "DC Comics",
  },
]

export function RelatedProducts({ currentProductId }: { currentProductId: string }) {
  // Filter out the current product from related products
  const filteredProducts = relatedProducts.filter((product) => product.id.toString() !== currentProductId)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {filteredProducts.map((product) => (
        <Card key={product.id} className="overflow-hidden group hover:shadow-xl transition-shadow duration-300">
          <Link href={`/products/${product.id}`}>
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
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
