import { ConfigI } from "@/interfaces/config/config.interface";
import { ActionPayloadI } from "@/interfaces/general/general.interface";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ConfigI = {
    username: "John Doe",
    photo: "",
    save: false
}

export const configSlice = createSlice({
    name: "config",
    initialState,
    reducers: {
        setConfigInfo: (state, action: ActionPayloadI<ConfigI>) => {
            state.username = action.payload.username;
            state.photo = action.payload.photo;
            state.save = action.payload.save;
        }
    }
})

export const { setConfigInfo } = configSlice.actions;
export default configSlice.reducer;