import { Menu } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "../../../components/ui/sheet"
import { Sidebar } from '../../sidebar/page'
export const MobileNavbar = () => {
  return (
    <div>
        <Sheet>
      <SheetTrigger asChild>
        <Menu/>
      </SheetTrigger>
      <SheetContent side="left">
        <Sidebar/>
      </SheetContent>
    </Sheet>
    </div>
  )
}
