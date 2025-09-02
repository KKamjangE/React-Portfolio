import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { RefOffsetListStateReducer } from '@/store/ref-top-state-slice'

// 루트 리듀서
const rootReducer = combineReducers({
  RefOffsetListStateReducer,
})

// 스토어
export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState> // 스토어의 루트 상태 타입
export type AppDispatch = typeof store.dispatch // 스토어의 디스패치 타입

export const useAppDispatch: () => AppDispatch = useDispatch // useDispatch 타입 정의
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector // useSelector 타입 정의
