import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const superheroAvatars = [
  { id: 1, name: "Superman", image: "/avatars/superman.png" },
  { id: 2, name: "Batman", image: "/avatars/batman.png" },
  { id: 3, name: "Wonder Woman", image: "/avatars/wonder-woman.png" },
  { id: 4, name: "Spider-Man", image: "/avatars/spiderman.png" },
  { id: 5, name: "Iron Man", image: "/avatars/ironman.png" },
]

const addresses = [
  {
    id: 1,
    name: "Home",
    street: "123 Comic Street",
    city: "Gotham",
    state: "NY",
    zip: "10001",
    isDefault: true,
  },
  {
    id: 2,
    name: "Work",
    street: "456 Hero Avenue",
    city: "Metropolis",
    state: "NY",
    zip: "10002",
    isDefault: false,
  },
]

export default function ProfilePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Profile</h1>
      
      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="addresses">Addresses</TabsTrigger>
          <TabsTrigger value="orders">Orders</TabsTrigger>
        </TabsList>
        
        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-4">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/avatars/superman.png" />
                  <AvatarFallback>SU</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-semibold">Choose Your Superhero Avatar</h3>
                  <div className="flex space-x-2 mt-2">
                    {superheroAvatars.map((avatar) => (
                      <Avatar key={avatar.id} className="h-10 w-10 cursor-pointer hover:ring-2 hover:ring-primary">
                        <AvatarImage src={avatar.image} />
                        <AvatarFallback>{avatar.name[0]}</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" defaultValue="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="john@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" defaultValue="+1 234 567 8900" />
                </div>
              </div>
              
              <Button>Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="addresses">
          <Card>
            <CardHeader>
              <CardTitle>Shipping Addresses</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {addresses.map((address) => (
                  <Card key={address.id} className={address.isDefault ? "border-primary" : ""}>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold">{address.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {address.street}<br />
                            {address.city}, {address.state} {address.zip}
                          </p>
                        </div>
                        {address.isDefault && (
                          <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded">
                            Default
                          </span>
                        )}
                      </div>
                      <div className="flex space-x-2 mt-4">
                        <Button variant="outline" size="sm">Edit</Button>
                        <Button variant="outline" size="sm">Delete</Button>
                        {!address.isDefault && (
                          <Button variant="outline" size="sm">Set as Default</Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <Button>Add New Address</Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="orders">
          <Card>
            <CardHeader>
              <CardTitle>Order History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Sample order items */}
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">Order #12345</h3>
                      <p className="text-sm text-muted-foreground">Placed on Jan 1, 2024</p>
                    </div>
                    <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                      Delivered
                    </span>
                  </div>
                  <div className="mt-4 flex items-center space-x-4">
                    <img
                      src="/products/superman-tshirt.jpg"
                      alt="Superman T-Shirt"
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <h4 className="font-medium">Superman Classic Logo T-Shirt</h4>
                      <p className="text-sm text-muted-foreground">Size: M, Qty: 1</p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <p className="font-semibold">$29.99</p>
                    <Button variant="outline" size="sm">View Details</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
} 