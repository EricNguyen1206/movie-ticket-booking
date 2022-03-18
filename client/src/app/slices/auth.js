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
      console.log("thunk api", thunkAPI);
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
      thunkAPI.dispatch(
        setMessage(error && error.message ? error.message : "error from server")
      );
      return thunkAPI.rejectWithValue(error);
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
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout();
});

export const verifyAccount = createAsyncThunk(
  "auth/verifyAccount",
  async ({ email, token }, thunkAPI) => {
    try {
      let response = await authService.verify({ email, token });
      console.log("response", response);
      // thunkAPI.dispatch(setMessage(response));

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = user
  ? { isLoggedIn: true, isLoading: false, user, message: "" }
  : { isLoggedIn: false, isLoading: false, user: null, message: "" };
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
      console.log("fulfilled", action);

      toast.success(action.payload.message);
    },
    [register.rejected]: (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.user = {};
      console.log("rejected", action);
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
    [verifyAccount.fulfilled]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.isLoggedIn = false;
      state.message =
        action && action.payload && action.payload.message
          ? action.payload.message
          : "";
      toast.success(
        action && action.payload && action.payload.message
          ? action.payload.message
          : null
      );
    },
    [verifyAccount.rejected]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.isLoggedIn = false;
      state.message =
        action && action.payload && action.payload.message
          ? action.payload.message
          : "";
      console.log("action", action);
      toast.error(
        action && action.payload && action.payload.message
          ? action.payload.message
          : "User verify rejected"
      );
    },
  },
});
const { reducer } = authSlice;
export default reducer;
