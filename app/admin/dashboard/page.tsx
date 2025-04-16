import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUp, ArrowDown, Users, ShoppingCart, DollarSign, Package } from "lucide-react"

const stats = [
  {
    title: "Total Revenue",
    value: "$12,345",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
  },
  {
    title: "Total Orders",
    value: "1,234",
    change: "+8.2%",
    trend: "up",
    icon: ShoppingCart,
  },
  {
    title: "Total Products",
    value: "567",
    change: "+3.1%",
    trend: "up",
    icon: Package,
  },
  {
    title: "Total Customers",
    value: "890",
    change: "-2.4%",
    trend: "down",
    icon: Users,
  },
]

const recentOrders = [
  {
    id: "ORD-001",
    customer: "John Doe",
    date: "2024-01-15",
    amount: "$99.99",
    status: "Delivered",
  },
  {
    id: "ORD-002",
    customer: "Jane Smith",
    date: "2024-01-14",
    amount: "$149.99",
    status: "Processing",
  },
  {
    id: "ORD-003",
    customer: "Bob Johnson",
    date: "2024-01-13",
    amount: "$79.99",
    status: "Shipped",
  },
  {
    id: "ORD-004",
    customer: "Alice Brown",
    date: "2024-01-12",
    amount: "$199.99",
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

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className={`flex items-center text-xs ${
                stat.trend === "up" ? "text-green-500" : "text-red-500"
              }`}>
                {stat.trend === "up" ? (
                  <ArrowUp className="h-3 w-3 mr-1" />
                ) : (
                  <ArrowDown className="h-3 w-3 mr-1" />
                )}
                {stat.change}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Orders */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentOrders.map((order) => (
              <div
                key={order.id}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div>
                  <h3 className="font-medium">{order.id}</h3>
                  <p className="text-sm text-muted-foreground">
                    {order.customer} • {order.date}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-medium">{order.amount}</p>
                  <span className={`text-xs px-2 py-1 rounded ${
                    order.status === "Delivered"
                      ? "bg-green-100 text-green-800"
                      : order.status === "Processing"
                      ? "bg-yellow-100 text-yellow-800"
                      : order.status === "Shipped"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-gray-100 text-gray-800"
                  }`}>
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
