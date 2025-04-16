import Image from "next/image"
import Link from "next/link"
import { Star, Truck, ShieldCheck, ArrowLeft, Heart, ShoppingCart, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ProductReviews } from "@/components/product-reviews"
import { RelatedProducts } from "@/components/related-products"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

// Mock product data
const product = {
  id: 1,
  name: "Superman Classic Logo T-Shirt",
  price: 29.99,
  rating: 4.5,
  reviewCount: 128,
  description: "Show your love for the Man of Steel with this classic Superman logo t-shirt. Made from 100% premium cotton, this comfortable and durable t-shirt features the iconic Superman shield logo in vibrant colors. Perfect for casual wear or superhero-themed events.",
  features: [
    "Premium 100% combed ringspun cotton",
    "Pre-shrunk fabric",
    "Seamless collar",
    "Double-needle stitched sleeves and bottom hem",
    "Tear-away label",
    "Unisex modern fit",
  ],
  images: [
    "/products/superman-tshirt-1.jpg",
    "/products/superman-tshirt-2.jpg",
    "/products/superman-tshirt-3.jpg",
  ],
  sizes: ["S", "M", "L", "XL", "XXL"],
  colors: ["Red", "Blue", "Black"],
  category: "Marvel Universe",
  inStock: true,
}

const reviews = [
  {
    id: 1,
    user: "Clark Kent",
    rating: 5,
    date: "2024-01-15",
    comment: "Amazing quality! The fabric is super soft and the print is vibrant. Fits perfectly.",
  },
  {
    id: 2,
    user: "Lois Lane",
    rating: 4,
    date: "2024-01-10",
    comment: "Great t-shirt! The material is comfortable and the design is exactly as shown. Would recommend!",
  },
  {
    id: 3,
    user: "Bruce Wayne",
    rating: 5,
    date: "2024-01-05",
    comment: "Even though I'm more of a Batman fan, this Superman t-shirt is top-notch quality. Very satisfied with my purchase.",
  },
]

export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/shop"
        className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-6"
      >
        <ArrowLeft className="mr-1 h-4 w-4" />
        Back to Shop
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <div className="space-y-4">
          <div className="aspect-square relative overflow-hidden rounded-lg border">
            <Image
              src={product.images[0] || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 bg-white/80 hover:bg-white"
            >
              <Heart className="h-5 w-5" />
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {product.images.map((image, index) => (
              <div key={index} className="aspect-square">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} - View ${index + 1}`}
                  fill
                  className="object-cover rounded-lg cursor-pointer hover:ring-2 hover:ring-primary"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="mt-2 flex items-center">
              <div className="flex items-center">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? "fill-primary text-primary"
                          : i < product.rating
                            ? "fill-primary text-primary"
                            : "text-muted-foreground"
                      }`}
                    />
                  ))}
              </div>
              <span className="ml-2 text-sm text-muted-foreground">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>
          </div>

          <div className="text-3xl font-bold">${product.price.toFixed(2)}</div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Size</Label>
              <RadioGroup defaultValue="M" className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <div key={size} className="flex items-center space-x-2">
                    <RadioGroupItem value={size} id={size} />
                    <Label htmlFor={size}>{size}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label>Color</Label>
              <Select defaultValue="Red">
                <SelectTrigger>
                  <SelectValue placeholder="Select a color" />
                </SelectTrigger>
                <SelectContent>
                  {product.colors.map((color) => (
                    <SelectItem key={color} value={color}>
                      {color}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Quantity</Label>
              <Input type="number" min="1" defaultValue="1" className="w-24" />
            </div>

            <div className="flex space-x-4">
              <Button className="flex-1" size="lg">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button variant="outline" size="lg">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="space-y-4 border-t pt-4">
            <div className="flex items-start gap-2">
              <Truck className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div>
                <h4 className="text-sm font-medium">Free Shipping</h4>
                <p className="text-sm text-muted-foreground">On orders over $50</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <ShieldCheck className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div>
                <h4 className="text-sm font-medium">30-Day Returns</h4>
                <p className="text-sm text-muted-foreground">Satisfaction guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Tabs defaultValue="description" className="mt-12">
        <TabsList className="w-full justify-start border-b rounded-none">
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="features">Features</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>
        <TabsContent value="description" className="pt-4">
          <div className="prose max-w-none dark:prose-invert">
            <p>{product.description}</p>
            <p>
              Inspired by Vincent van Gogh's masterpiece, this t-shirt transforms the iconic Starry Night into a
              superhero-themed design. The swirling night sky becomes the backdrop for Spider-Man's silhouette, creating
              a unique fusion of fine art and pop culture.
            </p>
            <p>
              Each shirt is carefully printed using high-quality, eco-friendly inks that won't fade or crack, ensuring
              your Starry Spider T-Shirt remains vibrant wash after wash. The premium cotton fabric offers exceptional
              comfort for all-day wear, whether you're out on a casual day or attending a comic convention.
            </p>
            <p>
              This exclusive design is part of our limited-edition Starry Heroes collection, where classic art meets
              comic book legends. Collect them all and showcase your appreciation for both artistic masterpieces and
              superhero icons.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="features" className="pt-4">
          <ul className="list-disc pl-5 space-y-2">
            {product.features.map((feature, index) => (
              <li key={index} className="text-muted-foreground">
                {feature}
              </li>
            ))}
          </ul>
        </TabsContent>
        <TabsContent value="reviews" className="pt-4">
          <div className="space-y-6">
            {reviews.map((review) => (
              <Card key={review.id}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">{review.user}</h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating
                                  ? "text-yellow-400 fill-current"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {review.date}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="mt-4">{review.comment}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6 font-comic">You Might Also Like</h2>
        <RelatedProducts currentProductId={params.id} />
      </div>
    </div>
  )
}
