import { ColumnDef } from "@tanstack/react-table"
import { Users } from "../../../../types/user"
import { ArrowUpDown } from "lucide-react"
import { MoreHorizontal } from "lucide-react"
import { format } from "date-fns";
import { Button } from "../../../../components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../../components/ui/dropdown-menu"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../../../../app/stote"
import { deleteUser, fetchUsers } from "../../../../api/users/users-slice"
import { Link } from "react-router-dom"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../../../../components/ui/alert-dialog"
import { Badge } from "../../../../components/ui/badge"


export const columns: ColumnDef<Users>[] = [
  {
    accessorKey: "firstname",
    header: "Firstname",
  },
  {
    accessorKey: "lastname",
    header: "Lastname",
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "mobile",
    header: "Mobile",
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => {
      const role = row.original.role;
      return (
        <Badge
          variant={role === "admin" ? "secondary" : "default"}
          className={role === "admin" ? "bg-blue-500 text-white hover:bg-blue-500" : "bg-gray-300 hover:bg-gray-300 text-black"}
        >
          {role === "admin" ? "Admin" : role === "user" ? "User" : "Unknown Role"}
        </Badge>
      );
    },
  },
  {
    accessorKey: "isBlocked",
    header: "Is Blocked",
    cell: ({ row }) => {
      return row.original.isBlocked ? (
        <Badge variant="destructive" className="bg-red-500 hover:bg-red-500 text-white">
          Blocked
        </Badge>
      ) : (
        <Badge variant="default" className="bg-green-500 hover:bg-green-500 text-white">
          Active
        </Badge>
      );
    },
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => format(new Date(row.original.createdAt), "dd/MM/yyyy hh:mm a"),
  },
  {
    accessorKey: "updatedAt",
    header: "Updated At",
    cell: ({ row }) => format(new Date(row.original.updatedAt), "dd/MM/yyyy hh:mm a"),
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const user = row.original
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const dispatch = useDispatch<AppDispatch>();

      const handleDeleteUser = async (id: string) => {
        await dispatch(deleteUser(id));  // Delete the user
        dispatch(fetchUsers());          // Fetch the updated list
      };


      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(user._id)}
            >
              Copy user ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Link to={`/users/edit/${user._id}`}><DropdownMenuItem>View user</DropdownMenuItem></Link>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure you want to delete this user ?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. Please confirm your action by clicking the "Delete" button
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
            <DropdownMenuItem onClick={() => handleDeleteUser(user._id)}>delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },

]
