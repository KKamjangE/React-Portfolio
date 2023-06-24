import { AppDispatch, RootState } from "@/store";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// useDispatch의 타입을 AppDispatch로 정의
export const useAppDispatch: () => AppDispatch = useDispatch;

// useSelector의 타입을 정의, RootState를 전달하여 상태를 선택
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
