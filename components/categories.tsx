import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

// Mock data for categories
const categories = [
  {
    id: 1,
    name: "Marvel Universe",
    image: "/placeholder.svg?height=300&width=300",
    count: 42,
  },
  {
    id: 2,
    name: "DC Comics",
    image: "/placeholder.svg?height=300&width=300",
    count: 38,
  },
  {
    id: 3,
    name: "Anime Superheroes",
    image: "/placeholder.svg?height=300&width=300",
    count: 25,
  },
  {
    id: 4,
    name: "Classic Comics",
    image: "/placeholder.svg?height=300&width=300",
    count: 30,
  },
]

export function Categories() {
  return (
    <section className="py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-comic">Shop by Universe</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore our collections by your favorite comic universe
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {categories.map((category) => (
            <Link key={category.id} href={`/categories/${category.id}`}>
              <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow duration-300">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-6">
                    <CardContent className="p-0">
                      <h3 className="font-comic text-xl md:text-2xl font-bold">{category.name}</h3>
                      <p className="text-sm text-muted-foreground">{category.count} products</p>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
