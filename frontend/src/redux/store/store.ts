import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "../slices/chat/chat.slice";
import configReducer from "../slices/config/config.slice";

const store = configureStore({
    reducer: {
        config: configReducer,
        chat: chatReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export default store