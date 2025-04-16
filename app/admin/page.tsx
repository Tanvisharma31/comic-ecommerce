import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, ArrowDownRight, Users, Package, ShoppingCart, DollarSign } from "lucide-react"

const stats = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    change: "+20.1%",
    icon: DollarSign,
    trend: "up",
  },
  {
    title: "Total Orders",
    value: "2,345",
    change: "+12.3%",
    icon: ShoppingCart,
    trend: "up",
  },
  {
    title: "Total Products",
    value: "1,234",
    change: "+5.2%",
    icon: Package,
    trend: "up",
  },
  {
    title: "Total Users",
    value: "5,678",
    change: "-2.1%",
    icon: Users,
    trend: "down",
  },
]

const recentOrders = [
  {
    id: "ORD001",
    customer: "John Doe",
    date: "2024-03-15",
    amount: "$129.99",
    status: "Completed",
  },
  {
    id: "ORD002",
    customer: "Jane Smith",
    date: "2024-03-14",
    amount: "$89.99",
    status: "Processing",
  },
  {
    id: "ORD003",
    customer: "Bob Johnson",
    date: "2024-03-14",
    amount: "$199.99",
    status: "Shipped",
  },
  {
    id: "ORD004",
    customer: "Alice Brown",
    date: "2024-03-13",
    amount: "$149.99",
    status: "Pending",
  },
]

export default function AdminDashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Button>Export Report</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className={`flex items-center text-xs ${stat.trend === "up" ? "text-green-500" : "text-red-500"}`}>
                {stat.trend === "up" ? (
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                ) : (
                  <ArrowDownRight className="h-4 w-4 mr-1" />
                )}
                {stat.change}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">{order.id}</div>
                    <div className="text-sm text-muted-foreground">{order.customer}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">{order.amount}</div>
                    <div className="text-sm text-muted-foreground">{order.date}</div>
                  </div>
                  <div>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      order.status === "Completed" ? "bg-green-100 text-green-800" :
                      order.status === "Processing" ? "bg-blue-100 text-blue-800" :
                      order.status === "Shipped" ? "bg-purple-100 text-purple-800" :
                      "bg-yellow-100 text-yellow-800"
                    }`}>
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <Button className="w-full">
                <Package className="mr-2 h-4 w-4" />
                Add New Product
              </Button>
              <Button variant="outline" className="w-full">
                <Users className="mr-2 h-4 w-4" />
                View All Users
              </Button>
              <Button variant="outline" className="w-full">
                <ShoppingCart className="mr-2 h-4 w-4" />
                View All Orders
              </Button>
              <Button variant="outline" className="w-full">
                <DollarSign className="mr-2 h-4 w-4" />
                Generate Report
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 