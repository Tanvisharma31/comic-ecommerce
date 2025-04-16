import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden starry-bg rounded-lg py-12 md:py-16 lg:py-20 mb-12">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              New Collection
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-comic text-white">
              <span className="text-primary hero-glow">Starry Night</span> Meets <br />
              <span className="text-comic-yellow">Superhero</span> Legends
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover our exclusive collection of t-shirts where Van Gogh's masterpiece meets your favorite comic book
              heroes.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="font-comic comic-border bg-primary hover:bg-primary/90">
                <Link href="/shop">Shop Collection</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-comic comic-border">
                <Link href="/categories">Explore Categories</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] float-animation">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Superhero T-shirt"
                width={500}
                height={500}
                className="object-contain hero-glow"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
