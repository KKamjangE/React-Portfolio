import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { RefTopStateReducer } from "@/store/RefTopStateSlice";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { contentsStateReducer } from "./contentsStateSlice";
import { skillDescStateReducer } from "./skillDescStateSlice";

const rootReducer = combineReducers({
  RefTopStateReducer,
  contentsStateReducer,
  skillDescStateReducer,
});

// 스토어
export const store = configureStore({
  reducer: rootReducer,
});

export type rootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<rootState> = useSelector;
