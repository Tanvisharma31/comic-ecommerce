import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Plus, Search, MoreVertical, Edit, Trash } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface Discount {
  id: string
  code: string
  type: "percentage" | "fixed"
  value: number
  minPurchase: number
  startDate: string
  endDate: string
  status: "active" | "expired" | "scheduled"
  usageLimit: number
  usedCount: number
}

const discounts: Discount[] = [
  {
    id: "DISC001",
    code: "SUPERHERO20",
    type: "percentage",
    value: 20,
    minPurchase: 50,
    startDate: "2024-03-01",
    endDate: "2024-03-31",
    status: "active",
    usageLimit: 100,
    usedCount: 45,
  },
  {
    id: "DISC002",
    code: "FLASH10",
    type: "fixed",
    value: 10,
    minPurchase: 30,
    startDate: "2024-03-15",
    endDate: "2024-04-15",
    status: "scheduled",
    usageLimit: 50,
    usedCount: 0,
  },
  {
    id: "DISC003",
    code: "BATMAN25",
    type: "percentage",
    value: 25,
    minPurchase: 100,
    startDate: "2024-02-01",
    endDate: "2024-02-28",
    status: "expired",
    usageLimit: 75,
    usedCount: 75,
  },
]

export default function AdminDiscountsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Discounts & Coupons</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Create Discount
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Discounts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {discounts.filter((discount) => discount.status === "active").length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Discounts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{discounts.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Usage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {discounts.reduce((sum, discount) => sum + discount.usedCount, 0)}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Scheduled Discounts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {discounts.filter((discount) => discount.status === "scheduled").length}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Discount List</CardTitle>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search discounts..." className="pl-8 w-[300px]" />
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Code</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Value</TableHead>
                <TableHead>Min Purchase</TableHead>
                <TableHead>Period</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Usage</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {discounts.map((discount) => (
                <TableRow key={discount.id}>
                  <TableCell className="font-medium">{discount.code}</TableCell>
                  <TableCell>
                    <Badge variant={discount.type === "percentage" ? "default" : "secondary"}>
                      {discount.type === "percentage" ? "Percentage" : "Fixed Amount"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {discount.type === "percentage" ? `${discount.value}%` : `$${discount.value}`}
                  </TableCell>
                  <TableCell>${discount.minPurchase}</TableCell>
                  <TableCell>
                    {discount.startDate} - {discount.endDate}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        discount.status === "active"
                          ? "default"
                          : discount.status === "expired"
                          ? "destructive"
                          : "secondary"
                      }
                    >
                      {discount.status.charAt(0).toUpperCase() + discount.status.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {discount.usedCount}/{discount.usageLimit}
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash className="mr-2 h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
} 