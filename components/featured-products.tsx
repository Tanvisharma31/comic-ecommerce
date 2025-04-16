import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

// Mock data for featured products
const featuredProducts = [
  {
    id: 1,
    name: "Starry Spider T-Shirt",
    price: 29.99,
    rating: 4.5,
    image: "/placeholder.svg?height=400&width=300",
    category: "Marvel Universe",
  },
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
]

export function FeaturedProducts() {
  return (
    <section className="py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-comic">Featured Products</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover our most popular superhero designs with a starry night twist
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {featuredProducts.map((product) => (
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
        <div className="flex justify-center mt-10">
          <Button asChild size="lg" className="font-comic">
            <Link href="/shop">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
