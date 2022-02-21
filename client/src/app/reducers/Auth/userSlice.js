import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../util/axios";
import { toast } from "react-toastify";

const initialState = {
    user: {},
    isAuthenticated: false,
    isInitialized: false,
    status: null,
    isLoading: false,
    hasError: false,
    notifications: {
        newMessages: 0,
    },
};

export const userRegister = createAsyncThunk(
    "user/register",
    async (userInfo, { dispatch }) => {
        const response = await axios.post("/api/sign-up", userInfo);
        // const { token } = response.data;
        // setSession(token);
        return response.data;
    }
);

const userSlice = createSlice({
    name: "user",
    initialState,
    reducer: {
        REGISTER: (state, action) => {
            state.user = action.payload.user;
            state.isAuthenticated = true;
        },
    },
    extraReducers: {
        [userRegister.pending]: (state) => {
            state.status = "PENDING";
            state.isLoading = true;
        },
        [userRegister.fulfilled]: (state, action) => {
            state.status = "SUCCESS";
            state.isLoading = false;
            toast.success("User registration successful!");
        },
        [userRegister.rejected]: (state, action) => {
            state.status = "FAILED";
            state.isLoading = false;
            toast.error(
                action.error.message.startsWith("E11000")
                    ? `${action.error.message.slice(
                          action.error.message.indexOf("{") + 1,
                          action.error.message.indexOf("}")
                      )} has already been taken`
                    : "User registration rejected"
            );
        },
    },
});

export const {
    INITIALIZE,
    REGISTER,
    LOGIN,
    LOGOUT,
    UPDATE,
    PENDING,
    SUCCESS,
    REJECT,
    STATUS,
} = userSlice.actions;

export default userSlice.reducer;
