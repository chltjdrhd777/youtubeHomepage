import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserInfo {
  uid: any;
  photo: any;
  email: any;
  displayName: any;
}

export interface UserState {
  userInfo: UserInfo | null;
}

//? reducer collection
const user = createSlice({
  name: "user",
  initialState: { userInfo: null } as UserState,
  reducers: {
    login: (state, action: PayloadAction<UserInfo>) => {
      state.userInfo = action.payload;
    },
    logout: (state) => {
      state.userInfo = null;
    },
  },
});

export default user;

export const { login, logout } = user.actions;
