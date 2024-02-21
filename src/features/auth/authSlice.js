import { createAsyncThunk, createSlice, isFulfilled } from "@reduxjs/toolkit";
import authService from "./authService";

const userExist = JSON.parse(localStorage.getItem("user"));

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  user: userExist ? userExist : null,
  message: "",
};

const authslice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: false,
        user:  null,
        message: "",
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.user = null;
        state.message = action.payload;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.user = null;
        state.message = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isSuccess = false;
        state.user = null;
      })
  },
});

export const{reset}=authslice.actions;
export default authslice.reducer;

// Register User
export const register = createAsyncThunk(
  "AUTH/REGISTER",
  async (formData, thunkAPI) => {
    try {
      return await authService.registerUser(formData);
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Login User
export const login = createAsyncThunk(
  "AUTH/LOGIN",
  async (formData, thunkAPI) => {
    try {
      return await authService.loginUser(formData);
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Logout User
export const logout = createAsyncThunk("AUTH/LOGOUT", async () => {
  localStorage.removeItem("user");
});
