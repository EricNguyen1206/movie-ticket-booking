import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../utils/axios";
import { toast } from "react-toastify";

const initialState = {
  user: {},
  account: {},
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

export const userSignIn = createAsyncThunk(
  "user/sign-in",
  async (account, { dispatch }) => {
    const response = await axios.post("/api/sign-in", {
      email: account.email,
      password: account.password,
    });
    return response.data;
  }
);

export const userVerify = createAsyncThunk("user/verify", async (account) => {
  const response = await axios.post("/api/verify-account", {
    token: account.token,
    email: account.email,
  });
  return response.data;
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userSignout: (state) => {
      state.isAuthenticated = false;
      state.status = "FAILED";
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
      toast.success(action.payload.message);
      state.user = action.newUser;
      state.account = action.newAccount;
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
    [userSignIn.pending]: (state) => {
      state.status = "PENDING";
      state.isLoading = true;
    },
    [userSignIn.fulfilled]: (state, action) => {
      state.status = "SUCCESS";
      state.isLoading = false;
      state.hasError = false;
      toast.success(action.payload.message);
    },
    [userSignIn.rejected]: (state, action) => {
      state.status = "FAILED";
      state.isLoading = false;
      state.hasError = true;
      toast.error("User signin rejected");
    },
    [userVerify.pending]: (state) => {
      state.status = "PENDING";
      state.isLoading = true;
    },
    [userVerify.fulfilled]: (state, action) => {
      console.log(action);
      state.status = "SUCCESS";
      state.isLoading = false;
      state.isAuthenticated = true;
      toast.success(action.payload.message);
    },
    [userVerify.rejected]: (state, action) => {
      state.status = "FAILED";
      state.isLoading = false;
      toast.error("User verify rejected");
    },
  },
});

export const { userSignout } = userSlice.actions;

export default userSlice.reducer;
