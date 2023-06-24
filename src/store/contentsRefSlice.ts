import { MutableRefObject } from "react";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ContentsRefType {
  contentsRef: MutableRefObject<HTMLElement[]> | null;
}

const contentsRefSlice = createSlice({
  name: "contentRefs",
  initialState: { contentsRef: null },
  reducers: {
    setContentsRef: (
      state: ContentsRefType,
      action: PayloadAction<MutableRefObject<HTMLElement[]> | null>
    ) => {
      state.contentsRef = action.payload;
    },
  },
});

export default contentsRefSlice.reducer;
export const { setContentsRef } = contentsRefSlice.actions;
