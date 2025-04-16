import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart"
import { useRouter } from "next/navigation"

export function CartSummary() {
  const { total } = useCart()
  const router = useRouter()

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>Free</span>
        </div>
        <div className="flex justify-between font-bold">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
      <Button
        className="w-full"
        onClick={() => router.push("/checkout")}
      >
        Proceed to Checkout
      </Button>
    </div>
  )
} 