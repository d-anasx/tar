import { createSlice } from '@reduxjs/toolkit'

const shopSlice = createSlice({
    name: 'shop',
    initialState: {
        products: [
            { id: 10, designation: 'article1', famille: 'informatique' },
            { id: 11, designation: 'article2', famille: 'bureau' },
        ],
    },
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload)
        },
        removeProduct: (state, action) => {
            state.products = state.products.filter(product => product.id !== action.payload)
        },
        editProduct: (state, action) => {
            state.products = state.products.map(product => product.id === action.payload.id ? action.payload : product)
        },
    },
})

export const { addProduct, removeProduct, editProduct } = shopSlice.actions
export default shopSlice.reducer

