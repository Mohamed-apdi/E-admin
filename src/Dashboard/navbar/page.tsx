import {  User } from "lucide-react"
import { MobileNavbar } from "./_components/mobile-navbar";

export const Navbar = () => {
  // Parse the user object from localStorage
  const storedUser = localStorage.getItem('user');
  const user = storedUser ? JSON.parse(storedUser) : null;

  // Use optional chaining to safely access properties
  const fullname = user ? `${user.firstname} ${user.lastname}` : "Guest";

  return (
    <div className="p-3">
        <div className="flex items-center justify-between">
           <div>
            <MobileNavbar/>
           </div>
           <div className="flex items-center gap-x-2">
            <div className="flex flex-col">
                <p>{fullname}</p>
                <p>Admin</p>
            </div>
            <User/>
           </div>
        </div>
    </div>
  )
}
