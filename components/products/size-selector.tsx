import { Button } from "@/components/ui/button"

interface SizeSelectorProps {
  sizes: string[]
  selectedSize: string | null
  onSelectSize: (size: string) => void
}

export function SizeSelector({
  sizes,
  selectedSize,
  onSelectSize,
}: SizeSelectorProps) {
  return (
    <div className="space-y-2">
      <h3 className="font-medium">Size</h3>
      <div className="flex flex-wrap gap-2">
        {sizes.map((size) => (
          <Button
            key={size}
            variant={selectedSize === size ? "default" : "outline"}
            className="w-12 h-12"
            onClick={() => onSelectSize(size)}
          >
            {size}
          </Button>
        ))}
      </div>
    </div>
  )
} 