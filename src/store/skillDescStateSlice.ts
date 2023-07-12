import { skillDescType } from "@/api";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface SkillDescStateType {
  skillDesc: skillDescType | null;
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
    setSkillDesc: (state, action: PayloadAction<skillDescType>) => {
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

export const skillDescAction = skillDescStateSlice.actions;
export const skillDesc = skillDescStateSlice.name;
export const skillDescStateReducer = skillDescStateSlice.reducer;
