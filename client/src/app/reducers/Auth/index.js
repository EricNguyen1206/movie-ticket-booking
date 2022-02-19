import { createSlice } from "@reduxjs/toolkit";
const userInit = {
    firstName: "John",
    lastName: "Doe",
    gender: "male",
    email: "john@example.com",
    password: "123123123",
};

const user = (state = userInit, { type, payload }) => {
    switch (type) {
        case "SIGNIN":
            state = payload;
            return { ...state };
        case "SIGNOUT":
            state = payload;
            return { ...state };
        default:
            return { ...state };
    }
};

const accountsInit = [
    {
        firstName: "John",
        lastName: "Doe",
        gender: "male",
        email: "john@example.com",
        password: "123123123",
    },
    {
        firstName: "John",
        lastName: "Doe",
        gender: "male",
        email: "john1@example.com",
        password: "123123123",
    },
    {
        firstName: "John",
        lastName: "Doe",
        gender: "male",
        email: "john2@example.com",
        password: "123123123",
    },
    {
        firstName: "John",
        lastName: "Doe",
        gender: "male",
        email: "john3@example.com",
        password: "123123123",
    },
];

const accounts = (state = accountsInit, { type, payload }) => {
    switch (type) {
        case "GET_ACCOUT_LIST":
            return [...state];
        case "SIGNUP":
            return [...state, payload];
        default:
            return [...state];
    }
};

export const authSlice = createSlice({
    name: "auth",
    initialState: {},
    reducer: {},
});

export { user, accounts };
