import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { loadState } from "../stortage.ts";

export const JWT_PERSISTENT_STATE = "userData";

export interface UserState {
  jwt: string | null;
  isLoading: boolean;
  message?: string | null;
}

const initialState: UserState = {
  jwt: loadState<UserState>(JWT_PERSISTENT_STATE)?.jwt ?? null,
  isLoading: false,
  message: null,
};

export const loginUser = createAsyncThunk(
  "user/login",
  async (params: { login: string; password: string }) => {
    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/auth/login",
        {
          login: params.login,
          password: params.password,
        },
      );
      return data;
    } catch (e) {
      if (e instanceof AxiosError) {
        throw new Error(e.response?.data.message);
      }
    }
  },
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.jwt = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      if (!action.payload) {
        return;
      }
      state.isLoading = false;
      state.jwt = action.payload.access_token;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.message = action.error.message;
    });
  },
});

export default userSlice.reducer;
export const userActions = userSlice.actions;
