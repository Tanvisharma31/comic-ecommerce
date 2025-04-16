import Image from "next/image"
import { Progress } from "@/components/ui/progress"

// Mock data for top products
const topProducts = [
  {
    id: 1,
    name: "Starry Spider T-Shirt",
    image: "/placeholder.svg?height=40&width=40",
    sales: 342,
    percentage: 28,
  },
  {
    id: 3,
    name: "Starry Night Superman",
    image: "/placeholder.svg?height=40&width=40",
    sales: 276,
    percentage: 23,
  },
  {
    id: 2,
    name: "Cosmic Batman Tee",
    image: "/placeholder.svg?height=40&width=40",
    sales: 215,
    percentage: 18,
  },
  {
    id: 5,
    name: "Starry Wonder Woman",
    image: "/placeholder.svg?height=40&width=40",
    sales: 189,
    percentage: 16,
  },
  {
    id: 4,
    name: "Galaxy Iron Man",
    image: "/placeholder.svg?height=40&width=40",
    sales: 176,
    percentage: 15,
  },
]

export function AdminTopProducts() {
  return (
    <div className="space-y-4">
      {topProducts.map((product) => (
        <div key={product.id} className="flex items-center gap-4">
          <div className="relative h-10 w-10 overflow-hidden rounded-md">
            <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
          </div>
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">{product.name}</p>
            <div className="flex items-center text-xs text-muted-foreground">
              <span>{product.sales} sales</span>
            </div>
            <Progress value={product.percentage} className="h-2" />
          </div>
          <div className="font-medium">{product.percentage}%</div>
        </div>
      ))}
    </div>
  )
}
