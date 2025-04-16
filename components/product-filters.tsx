"use client"

import { useState, useRef, useEffect } from "react"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Shirt } from "lucide-react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function ProductFilters() {
  const [priceRange, setPriceRange] = useState([20, 50])
  const filterRef = useRef(null)

  const categories = [
    { id: "oversized", name: "Oversized", icon: Shirt },
    { id: "acid-wash", name: "Acid Wash", icon: Shirt },
    { id: "graphic", name: "Graphic Printed", icon: Shirt },
    { id: "solid", name: "Solid Color", icon: Shirt },
    { id: "polo", name: "Polo T-Shirts", icon: Shirt },
  ]

  const themes = [
    { id: "marvel", name: "Marvel Universe" },
    { id: "dc", name: "DC Comics" },
    { id: "anime", name: "Anime Superheroes" },
    { id: "classic", name: "Classic Comics" },
    { id: "scifi", name: "Sci-Fi & Fantasy" },
    { id: "gaming", name: "Video Game Characters" },
    { id: "fanart", name: "Custom Fan Art" },
  ]

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"]

  useEffect(() => {
    gsap.from(filterRef.current, {
      opacity: 0,
      x: -50,
      duration: 1,
      scrollTrigger: {
        trigger: filterRef.current,
        start: "top center",
      },
    })
  }, [])

  return (
    <motion.div
      ref={filterRef}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="sticky top-4">
        <CardContent className="pt-6">
          <div className="space-y-6">
            {/* Price Range */}
            <div className="space-y-4">
              <h3 className="font-medium">Price Range</h3>
              <Slider
                defaultValue={[0, 100]}
                max={100}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>$0</span>
                <span>$100</span>
              </div>
            </div>

            {/* Categories */}
            <div className="space-y-4">
              <h3 className="font-medium">Categories</h3>
              <div className="grid grid-cols-2 gap-4">
                {categories.map((category) => {
                  const Icon = category.icon
                  return (
                    <Button
                      key={category.id}
                      variant="outline"
                      className="flex flex-col items-center justify-center h-24"
                    >
                      <Icon className="h-6 w-6 mb-2" />
                      <span className="text-sm">{category.name}</span>
                    </Button>
                  )
                })}
              </div>
            </div>

            {/* Themes */}
            <div className="space-y-4">
              <h3 className="font-medium">Themes</h3>
              <div className="space-y-2">
                {themes.map((theme) => (
                  <div key={theme.id} className="flex items-center space-x-2">
                    <Checkbox id={theme.id} />
                    <Label htmlFor={theme.id}>{theme.name}</Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="space-y-4">
              <h3 className="font-medium">Sizes</h3>
              <div className="flex flex-wrap gap-2">
                {sizes.map((size) => (
                  <Button
                    key={size}
                    variant="outline"
                    size="sm"
                    className="w-10 h-10"
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            {/* Apply Filters */}
            <Button className="w-full">Apply Filters</Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
