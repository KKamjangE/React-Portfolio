import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface RefTopStateType {
  RefTopArray: number[];
}

const initialState: RefTopStateType = {
  RefTopArray: [],
};

const RefTopStateSlice = createSlice({
  name: "RefTopState",
  initialState,
  reducers: {
    setRefTopList: (state, action: PayloadAction<number[]>) => {
      state.RefTopArray = action.payload;
    },
  },
});

export const RefTopStateAction = RefTopStateSlice.actions;
export const RefTopState = RefTopStateSlice.name;
export const RefTopStateReducer = RefTopStateSlice.reducer;
