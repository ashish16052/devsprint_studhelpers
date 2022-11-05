import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
    productModal: false,
    productData: {}
}

const productModalSlice = createSlice({
    name: "productModal",
    initialState: { value: initialValue },
    reducers: {
        showProductModal: (state, action) => {
            state.value.productModal = true
            state.value.productData = action.payload
        },
        hideProductModal: (state, action) => {
            state.value.productModal = false
            state.value.productData = {}
        }
    }
})

export const { showProductModal, hideProductModal } = productModalSlice.actions;  //for useDispatch

export default productModalSlice.reducer;   //for Store