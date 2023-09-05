import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface RefOffsetListType {
  top: number; // Ref 상단 스크롤값
  height: number; // Ref 높이값
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
      state.refOffsetList = action.payload; // 콘텐츠 상단 스크롤값과 높이를 담은 배열 상태
    },
  },
});

export const RefOffsetListStateAction = RefOffsetListStateSlice.actions;
export const RefOffsetListState = RefOffsetListStateSlice.name;
export const RefOffsetListStateReducer = RefOffsetListStateSlice.reducer;
