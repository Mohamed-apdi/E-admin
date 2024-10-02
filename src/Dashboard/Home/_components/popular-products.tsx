import siut from "../../../assets/siut.avif"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from "../../../components/ui/card"
import { Button } from "../../../components/ui/button"
 const Products = [
  {
    img: siut,
    name: "Product 1",
    paymentStatus: "Paid",
    paymentMethod: "Credit Card",
    totalAmount: "$2,000.00"
  },
  {
    img: siut,
    name: "Product 2",
    paymentStatus: "Paid",
    paymentMethod: "Credit Card",
    totalAmount: "$2,000.00"
  },
  {
    img: siut,
    name: "Product 1",
    paymentStatus: "Paid",
    paymentMethod: "Credit Card",
    totalAmount: "$2,000.00"
  },
  {
    img: siut,
    name: "Product 2",
    paymentStatus: "Paid",
    paymentMethod: "Credit Card",
    totalAmount: "$2,000.00"
  },
  {
    img: siut,
    name: "Product 2",
    paymentStatus: "Paid",
    paymentMethod: "Credit Card",
    totalAmount: "$2,000.00"
  }
 ]

export const PopularProducts = () => {
  return (
    <div className="md:mr-8">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
            <CardTitle>Popular Products</CardTitle>
            <CardDescription>Popular products and view their sales performance.</CardDescription>
            </div>
            <div>
              <Button className="hover:underline bg-red-200 hover:bg-red-200 text-admin-primary outline-none">
                View all Products
              </Button>
            </div>
          </div>
        </CardHeader>
        <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">image</TableHead>
          <TableHead className="w-[100px]">name</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Products.map((name) => (
          <TableRow key={name.name}>
            <TableCell className="w-[100px]">
              <img className="h-[50px] w-[50px] object-cover rounded-sm" src={name.img} alt={name.name} />
            </TableCell>
            <TableCell className="font-medium">{name.name}</TableCell>
            <TableCell>{name.paymentStatus}</TableCell>
            <TableCell>{name.paymentMethod}</TableCell>
            <TableCell className="text-right">{name.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
      </Card>
    </div>
  )
}
