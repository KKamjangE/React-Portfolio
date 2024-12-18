import { RootState, useAppSelector } from '@/store'

export const useGetSkillDesc = () => {
    // store에 저장된 skillDesc를 가져오는 훅
    const { skillDesc, isLoading, error } = useAppSelector(
        (state: RootState) => state.skillDescStateReducer
    )
    return {
        skillDescData: skillDesc,
        skillDescError: error,
        isSkillDescLoading: isLoading,
    }
}

export default useGetSkillDesc
