import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/Auth/userSlice";
import accountsReducer from "./reducers/Auth/accountsSlice";

export default configureStore({
    reducer: {
        user: userReducer,
        accounts: accountsReducer,
        // banners: banners,
        // moviesUser: movies,
        // movieDetails: movieDetails,
        // moviesAdmin: moviesAdmin,
        // tickets: tickets,
        // cinemas: cinemas,
        // movieSchedules: movieSchedules,
    },
});
