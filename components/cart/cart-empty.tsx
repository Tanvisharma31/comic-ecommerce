import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import { useRouter } from "next/navigation"

export function CartEmpty() {
  const router = useRouter()

  return (
    <div className="flex flex-col items-center justify-center py-12">
      <ShoppingCart className="h-12 w-12 text-muted-foreground mb-4" />
      <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
      <p className="text-muted-foreground mb-6">
        Looks like you haven't added any items to your cart yet.
      </p>
      <Button onClick={() => router.push("/shop")}>
        Continue Shopping
      </Button>
    </div>
  )
} 