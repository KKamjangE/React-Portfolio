import { getContentsData } from '@/api'
import { useAppDispatch } from '@/store'
import { contentsStateAction } from '@/store/contentsStateSlice'
import { useEffect } from 'react'

export const useAxiosGetContents = () => {
    // contents 데이터 get 요청해서 store에 저장하는 훅
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(contentsStateAction.setIsLoading(true))
        dispatch(contentsStateAction.setError(null))

        getContentsData()
            .then((res) => dispatch(contentsStateAction.setContents(res)))
            .catch((e) => dispatch(contentsStateAction.setError(e.message)))
            .finally(() => dispatch(contentsStateAction.setIsLoading(false)))
    }, [dispatch])
}

export default useAxiosGetContents
