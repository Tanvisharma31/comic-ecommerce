import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

// Mock data for recent orders
const recentOrders = [
  {
    id: "ORD-001",
    customer: {
      name: "John Smith",
      email: "john.smith@example.com",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "JS",
    },
    status: "completed",
    date: "2023-06-20",
    total: 89.99,
  },
  {
    id: "ORD-002",
    customer: {
      name: "Sarah Johnson",
      email: "sarah.j@example.com",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "SJ",
    },
    status: "processing",
    date: "2023-06-19",
    total: 64.99,
  },
  {
    id: "ORD-003",
    customer: {
      name: "Michael Brown",
      email: "m.brown@example.com",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "MB",
    },
    status: "completed",
    date: "2023-06-18",
    total: 129.99,
  },
  {
    id: "ORD-004",
    customer: {
      name: "Emily Davis",
      email: "emily.d@example.com",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "ED",
    },
    status: "shipped",
    date: "2023-06-17",
    total: 34.99,
  },
  {
    id: "ORD-005",
    customer: {
      name: "David Wilson",
      email: "d.wilson@example.com",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "DW",
    },
    status: "pending",
    date: "2023-06-16",
    total: 59.99,
  },
]

export function AdminRecentOrders() {
  return (
    <div className="space-y-4">
      {recentOrders.map((order) => (
        <div key={order.id} className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-9 w-9">
              <AvatarImage src={order.customer.avatar || "/placeholder.svg"} alt={order.customer.name} />
              <AvatarFallback>{order.customer.initials}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium leading-none">{order.customer.name}</p>
              <p className="text-xs text-muted-foreground">{order.customer.email}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Badge
              variant={
                order.status === "completed"
                  ? "default"
                  : order.status === "processing"
                    ? "secondary"
                    : order.status === "shipped"
                      ? "outline"
                      : "destructive"
              }
              className="capitalize"
            >
              {order.status}
            </Badge>
            <div className="text-right">
              <p className="text-sm font-medium">${order.total.toFixed(2)}</p>
              <p className="text-xs text-muted-foreground">{order.date}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
