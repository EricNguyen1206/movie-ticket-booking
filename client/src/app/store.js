import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/Auth/userSlice";

export default configureStore({
    reducer: {
        user: userReducer,
        // banners: banners,
        // moviesUser: movies,
        // movieDetails: movieDetails,
        // moviesAdmin: moviesAdmin,
        // tickets: tickets,
        // cinemas: cinemas,
        // movieSchedules: movieSchedules,
    },
});
