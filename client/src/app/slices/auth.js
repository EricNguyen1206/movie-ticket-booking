import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { setMessage } from "./message";
import authService from "../../services/auth.service";
const user = JSON.parse(localStorage.getItem("user"));
export const register = createAsyncThunk(
    "auth/register",
    async (
        { email, password, firstName, lastName, gender, birthday },
        thunkAPI
    ) => {
        try {
            const response = await authService.register(
                email,
                password,
                firstName,
                lastName,
                gender,
                birthday
            );
            thunkAPI.dispatch(setMessage(response.data.message));
            return response.data;
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue();
        }
    }
);

export const login = createAsyncThunk(
    "auth/login",
    async ({ email, password }, thunkAPI) => {
        try {
            const data = await authService.login(email, password);
            return { user: data };
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue();
        }
    }
);
export const logout = createAsyncThunk("auth/logout", async () => {
    await authService.logout();
});

export const verify = createAsyncThunk("auth/verify", async (account) => {
    return await authService.verify(account);
});

const initialState = user
    ? { isLoggedIn: true, isLoading: false, user }
    : { isLoggedIn: false, isLoading: false, user: null };
const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: {
        [register.pending]: (state, action) => {
            state.isLoading = true;
        },
        [register.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.isLoggedIn = false;
            state.user = action.payload.newUser;
            toast.success(action.payload.message);
        },
        [register.rejected]: (state, action) => {
            state.isLoading = false;
            state.isLoggedIn = false;
            state.user = {};
            toast.error(action.payload.message);
        },
        [login.pending]: (state, action) => {
            state.isLoading = true;
        },
        [login.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.isLoggedIn = true;
            state.user = action.payload.user;
            toast.success(action.payload.user.message);
        },
        [login.rejected]: (state, action) => {
            state.isLoading = false;
            state.isLoggedIn = false;
            state.user = null;
            toast.error(action.payload.message);
        },
        [logout.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.isLoggedIn = false;
            state.user = null;
        },
        [verify.fulfilled]: (state, action) => {
            console.log(action);
            state.isLoading = false;
            state.isLoggedIn = false;
            toast.success(action.message);
        },
        [verify.rejected]: (state, action) => {
            console.log(action);
            state.isLoading = false;
            state.isLoggedIn = false;
            toast.error("User verify rejected");
        },
    },
});
const { reducer } = authSlice;
export default reducer;
