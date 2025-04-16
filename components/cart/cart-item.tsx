import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Trash2 } from "lucide-react"
import { useCart } from "@/lib/cart"

interface CartItemProps {
  item: {
    id: string
    name: string
    price: number
    image: string
    quantity: number
    size: string
  }
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart()

  return (
    <div className="flex items-center gap-4 p-4 border rounded-lg">
      <img
        src={item.image}
        alt={item.name}
        className="w-20 h-20 object-cover rounded"
      />
      <div className="flex-1">
        <h3 className="font-medium">{item.name}</h3>
        <p className="text-sm text-muted-foreground">Size: {item.size}</p>
        <p className="font-bold">${item.price}</p>
      </div>
      <div className="flex items-center gap-2">
        <Input
          type="number"
          min="1"
          value={item.quantity}
          onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
          className="w-20"
        />
        <Button
          variant="ghost"
          size="icon"
          onClick={() => removeItem(item.id)}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
} 