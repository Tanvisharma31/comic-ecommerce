import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Newsletter() {
  return (
    <section className="starry-bg rounded-lg py-12 md:py-16 lg:py-20 my-12 relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 max-w-[800px]">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-comic text-white">
              Join the <span className="text-primary hero-glow">Superhero</span> Community
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Subscribe to our newsletter for exclusive offers, new releases, and superhero content
            </p>
          </div>
          <div className="w-full max-w-md space-y-2">
            <form className="flex flex-col sm:flex-row gap-2">
              <Input
                className="flex-1 bg-background/80 backdrop-blur"
                placeholder="Enter your email"
                type="email"
                required
              />
              <Button type="submit" className="font-comic comic-border">
                Subscribe
              </Button>
            </form>
            <p className="text-xs text-muted-foreground">By subscribing, you agree to our terms and privacy policy.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
