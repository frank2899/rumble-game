import { toggleTheme } from './action'
import { createReducer } from '@reduxjs/toolkit'

export const initialState = {
    isDark: true,
}

export default createReducer(initialState, (builder) =>
    builder.addCase(toggleTheme, (state) => {
        state.isDark = !state.isDark
    }),
)
