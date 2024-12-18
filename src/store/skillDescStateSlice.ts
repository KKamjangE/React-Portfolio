import { SkillDescType } from '@/api'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface SkillDescStateType {
    skillDesc: SkillDescType | null // 기술 설명
    isLoading: boolean // 로딩 상태
    error: string | null // 에러 코드 상태
}

const initialState: SkillDescStateType = {
    skillDesc: null,
    isLoading: false,
    error: null,
}

const skillDescStateSlice = createSlice({
    name: 'skillDescState',
    initialState,
    reducers: {
        setSkillDesc: (state, action: PayloadAction<SkillDescType>) => {
            state.skillDesc = action.payload // 기술 설명 데이터 상태
        },
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload // 로딩 상태
        },
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload // 에러 코드 상태
        },
    },
})

export const skillDescStateAction = skillDescStateSlice.actions
export const skillDescState = skillDescStateSlice.name
export const skillDescStateReducer = skillDescStateSlice.reducer
