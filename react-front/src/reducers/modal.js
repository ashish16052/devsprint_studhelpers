import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: "modal",
    initialState: { value: false },
    reducers: {
        setModal: (state, action) => {
            state.value = action.payload
        },
    }
})

export const { setModal } = modalSlice.actions;  //for useDispatch

export default modalSlice.reducer;   //for Store