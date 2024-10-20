import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "..";

export interface FooState {
  value: string;
}

const initialState: FooState = {
  value: "initial",
};

export const fooSlice = createSlice({
  name: "foo",
  initialState,
  reducers: {
    setFoo: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const useFoo = () => {
  const foo = useSelector((state: RootState) => state.foo);
  const dispatch = useDispatch();
  const setFoo = (payload: string) =>
    dispatch(fooSlice.actions.setFoo(payload));

  return { foo, actions: { setFoo } };
};

export default fooSlice.reducer;
