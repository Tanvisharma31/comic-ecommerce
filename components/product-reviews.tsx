import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, StarHalf, StarOff } from "lucide-react"

interface Review {
  id: string
  user: {
    name: string
    avatar: string
  }
  rating: number
  date: string
  comment: string
  verified: boolean
}

const reviews: Review[] = [
  {
    id: "1",
    user: {
      name: "John Doe",
      avatar: "/avatars/superman.png",
    },
    rating: 5,
    date: "2024-03-15",
    comment: "Amazing quality and design! The Superman print is vibrant and the fabric is super comfortable.",
    verified: true,
  },
  {
    id: "2",
    user: {
      name: "Jane Smith",
      avatar: "/avatars/wonder-woman.png",
    },
    rating: 4,
    date: "2024-03-14",
    comment: "Great fit and material. The colors are exactly as shown in the pictures.",
    verified: true,
  },
  {
    id: "3",
    user: {
      name: "Bob Johnson",
      avatar: "/avatars/batman.png",
    },
    rating: 5,
    date: "2024-03-13",
    comment: "Perfect for any Batman fan! The print quality is excellent and it's very comfortable to wear.",
    verified: true,
  },
]

const RatingStars = ({ rating }: { rating: number }) => {
  const stars = []
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(<Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)
    } else if (i === fullStars && hasHalfStar) {
      stars.push(<StarHalf key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)
    } else {
      stars.push(<StarOff key={i} className="h-4 w-4 text-gray-300" />)
    }
  }

  return <div className="flex">{stars}</div>
}

export default function ProductReviews() {
  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length
  const totalReviews = reviews.length

  return (
    <Card>
      <CardHeader>
        <CardTitle>Customer Reviews</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {/* Rating Summary */}
          <div className="flex items-center space-x-4">
            <div className="text-4xl font-bold">{averageRating.toFixed(1)}</div>
            <div className="space-y-1">
              <RatingStars rating={averageRating} />
              <div className="text-sm text-muted-foreground">
                Based on {totalReviews} reviews
              </div>
            </div>
          </div>

          {/* Write Review Button */}
          <Button className="w-full">Write a Review</Button>

          {/* Reviews List */}
          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={review.user.avatar} />
                    <AvatarFallback>{review.user.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{review.user.name}</div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <RatingStars rating={review.rating} />
                      <span>•</span>
                      <span>{review.date}</span>
                      {review.verified && (
                        <>
                          <span>•</span>
                          <span className="text-green-600">Verified Purchase</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <p className="text-sm">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
