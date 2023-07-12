import { SkillDescType } from "@/api";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface SkillDescStateType {
  skillDesc: SkillDescType | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: SkillDescStateType = {
  skillDesc: null,
  isLoading: false,
  error: null,
};

const skillDescStateSlice = createSlice({
  name: "skillDescState",
  initialState,
  reducers: {
    setSkillDesc: (state, action: PayloadAction<SkillDescType>) => {
      state.skillDesc = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const skillDescStateAction = skillDescStateSlice.actions;
export const skillDescState = skillDescStateSlice.name;
export const skillDescStateReducer = skillDescStateSlice.reducer;
