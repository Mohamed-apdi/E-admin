import apiClient from "../../utils/axios-config";
import { AxiosError } from "axios";

interface UserData {
  email: string;
  password: string;
}

const login = async (userData: UserData) => {
  try {
    const response = await apiClient.post("/user/admin-login", userData);

    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
      localStorage.setItem("token", JSON.stringify(response.data.token));
    }

    return response.data;
  } catch (error: any) {
    const axiosError = error as AxiosError;
    console.error("[LOGIN ERROR]", axiosError);
    throw new Error(axiosError.response?.data?.message || "Failed to login");

  }
};

export const authService = {
  login,
};
