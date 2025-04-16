import { Modal } from "@/components/ui/modal"
import { ImageGallery } from "./image-gallery"
import { SizeSelector } from "./size-selector"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Heart } from "lucide-react"
import { useCart } from "@/lib/cart"
import { useState } from "react"

interface QuickViewProps {
  isOpen: boolean
  onClose: () => void
  product: {
    id: string
    name: string
    price: number
    images: string[]
    sizes: string[]
  }
}

export function QuickView({ isOpen, onClose, product }: QuickViewProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const { addItem } = useCart()

  const handleAddToCart = () => {
    if (!selectedSize) return
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size: selectedSize,
    })
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={product.name}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ImageGallery images={product.images} />
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">{product.name}</h2>
            <p className="text-2xl font-bold">${product.price}</p>
          </div>
          <SizeSelector
            sizes={product.sizes}
            selectedSize={selectedSize}
            onSelectSize={setSelectedSize}
          />
          <div className="flex gap-2">
            <Button
              className="flex-1"
              onClick={handleAddToCart}
              disabled={!selectedSize}
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
            <Button variant="outline" size="icon">
              <Heart className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  )
} 