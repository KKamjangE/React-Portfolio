import { configureStore } from "@reduxjs/toolkit";
import contentsRefSlice from "./contentsRefSlice";

export const store = configureStore({
  reducer: { contentsRef: contentsRefSlice },
});

// 전체 Redux 스토어의 상태 타입이다. 스토어의 상태 타입을 추론한다.
export type RootState = ReturnType<typeof store.getState>;

// 액션을 디스패치하는 데 사용되는 디스패치 타입이다. 스토어의 디스패치 타입을 추론한다.
export type AppDispatch = typeof store.dispatch;
