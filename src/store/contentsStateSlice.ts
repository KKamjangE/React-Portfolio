import { ResponseData } from '@/api'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface ContentsStateType {
    contents: ResponseData | null // 콘텐츠
    isLoading: boolean // 로딩 상태
    error: string | null // 에러 코드 상태
}

const initialState: ContentsStateType = {
    contents: null,
    isLoading: false,
    error: null,
}

const contentsStateSlice = createSlice({
    name: 'contentsState',
    initialState,
    reducers: {
        setContents: (state, action: PayloadAction<ResponseData>) => {
            state.contents = action.payload // 콘텐츠 데이터 상태
        },
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload // 콘텐츠 로딩 상태
        },
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload // 콘텐츠 에러 상태
        },
    },
})

export const contentsStateAction = contentsStateSlice.actions
export const contentsState = contentsStateSlice.name
export const contentsStateReducer = contentsStateSlice.reducer
