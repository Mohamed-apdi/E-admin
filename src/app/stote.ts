import { configureStore } from "@reduxjs/toolkit"
import authSlice from "../api/auth/auth-slice"
import usersSlice from "../api/users/users-slice"


const store = configureStore({
    reducer: {
        auth: authSlice,
        users: usersSlice,
        
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export default store;