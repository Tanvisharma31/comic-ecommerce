"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Trash2, ArrowLeft, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

// Mock cart data
const initialCartItems = [
  {
    id: 1,
    name: "Starry Spider T-Shirt",
    price: 29.99,
    image: "/placeholder.svg?height=200&width=200",
    size: "M",
    color: "Blue",
    quantity: 1,
  },
  {
    id: 3,
    name: "Starry Night Superman",
    price: 32.99,
    image: "/placeholder.svg?height=200&width=200",
    size: "L",
    color: "Black",
    quantity: 2,
  },
]

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems)

  const updateQuantity = (id: number, quantity: number) => {
    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity } : item)))
  }

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

  const shipping = 4.99
  const total = subtotal + shipping

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 font-comic">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <ShoppingBag className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
          <h2 className="text-xl font-medium mb-2">Your cart is empty</h2>
          <p className="text-muted-foreground mb-6">Looks like you haven't added any items to your cart yet.</p>
          <Button asChild size="lg" className="font-comic">
            <Link href="/shop">Continue Shopping</Link>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="rounded-lg border shadow-sm">
              <div className="p-6">
                <div className="hidden md:grid grid-cols-12 gap-4 pb-4 text-sm font-medium text-muted-foreground">
                  <div className="col-span-6">Product</div>
                  <div className="col-span-2 text-center">Price</div>
                  <div className="col-span-2 text-center">Quantity</div>
                  <div className="col-span-2 text-right">Total</div>
                </div>
                <Separator className="hidden md:block" />

                {cartItems.map((item) => (
                  <div key={item.id} className="py-6">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                      <div className="col-span-6 flex items-center gap-4">
                        <div className="relative aspect-square h-20 w-20 min-w-[5rem] overflow-hidden rounded-md border">
                          <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                        </div>
                        <div>
                          <h3 className="font-medium">
                            <Link href={`/products/${item.id}`} className="hover:underline">
                              {item.name}
                            </Link>
                          </h3>
                          <div className="mt-1 text-sm text-muted-foreground">
                            <span>Size: {item.size}</span>
                            <span className="mx-2">•</span>
                            <span>Color: {item.color}</span>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="mt-2 h-8 px-2 text-xs md:hidden"
                            onClick={() => removeItem(item.id)}
                          >
                            <Trash2 className="mr-1 h-4 w-4" />
                            Remove
                          </Button>
                        </div>
                      </div>

                      <div className="col-span-2 flex items-center justify-center">
                        <span className="text-center">${item.price.toFixed(2)}</span>
                      </div>

                      <div className="col-span-2 flex items-center justify-center">
                        <Select
                          value={item.quantity.toString()}
                          onValueChange={(value) => updateQuantity(item.id, Number.parseInt(value))}
                        >
                          <SelectTrigger className="w-16">
                            <SelectValue placeholder={item.quantity} />
                          </SelectTrigger>
                          <SelectContent>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                              <SelectItem key={num} value={num.toString()}>
                                {num}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="col-span-2 flex items-center justify-between">
                        <span className="font-medium md:hidden">Total:</span>
                        <span className="font-medium text-right">${(item.price * item.quantity).toFixed(2)}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 hidden md:flex"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Remove</span>
                        </Button>
                      </div>
                    </div>
                    {cartItems.indexOf(item) !== cartItems.length - 1 && <Separator className="mt-6" />}
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between border-t p-6">
                <Link
                  href="/shop"
                  className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary"
                >
                  <ArrowLeft className="mr-1 h-4 w-4" />
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="rounded-lg border shadow-sm">
              <div className="p-6">
                <h2 className="text-lg font-medium">Order Summary</h2>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Shipping</span>
                    <span className="font-medium">${shipping.toFixed(2)}</span>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between font-medium">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                <div className="mt-6 space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="coupon" className="text-sm font-medium">
                      Discount Code
                    </label>
                    <div className="flex space-x-2">
                      <Input id="coupon" placeholder="Enter code" className="flex-1" />
                      <Button variant="outline">Apply</Button>
                    </div>
                  </div>
                  <Button className="w-full font-comic" size="lg">
                    Checkout
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
