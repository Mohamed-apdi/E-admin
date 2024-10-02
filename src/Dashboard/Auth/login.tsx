import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { useDispatch, useSelector } from "react-redux";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../../app/stote";
import { userLogin } from "../../api/auth/auth-slice";
import { Loader } from "lucide-react";

// Define the validation schema using Zod
const formDataSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(4, "Password must be at least 4 characters long"),
});

type FormData = z.infer<typeof formDataSchema>;

export const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { success, loading, error, message } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (success) {
      navigate("/");
    }
  }, [success, navigate]);

  // Initialize useForm with Zod resolver for validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formDataSchema),
  });

  // Form submission handler
  const onSubmit = (data: FormData) => {
    dispatch(userLogin(data));
  };

  return (
    <div className="flex justify-center w-[600px] items-center mx-auto py-60">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Access your account</CardDescription>
        </CardHeader>
        <CardContent>
          {error && <p className="text-red-500">{message}</p>}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid w-full items-center gap-4 py-3">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="Enter your email"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>
            </div>
            <div className="grid w-full items-center gap-4 py-3">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  {...register("password")}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-red-300 text-red-700 hover:bg-red-300/90 hover:text-red-700"
              >
                {loading ? <span className="flex items-center gap-x-1">Logging in<Loader className="w-5 h-5 animate-spin"/></span> : "Login"}
              </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
