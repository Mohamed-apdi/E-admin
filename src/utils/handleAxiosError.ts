import { AxiosError } from "axios";

export const handleAxiosError = (error: unknown): string => {
  if (error instanceof AxiosError) {
    console.error("[AXIOS ERROR]", {
      message: error.message,
      response: error.response?.data?.message,
      status: error.response?.status,
    });
    return error.response?.data?.message || "An unexpected error occurred.";
  } else {
    console.error("[UNKNOWN ERROR]", error);
    return "An unexpected error occurred.";
  }
};
