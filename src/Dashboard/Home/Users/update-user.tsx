import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";
import { Label } from "../../../components/ui/label";
import { Input } from "../../../components/ui/input";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { getUser, updateUser } from "../../../api/users/users-slice";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import { AppDispatch, RootState } from "../../../app/stote";

// Define form schema with Zod
const formDataSchema = z.object({
  firstname: z.string().min(1, "Firstname is required"),
  lastname: z.string().min(1, "Lastname is required"),
  email: z.string().email("Invalid email format"),
  role: z.enum(["admin", "user"]), // Define role as an enum
  isBlocked: z.boolean(),
  address: z.string().min(1, "Address is required"),
  mobile: z.string().min(10, "Mobile number must be at least 10 digits"),
});

type FormData = z.infer<typeof formDataSchema>;

export const UpdateUser = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: RootState) => state.users);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formDataSchema),
  });
  console.log("Validation errors:", errors); // Log validation errors
  useEffect(() => {
    if (id) {
      dispatch(getUser(id)); // Fetch user by ID
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (user) {
      // Populate form with fetched user data
      reset({
        firstname: user.firstname || "",
        lastname: user.lastname || "",
        email: user.email || "",
        role: (user.role as "admin" | "user") || "user",
        isBlocked: user.isBlocked ?? false,
        address: user.address || "", // Fallback to an empty string
        mobile: user.mobile || "",
      });
      
    }
  }, [user, reset]);

  const onSubmit = async(data: FormData) => {
    if (id) {
      try {
        // Dispatch update action and wait for completion
        await dispatch(updateUser({ id, data }));
        toast.success("User updated successfully");
        navigate("/users")
      } catch (error) {
        // Show error toast with a meaningful message
        toast.error(error?.message || "Failed to update user");
      }
    }
  };
  

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Update User</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-6 w-full items-center gap-4 py-3">
              {/* Firstname */}
              <div className="flex flex-col space-y-1.5 col-span-3">
                <Label htmlFor="firstname">Firstname</Label>
                <Input id="firstname" placeholder="Edit" {...register("firstname")} />
                {errors.firstname && <span className="text-red-500">{errors.firstname.message}</span>}
              </div>

              {/* Lastname */}
              <div className="flex flex-col space-y-1.5 col-span-3">
                <Label htmlFor="lastname">Lastname</Label>
                <Input id="lastname" placeholder="Edit" {...register("lastname")} />
                {errors.lastname && <span className="text-red-500">{errors.lastname.message}</span>}
              </div>

              {/* Email */}
              <div className="flex flex-col space-y-1.5 col-span-3">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Edit" {...register("email")} />
                {errors.email && <span className="text-red-500">{errors.email.message}</span>}
              </div>

              {/* Role */}
              <div className="flex flex-col space-y-1.5 col-span-3">
                <Label htmlFor="role">Role</Label>
                <Select
                  onValueChange={(value) => setValue("role", value as "admin" | "user")}
                  defaultValue={user?.role ?? "user"}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="user">User</SelectItem>
                  </SelectContent>
                </Select>
                {errors.role && <span className="text-red-500">{errors.role.message}</span>}
              </div>

                {/* ADDRESS  */}
              <div className="flex flex-col space-y-1.5 col-span-3">
              <Label htmlFor="address">Address</Label>
              <Input id="address" placeholder="Edit" {...register("address")} />
              {errors.address && <span className="text-red-500">{errors.address.message}</span>}
            </div>

              {/* IsBlocked */}
              <div className="flex flex-col space-y-1.5 col-span-3">
                <Label htmlFor="isBlocked">Is Blocked</Label>
                <Select
                  onValueChange={(value) => setValue("isBlocked", value === "true", { shouldValidate: true })}
                  defaultValue={String(user?.isBlocked ?? false)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="false">No</SelectItem>
                    <SelectItem value="true">Yes</SelectItem>
                  </SelectContent>
                </Select>
                {errors.isBlocked && <span className="text-red-500">{errors.isBlocked.message}</span>}
              </div>

              {/* Mobile */}
              <div className="flex flex-col space-y-1.5 col-span-3">
                <Label htmlFor="mobile">Mobile</Label>
                <Input id="mobile" placeholder="Edit" {...register("mobile")} />
                {errors.mobile && <span className="text-red-500">{errors.mobile.message}</span>}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-4 bg-blue-500 hover:bg-blue-600/80 text-white py-2 px-4 rounded"
            >
              Update User
            </button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
