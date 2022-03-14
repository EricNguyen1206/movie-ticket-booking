import { configureStore } from "@reduxjs/toolkit";
import accountsReducer from "./reducers/Auth/accountsSlice";
import auth from "./slices/auth";
import message from "./slices/message";

export default configureStore({
    reducer: {
        accounts: accountsReducer,
        auth: auth,
        message: message,
        // banners: banners,
        // moviesUser: movies,
        // movieDetails: movieDetails,
        // moviesAdmin: moviesAdmin,
        // tickets: tickets,
        // cinemas: cinemas,
        // movieSchedules: movieSchedules,
    },
});
