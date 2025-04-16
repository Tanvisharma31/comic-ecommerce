import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Heart, ShoppingCart } from "lucide-react"

const wishlistItems = [
  {
    id: 1,
    name: "Superman Classic Logo T-Shirt",
    price: 29.99,
    image: "/products/superman-tshirt.jpg",
    size: "M",
    inStock: true,
  },
  {
    id: 2,
    name: "Batman Dark Knight T-Shirt",
    price: 34.99,
    image: "/products/batman-tshirt.jpg",
    size: "L",
    inStock: true,
  },
  {
    id: 3,
    name: "Wonder Woman Logo T-Shirt",
    price: 32.99,
    image: "/products/wonder-woman-tshirt.jpg",
    size: "S",
    inStock: false,
  },
  {
    id: 4,
    name: "Spider-Man Web Design T-Shirt",
    price: 27.99,
    image: "/products/spiderman-tshirt.jpg",
    size: "XL",
    inStock: true,
  },
]

export default function WishlistPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Wishlist</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {wishlistItems.map((item) => (
          <Card key={item.id} className="group">
            <CardHeader className="p-4">
              <div className="relative aspect-square">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover rounded-lg"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                >
                  <Heart className="h-5 w-5 text-red-500" fill="currentColor" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <h3 className="font-semibold mb-1">{item.name}</h3>
              <p className="text-lg font-bold text-primary">${item.price}</p>
              <p className="text-sm text-muted-foreground">Size: {item.size}</p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button
                className="w-full"
                disabled={!item.inStock}
              >
                {item.inStock ? (
                  <>
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                  </>
                ) : (
                  "Out of Stock"
                )}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
} 