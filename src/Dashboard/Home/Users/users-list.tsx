import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "../../../api/users/users-slice";
import { AppDispatch, RootState } from "../../../app/stote";
import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";

export const UsersList = () => {

  const dispatch = useDispatch<AppDispatch>();

  const {users, error, loading} = useSelector((state: RootState) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  },[dispatch]);

  if(error){
    return <div>something went wrong</div>;
  }

  return (
    <div className="container mx-auto py-10 px-5">
    <DataTable columns={columns} data={users} isloading={loading} />
  </div>
  )
}
