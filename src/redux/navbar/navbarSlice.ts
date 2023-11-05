import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type Navbar = {
  toggleNavbar: boolean;
};

const initialState: Navbar = {
  toggleNavbar: false,
};

export const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setToggleNavbar(state, action) {
      state.toggleNavbar = action.payload;
    },
  },
});

export const navbarSelector = (state: RootState) => state.navbar;
export const { setToggleNavbar } = navbarSlice.actions;
export const navbarReducer = navbarSlice.reducer;
