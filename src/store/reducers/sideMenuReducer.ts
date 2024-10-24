import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "..";

export interface SideMenuState {
  open: boolean;
}

const initialState: SideMenuState = {
  open: false,
};

export const sideMenuSlice = createSlice({
  name: "sideMenu",
  initialState,
  reducers: {
    setOpen: (state, action: PayloadAction<boolean>) => {
      state.open = action.payload;
    },
  },
});

export const useSideMenu = () => {
  const sideMenu = useSelector((state: RootState) => state.sideMenu);
  const dispatch = useDispatch();
  const setOpen = (payload: boolean) =>
    dispatch(sideMenuSlice.actions.setOpen(payload));

  return { sideMenu, actions: { setOpen } };
};

export default sideMenuSlice.reducer;
