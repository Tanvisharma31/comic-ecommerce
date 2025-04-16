import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingCart, Star } from "lucide-react"

const newProducts = [
  {
    id: 1,
    name: "Black Panther Vibranium T-Shirt",
    price: 32.99,
    image: "/products/black-panther-tshirt.jpg",
    category: "Marvel Universe",
    rating: 4.8,
    reviewCount: 45,
    isNew: true,
  },
  {
    id: 2,
    name: "The Flash Speed Force T-Shirt",
    price: 29.99,
    image: "/products/flash-tshirt.jpg",
    category: "DC Comics",
    rating: 4.6,
    reviewCount: 32,
    isNew: true,
  },
  {
    id: 3,
    name: "Doctor Strange Magic T-Shirt",
    price: 34.99,
    image: "/products/doctor-strange-tshirt.jpg",
    category: "Marvel Universe",
    rating: 4.9,
    reviewCount: 28,
    isNew: true,
  },
  {
    id: 4,
    name: "Green Lantern Corps T-Shirt",
    price: 31.99,
    image: "/products/green-lantern-tshirt.jpg",
    category: "DC Comics",
    rating: 4.7,
    reviewCount: 19,
    isNew: true,
  },
  {
    id: 5,
    name: "Thor Mjolnir T-Shirt",
    price: 33.99,
    image: "/products/thor-tshirt.jpg",
    category: "Marvel Universe",
    rating: 4.8,
    reviewCount: 42,
    isNew: true,
  },
  {
    id: 6,
    name: "Aquaman Trident T-Shirt",
    price: 30.99,
    image: "/products/aquaman-tshirt.jpg",
    category: "DC Comics",
    rating: 4.5,
    reviewCount: 23,
    isNew: true,
  },
]

export default function NewArrivalsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">New Arrivals</h1>
        <div className="flex items-center space-x-4">
          <Button variant="outline">View All</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {newProducts.map((product) => (
          <Card key={product.id} className="group">
            <CardHeader className="p-4">
              <div className="relative aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-lg"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                >
                  <Heart className="h-5 w-5" />
                </Button>
                {product.isNew && (
                  <Badge className="absolute top-2 left-2 bg-blue-500">
                    New
                  </Badge>
                )}
              </div>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <h3 className="font-semibold mb-1">{product.name}</h3>
              <div className="flex items-center space-x-2 mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  ({product.reviewCount})
                </span>
              </div>
              <p className="text-lg font-bold text-primary">${product.price}</p>
              <p className="text-sm text-muted-foreground">{product.category}</p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button className="w-full">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
} 