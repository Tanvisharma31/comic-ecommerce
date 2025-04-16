import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUp, ArrowDown, Users, ShoppingCart, Package, DollarSign } from "lucide-react"

interface StatsCardProps {
  title: string
  value: string
  change: number
  icon: React.ReactNode
}

function StatsCard({ title, value, change, icon }: StatsCardProps) {
  const isPositive = change >= 0

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <div className={`flex items-center text-xs ${isPositive ? "text-green-500" : "text-red-500"}`}>
          {isPositive ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
          <span className="ml-1">{Math.abs(change)}% from last month</span>
        </div>
      </CardContent>
    </Card>
  )
}

export function AdminStatsCards() {
  const stats = [
    {
      title: "Total Revenue",
      value: "$45,231.89",
      change: 20.1,
      icon: <DollarSign className="h-4 w-4 text-muted-foreground" />,
    },
    {
      title: "Total Orders",
      value: "1,234",
      change: 12.5,
      icon: <ShoppingCart className="h-4 w-4 text-muted-foreground" />,
    },
    {
      title: "Total Products",
      value: "573",
      change: 8.2,
      icon: <Package className="h-4 w-4 text-muted-foreground" />,
    },
    {
      title: "Total Users",
      value: "2,345",
      change: -2.3,
      icon: <Users className="h-4 w-4 text-muted-foreground" />,
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <StatsCard key={stat.title} {...stat} />
      ))}
    </div>
  )
} 