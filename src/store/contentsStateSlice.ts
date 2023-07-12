import { ResponseData } from "@/api";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ContentsStateType {
  contents: ResponseData | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: ContentsStateType = {
  contents: null,
  isLoading: false,
  error: null,
};

const contentsStateSlice = createSlice({
  name: "contentsState",
  initialState,
  reducers: {
    setContents: (state, action: PayloadAction<ResponseData>) => {
      state.contents = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const contentsStateAction = contentsStateSlice.actions;
export const contentsState = contentsStateSlice.name;
export const contentsStateSliceReducer = contentsStateSlice.reducer;
