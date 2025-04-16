import { Modal } from "@/components/ui/modal"
import { Button } from "@/components/ui/button"
import { ShoppingCart, X } from "lucide-react"
import { useCart } from "@/lib/cart"

interface Product {
  id: string
  name: string
  price: number
  image: string
  category: string
  theme: string
  rating: number
  reviews: number
  sizes: string[]
}

interface ProductComparisonProps {
  isOpen: boolean
  onClose: () => void
  products: Product[]
}

export function ProductComparison({
  isOpen,
  onClose,
  products,
}: ProductComparisonProps) {
  const { addItem } = useCart()

  const handleAddToCart = (product: Product) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: product.sizes[0], // Default to first size
    })
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Compare Products">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="p-4 text-left">Product</th>
              {products.map((product) => (
                <th key={product.id} className="p-4 text-left">
                  <div className="space-y-2">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-32 h-32 object-cover rounded"
                    />
                    <h3 className="font-medium">{product.name}</h3>
                    <p className="font-bold">${product.price}</p>
                    <Button
                      size="sm"
                      onClick={() => handleAddToCart(product)}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-4 font-medium">Category</td>
              {products.map((product) => (
                <td key={product.id} className="p-4">
                  {product.category}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-4 font-medium">Theme</td>
              {products.map((product) => (
                <td key={product.id} className="p-4">
                  {product.theme}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-4 font-medium">Rating</td>
              {products.map((product) => (
                <td key={product.id} className="p-4">
                  {product.rating} ({product.reviews} reviews)
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-4 font-medium">Available Sizes</td>
              {products.map((product) => (
                <td key={product.id} className="p-4">
                  {product.sizes.join(", ")}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </Modal>
  )
} 