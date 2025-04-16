import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Heart, ShoppingCart } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Superman Classic Logo T-Shirt",
    price: 29.99,
    image: "/products/superman-tshirt.jpg",
    category: "DC Comics",
    rating: 4.5,
    reviewCount: 128,
  },
  {
    id: 2,
    name: "Batman Dark Knight T-Shirt",
    price: 34.99,
    image: "/products/batman-tshirt.jpg",
    category: "DC Comics",
    rating: 4.8,
    reviewCount: 95,
  },
  {
    id: 3,
    name: "Wonder Woman Logo T-Shirt",
    price: 32.99,
    image: "/products/wonder-woman-tshirt.jpg",
    category: "DC Comics",
    rating: 4.6,
    reviewCount: 76,
  },
  {
    id: 4,
    name: "Spider-Man Web Design T-Shirt",
    price: 27.99,
    image: "/products/spiderman-tshirt.jpg",
    category: "Marvel Universe",
    rating: 4.7,
    reviewCount: 112,
  },
  {
    id: 5,
    name: "Iron Man Arc Reactor T-Shirt",
    price: 31.99,
    image: "/products/ironman-tshirt.jpg",
    category: "Marvel Universe",
    rating: 4.9,
    reviewCount: 89,
  },
  {
    id: 6,
    name: "Captain America Shield T-Shirt",
    price: 29.99,
    image: "/products/captain-america-tshirt.jpg",
    category: "Marvel Universe",
    rating: 4.4,
    reviewCount: 67,
  },
]

const categories = [
  "All Categories",
  "DC Comics",
  "Marvel Universe",
  "Anime Superheroes",
  "Classic Comics",
  "Sci-Fi & Fantasy",
  "Video Game Characters",
]

const priceRanges = [
  { label: "Under $25", value: "0-25" },
  { label: "$25 - $50", value: "25-50" },
  { label: "$50 - $100", value: "50-100" },
  { label: "Over $100", value: "100-1000" },
]

export default function SearchPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters */}
        <div className="lg:col-span-1 space-y-6">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Categories</h2>
            <RadioGroup defaultValue="all" className="space-y-2">
              {categories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <RadioGroupItem value={category.toLowerCase()} id={category} />
                  <Label htmlFor={category}>{category}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Price Range</h2>
            <RadioGroup defaultValue="0-1000" className="space-y-2">
              {priceRanges.map((range) => (
                <div key={range.value} className="flex items-center space-x-2">
                  <RadioGroupItem value={range.value} id={range.value} />
                  <Label htmlFor={range.value}>{range.label}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Sort By</h2>
            <Select defaultValue="popular">
              <SelectTrigger>
                <SelectValue placeholder="Select sort option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="lg:col-span-3">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Search Results</h1>
            <p className="text-muted-foreground">Showing {products.length} products</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
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
      </div>
    </div>
  )
} 