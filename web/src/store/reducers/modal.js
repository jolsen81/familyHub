import { createSlice } from "@reduxjs/toolkit"
export const MODAL_TYPES = Object.freeze({
    CREATE_USER: 'CREATE_USER'
})

const initialModalState = {
        open: false,
        modalType: undefined,
        data: undefined
    }

export const modalSlice = createSlice({
    name: 'modal',
    initialState: initialModalState,
    reducers: {
        openModal: (state, data) => {
            const { payload } = data
            return {
                open: true,
                modalType: payload.modalType,
                data: payload.data,
            }
        },
        closeModal: () => {
            return initialModalState
        }
    }
})

export const {openModal, closeModal} = modalSlice.actions
export default modalSlice.reducer