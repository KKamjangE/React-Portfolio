import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import { RefOffsetListStateReducer } from '@/store/RefTopStateSlice'
import { contentsStateReducer } from '@/store/contentsStateSlice'
import { skillDescStateReducer } from '@/store/skillDescStateSlice'

// 루트 리듀서
const rootReducer = combineReducers({
    RefOffsetListStateReducer,
    contentsStateReducer,
    skillDescStateReducer,
})

// 스토어
export const store = configureStore({
    reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState> // 스토어의 루트 상태 타입
export type AppDispatch = typeof store.dispatch // 스토어의 디스패치 타입

export const useAppDispatch: () => AppDispatch = useDispatch // useDispatch 타입 정의
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector // useSelector 타입 정의
