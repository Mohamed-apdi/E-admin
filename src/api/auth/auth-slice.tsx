import { createAsyncThunk , createSlice } from "@reduxjs/toolkit"
import { authService } from "./auth-service";
import { User } from "../../types/user";

interface AuthState {
    user: User | null;
    success: boolean;
    loading: boolean;
    error: boolean;
    message: string;
}


interface LoginParams {
    email: string;
    password: string;
}

const getUserData = () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
};


const initialState: AuthState = {
    user: getUserData(),
    success: false,
    loading: false,
    error: false,
    message: "",
}


export const userLogin = createAsyncThunk<User, LoginParams, { rejectValue: string }>(
    "auth/login",
    async (data, thunkAPI) => {
        try {
            const response = await authService.login(data);
            return response;
        } catch (error: any) {
            const message = error.response?.data?.message || error.message;
            return thunkAPI.rejectWithValue(message);
        }
    }

)



const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: ( builder ) => {
        builder.addCase(userLogin.pending, (state) => {
            state.loading = true;
            state.error = false;
            state.message = "";
        })
        .addCase(userLogin.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.user = action.payload;
            state.error = false;
            state.message = "";
        })
        .addCase(userLogin.rejected, (state, action) => {
            state.loading = false;
            state.success = false;
            state.error = true;
            state.message = action.payload || "Login failed";
            state.user = null;
        })
    }
});

export default authSlice.reducer;