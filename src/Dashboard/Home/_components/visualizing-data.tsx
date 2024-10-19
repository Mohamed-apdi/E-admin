import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../../components/ui/chart"
export const description = "A multiple bar chart"
const chartData = [
  { month: "January", sales: 186, orders: 80, product: 60 },
  { month: "February", sales: 305, orders: 200, product: 40 },
  { month: "March", sales: 237, orders: 120, product: 70 },
  { month: "April", sales: 73, orders: 190, product: 75 },
  { month: "May", sales: 209, orders: 130, product: 80 },
  { month: "June", sales: 214, orders: 140, product: 90 },
]
const chartConfig = {
  sales: {
    label: "Sales",
    color: "hsl(var(--chart-1))",
  },
  orders: {
    label: "Orders",
    color: "hsl(var(--chart-2))",
  },
  product: {
    label: "Product",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig

export const VisualizingData = () => {
  return (
    <div>
        <Card className="w-full  md:ml-5">
            <CardHeader>
                <CardTitle>Bar Chart - Multiple</CardTitle>
                <CardDescription>January - June 2024</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                <BarChart accessibilityLayer data={chartData}>
                    <CartesianGrid vertical={false} />
                    <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="dashed" />}
                    />
                    <Bar dataKey="sales" fill="#b91c1c" radius={4} />
                    <Bar dataKey="orders" fill="#fecaca" radius={4} />
                    <Bar dataKey="product" fill="#10b981" radius={4} />
                </BarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 font-medium leading-none">
                Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                </div>
                <div className="leading-none text-muted-foreground">
                Showing total visitors for the last 6 months
                </div>
            </CardFooter>
        </Card>
    </div>
  )
}
