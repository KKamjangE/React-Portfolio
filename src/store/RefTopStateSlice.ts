import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface RefOffsetListType {
  top: number;
  height: number;
}

interface RefTopStateType {
  refOffsetList: RefOffsetListType[];
}

const initialState: RefTopStateType = {
  refOffsetList: [],
};

const RefOffsetListStateSlice = createSlice({
  name: "RefTopState",
  initialState,
  reducers: {
    setRefOffsetList: (state, action: PayloadAction<RefOffsetListType[]>) => {
      state.refOffsetList = action.payload;
    },
  },
});

export const RefOffsetListStateAction = RefOffsetListStateSlice.actions;
export const RefOffsetListState = RefOffsetListStateSlice.name;
export const RefOffsetListStateReducer = RefOffsetListStateSlice.reducer;
