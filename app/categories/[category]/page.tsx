import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Heart, ShoppingCart } from "lucide-react"

const products = {
  "dc-comics": [
    {
      id: 1,
      name: "Superman Classic Logo T-Shirt",
      price: 29.99,
      image: "/products/superman-tshirt.jpg",
      rating: 4.5,
      reviewCount: 128,
    },
    {
      id: 2,
      name: "Batman Dark Knight T-Shirt",
      price: 34.99,
      image: "/products/batman-tshirt.jpg",
      rating: 4.8,
      reviewCount: 95,
    },
    {
      id: 3,
      name: "Wonder Woman Logo T-Shirt",
      price: 32.99,
      image: "/products/wonder-woman-tshirt.jpg",
      rating: 4.6,
      reviewCount: 76,
    },
  ],
  "marvel-universe": [
    {
      id: 4,
      name: "Spider-Man Web Design T-Shirt",
      price: 27.99,
      image: "/products/spiderman-tshirt.jpg",
      rating: 4.7,
      reviewCount: 112,
    },
    {
      id: 5,
      name: "Iron Man Arc Reactor T-Shirt",
      price: 31.99,
      image: "/products/ironman-tshirt.jpg",
      rating: 4.9,
      reviewCount: 89,
    },
    {
      id: 6,
      name: "Captain America Shield T-Shirt",
      price: 29.99,
      image: "/products/captain-america-tshirt.jpg",
      rating: 4.4,
      reviewCount: 67,
    },
  ],
  "anime-superheroes": [
    {
      id: 7,
      name: "Dragon Ball Z Goku T-Shirt",
      price: 28.99,
      image: "/products/goku-tshirt.jpg",
      rating: 4.8,
      reviewCount: 92,
    },
    {
      id: 8,
      name: "Naruto Uzumaki T-Shirt",
      price: 26.99,
      image: "/products/naruto-tshirt.jpg",
      rating: 4.6,
      reviewCount: 78,
    },
    {
      id: 9,
      name: "One Piece Luffy T-Shirt",
      price: 27.99,
      image: "/products/luffy-tshirt.jpg",
      rating: 4.7,
      reviewCount: 85,
    },
  ],
}

const categoryNames = {
  "dc-comics": "DC Comics",
  "marvel-universe": "Marvel Universe",
  "anime-superheroes": "Anime Superheroes",
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const categoryProducts = products[params.category as keyof typeof products] || []
  const categoryName = categoryNames[params.category as keyof typeof categoryNames] || "Category"

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">{categoryName} Collection</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryProducts.map((product) => (
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
              </div>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <h3 className="font-semibold mb-1">{product.name}</h3>
              <p className="text-lg font-bold text-primary">${product.price}</p>
              <div className="flex items-center space-x-2 mt-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  ({product.reviewCount} reviews)
                </span>
              </div>
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