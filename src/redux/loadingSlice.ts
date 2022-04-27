import { createSlice } from '@reduxjs/toolkit'
import {RootState} from "./store";

interface LoadingState {
    spinning: boolean
}

const initialState: LoadingState = {
    spinning: false
}


export const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        toggle: state => {
            state.spinning = !state.spinning;
        },
    },
})

export const { toggle } = loadingSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const spinning = (state: RootState) => state.loading.spinning

export default loadingSlice.reducer

