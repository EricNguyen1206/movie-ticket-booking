import { combineReducers, createStore } from "redux";
import currentUser from "./reducers/curentUser";
import AccountList from "./reducers/AccountList";

const rootReducer = combineReducers({
    AccountList,
    currentUser,
});

const store = createStore(rootReducer);

export default store;
