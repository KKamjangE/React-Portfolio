import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { RefTopStateReducer } from "@/store/RefTopStateSlice";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

const rootReducer = combineReducers({
  RefTopStateReducer,
});

// 스토어
export const store = configureStore({
  reducer: rootReducer,
});

export type rootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<rootState> = useSelector;
