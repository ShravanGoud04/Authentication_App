import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import todoReducer from "./todos/todoSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    todos: todoReducer,
  },
});

export default store;
