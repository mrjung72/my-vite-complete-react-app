// src/store/reducers/ui.ts
import { createSlice } from '@reduxjs/toolkit'

interface UIState {
    loading: boolean
    modalOpen: boolean
}

const initialState: UIState = {
    loading: false,
    modalOpen: false
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        showLoading(state) {
            state.loading = true
        },
        hideLoading(state) {
            state.loading = false
        },
        openModal(state) {
            state.modalOpen = true
        },
        closeModal(state) {
            state.modalOpen = false
        }
    }
})

export const { showLoading, hideLoading, openModal, closeModal } = uiSlice.actions
export default uiSlice.reducer
