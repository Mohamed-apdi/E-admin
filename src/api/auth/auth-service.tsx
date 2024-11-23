import apiClient from "../../utils/axios-config";
import { AxiosError } from "axios";

interface UserData {
  email: string;
  password: string;
}

const login = async (userData: UserData) => {
  try {
    const { data } = await apiClient.post("/user/admin-login", userData);

    if (data) {
      localStorage.setItem("user", JSON.stringify(data));
    }

    return data;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.error("[LOGIN ERROR]", axiosError);
    throw new Error(axiosError.response?.data?.message || "Failed to login");

  }
};

export const authService = {
  login,
};
