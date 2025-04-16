import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

interface Review {
  id: string
  product: {
    id: string
    name: string
    image: string
  }
  rating: number
  comment: string
  date: string
}

interface ReviewHistoryProps {
  reviews: Review[]
}

export function ReviewHistory({ reviews }: ReviewHistoryProps) {
  const router = useRouter()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Reviews</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="flex gap-4 p-4 border rounded-lg"
            >
              <img
                src={review.product.image}
                alt={review.product.name}
                className="w-20 h-20 object-cover rounded"
              />
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">{review.product.name}</h3>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>{review.rating}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  {review.comment}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {new Date(review.date).toLocaleDateString()}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() =>
                      router.push(`/products/${review.product.id}`)
                    }
                  >
                    View Product
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
} 