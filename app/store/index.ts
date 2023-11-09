import {configureStore} from "@reduxjs/toolkit";
import {useDispatch, TypedUseSelectorHook, useSelector} from "react-redux";
import {basketReducer} from "@/app/store/slices/basket";


export const store = configureStore({
    reducer: {
        basketReducer: basketReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;