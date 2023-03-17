import { ChatI, ChatSliceI } from "@/interfaces/chat/chat.interface";
import { ActionPayloadI } from "@/interfaces/general/general.interface";
import { createSlice } from "@reduxjs/toolkit";



const initialState: ChatSliceI = {
    chats: [],
    selectedChat: 1
} 

export const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        setChats: (state, action: ActionPayloadI<ChatI[]>) => {
            state.chats = action.payload
        },
        setSelectedChat: (state, action: ActionPayloadI<{id: number}>) => {
            state.selectedChat = action.payload.id
        }
    }
})

export const { setChats, setSelectedChat } = chatSlice.actions;
export default chatSlice.reducer;