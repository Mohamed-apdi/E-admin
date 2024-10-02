
import { SidebarLogo } from "./_components/sidebar-logo"
import { SidebarRoutes } from "./_components/sidebar-routes"


export const Sidebar = () => {


  return (
    <div className="p-2">
      <div className="mb-10 pt-3 w-full mx-auto">
        <SidebarLogo/>
      </div>
      <div className="flex flex-col w-full">
      <SidebarRoutes/>
      </div>
    </div>
  )
}
