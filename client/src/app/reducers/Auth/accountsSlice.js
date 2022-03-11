import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../utils/axios";
import { toast } from "react-toastify";

const createData = (account, username, email, phone, password, role) => {
    return { account, username, email, phone, password, role };
};

const data = [];
for (let i = 0; i < 20; i++) {
    data.push(
        createData(
            i,
            "name" + i,
            "mail" + 1 + "@gmail.com",
            "012323423" + i,
            "123123123",
            "user"
        )
    );
}

const initialState = {
    accounts: data,
    loading: false,
    error: null,
};

const accountsSlice = createSlice({
    name: "accounts",
    initialState,
    reducers: {},
    extraReducers: {},
});

export default accountsSlice.reducer;
