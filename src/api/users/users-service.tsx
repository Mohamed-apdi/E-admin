import apiClient from "../../utils/axios-config";
import { Users } from "../../types/user";  // Import your types
import { handleAxiosError } from "../../utils/handleAxiosError";

// Function to get users
const getUsers = async (): Promise<Users[]> => {  // Returning an array of Users

    try {
        // Fetch users from the API
        const { data } = await apiClient.get("/user/all-users");  // Typed response data
        return data;

    } catch (error) {
        throw new Error(handleAxiosError(error));
    }
};

const getUser = async (id: string) => {
        try {
            const response = await apiClient.get(`/user/${id}`);
            return response.data;
        } catch (error) {
            throw new Error(handleAxiosError(error));
        }
}

const deleteUser = async (id: string) => {
    try {
         const response = await apiClient.delete(`/user/${id}`);
         return response.data;
    } catch (error) {
        throw new Error(handleAxiosError(error));    
    }
}

const updateUser = async ({id, data,}: {id: string; data: Users;}): Promise<Users> => {
    try {
      const { data: updatedUser } = await apiClient.put(`/user/${id}`, data);
      return updatedUser;
    } catch (error) {
      throw new Error(handleAxiosError(error));
    }
  };
export const UsersService = {
    getUsers,
    getUser,
    deleteUser,
    updateUser
};
