import { ProductGrid } from "@/components/product-grid"
import { ProductFilters } from "@/components/product-filters"

export default function ShopPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold tracking-tight font-comic">Shop All Products</h1>
          <p className="text-muted-foreground">Browse our collection of superhero t-shirts with a Starry Night twist</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="hidden md:block">
            <ProductFilters />
          </div>
          <div className="md:col-span-3">
            <ProductGrid />
          </div>
        </div>
      </div>
    </div>
  )
}
