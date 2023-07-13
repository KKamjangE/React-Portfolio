import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { RefOffsetListStateReducer } from "@/store/RefTopStateSlice";
import { contentsStateReducer } from "./contentsStateSlice";
import { skillDescStateReducer } from "./skillDescStateSlice";

const rootReducer = combineReducers({
  RefOffsetListStateReducer,
  contentsStateReducer,
  skillDescStateReducer,
});

// 스토어
export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch; // useDispatch 타입 정의
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector; // useSelector 타입 정의
