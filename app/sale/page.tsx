import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingCart, Clock, Tag } from "lucide-react"

const featuredProducts = [
  {
    id: 1,
    name: "Superman Classic Logo T-Shirt",
    price: 29.99,
    discount: 20,
    image: "/products/superman-tshirt.jpg",
    endDate: "2024-04-30",
    category: "DC Comics",
  },
  {
    id: 2,
    name: "Batman Dark Knight T-Shirt",
    price: 34.99,
    discount: 15,
    image: "/products/batman-tshirt.jpg",
    endDate: "2024-04-30",
    category: "DC Comics",
  },
  {
    id: 3,
    name: "Wonder Woman Logo T-Shirt",
    price: 32.99,
    discount: 25,
    image: "/products/wonder-woman-tshirt.jpg",
    endDate: "2024-04-30",
    category: "DC Comics",
  },
  {
    id: 4,
    name: "Spider-Man Web Design T-Shirt",
    price: 27.99,
    discount: 30,
    image: "/products/spiderman-tshirt.jpg",
    endDate: "2024-04-30",
    category: "Marvel Universe",
  },
]

const specialOffers = [
  {
    id: 1,
    title: "Buy 2 Get 1 Free",
    description: "Get a free t-shirt when you buy any 2 superhero t-shirts",
    code: "B2G1FREE",
    endDate: "2024-04-30",
  },
  {
    id: 2,
    title: "Free Shipping",
    description: "Free shipping on all orders over $50",
    code: "FREESHIP50",
    endDate: "2024-04-30",
  },
  {
    id: 3,
    title: "Flash Sale",
    description: "50% off on all DC Comics t-shirts",
    code: "FLASH50",
    endDate: "2024-04-30",
  },
]

export default function SalesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Superhero Sales</h1>
        <div className="flex items-center space-x-2">
          <Clock className="h-5 w-5 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            Sale ends in 2 days
          </span>
        </div>
      </div>

      {/* Special Offers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {specialOffers.map((offer) => (
          <Card key={offer.id} className="bg-primary/5">
            <CardHeader>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{offer.title}</h3>
                <Badge variant="secondary">{offer.code}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{offer.description}</p>
            </CardContent>
            <CardFooter>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>Ends {offer.endDate}</span>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Featured Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredProducts.map((product) => (
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
                <Badge className="absolute top-2 left-2 bg-red-500">
                  -{product.discount}%
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <h3 className="font-semibold mb-1">{product.name}</h3>
              <div className="flex items-center space-x-2">
                <span className="text-lg font-bold text-primary">
                  ${(product.price * (1 - product.discount / 100)).toFixed(2)}
                </span>
                <span className="text-sm text-muted-foreground line-through">
                  ${product.price}
                </span>
              </div>
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