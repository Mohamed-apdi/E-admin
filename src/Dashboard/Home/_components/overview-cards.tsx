import { CreditCard, ListOrdered, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/card"
import { AiFillProduct } from "react-icons/ai"

export const Overviews = () => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-4">
        <Card className="w-full md:w-[300px]">
            <CardHeader>
                <div className="flex justify-between items-center">
                <div>
                <CardTitle>Sales</CardTitle>
                <CardDescription>This year</CardDescription>
                </div>

                <div>
                    <CreditCard/>
                </div>
                </div>
            </CardHeader>
            <CardContent className="flex justify-between items-center gap-x-4">
                <div>
                <h1 className="text-3xl font-bold pb-1">
                $10,000
                </h1>
                <p className="text-xs text-muted-foreground"> +19% from last year</p>
                </div>
            </CardContent>
        </Card>

        <Card className="w-full md:w-[300px]">
            <CardHeader>
                <div className="flex justify-between items-center">
                <div>
                <CardTitle>Orders</CardTitle>
                <CardDescription>This year</CardDescription>
                </div>

                <div>
                    <ListOrdered/>
                </div>
                </div>
            </CardHeader>
            <CardContent className="flex justify-between items-center gap-x-4">
                <div>
                <h1 className="text-3xl font-bold pb-1">
                410
                </h1>
                <p className="text-xs text-muted-foreground"> +21% from last year</p>
                </div>
            </CardContent>
        </Card>

        <Card className="w-full md:w-[300px]">
            <CardHeader>
                <div className="flex justify-between items-center">
                <div>
                <CardTitle>Users</CardTitle>
                <CardDescription>This year</CardDescription>
                </div>

                <div>
                    <Users/>
                </div>
                </div>
            </CardHeader>
            <CardContent className="flex justify-between items-center gap-x-4">
                <div>
                <h1 className="text-3xl font-bold pb-1">
                9,000
                </h1>
                <p className="text-xs text-muted-foreground"> +41% from last year</p>
                </div>
            </CardContent>
        </Card>

        <Card className="w-full md:w-[300px]">
            <CardHeader>
                <div className="flex justify-between items-center">
                <div>
                <CardTitle>Products</CardTitle>
                <CardDescription>This year</CardDescription>
                </div>

                <div>
                    <AiFillProduct/>
                </div>
                </div>
            </CardHeader>
            <CardContent className="flex justify-between items-center gap-x-4">
                <div>
                <h1 className="text-3xl font-bold pb-1">
                192
                </h1>
                <p className="text-xs text-muted-foreground"> +65% from last year</p>
                </div>
            </CardContent>
        </Card>
    </div>
  )
}
