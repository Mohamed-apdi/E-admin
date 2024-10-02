import { FunctionSquare, House } from 'lucide-react';
import { SidebarItems } from './sidebar-items';


const goesRoutes = [
  {
    path: "/",
    label: "Dashboard",
    icon: House,
  },
  {
    path: "/t",
    label: "Test",
    icon: FunctionSquare,
  },

]
export const SidebarRoutes = () => {
    
    const routes = goesRoutes;

  return (
    <div className='flex flex-col w-full gap-y-2'>
        {routes.map((route) => (
                <SidebarItems
                    key={route.path}
                    label={route.label}
                    icon={route.icon}
                    path={route.path}
                />
        ))}
    </div>
  )
}
