import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface RefOffsetList {
  top: number;
  height: number;
}

interface RefTopStateType {
  refOffsetList: RefOffsetList[];
}

const initialState: RefTopStateType = {
  refOffsetList: [],
};

const RefOffsetListStateSlice = createSlice({
  name: "RefTopState",
  initialState,
  reducers: {
    setRefOffsetList: (state, action: PayloadAction<RefOffsetList[]>) => {
      state.refOffsetList = action.payload;
    },
  },
});

export const RefOffsetListStateAction = RefOffsetListStateSlice.actions;
export const RefOffsetListState = RefOffsetListStateSlice.name;
export const RefOffsetListStateReducer = RefOffsetListStateSlice.reducer;
