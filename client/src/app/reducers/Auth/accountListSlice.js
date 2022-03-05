import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../util/axios";
import { toast } from "react-toastify";

const initialState = {
    accountList: [],
    isLoading: false,
};
