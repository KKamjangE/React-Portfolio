import { useAppDispatch } from '@/store'
import { MutableRefObject } from 'react'
import { RefOffsetListType, RefOffsetListStateAction } from '@/store/RefTopStateSlice'

export default function useSetRefOffsetList() {
    // Ref 배열 받아서 offset 배열로 변환해 store에 저장하는 훅
    const dispatch = useAppDispatch()

    const setRefOffsetList = (elementRefs: MutableRefObject<HTMLElement[]>) => {
        // Ref 배열을 받아서 offset 배열로 변환해주는 함수
        const RefOffsetList = elementRefs.current.reduce<RefOffsetListType[]>((result, item) => {
            result.push({ top: item.offsetTop, height: item.offsetHeight })
            return result
        }, [])

        dispatch(RefOffsetListStateAction.setRefOffsetList(RefOffsetList))
    }

    return { setRefOffsetList }
}
