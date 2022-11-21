import { toggleTheme } from './action'
import { createReducer } from '@reduxjs/toolkit'
import { LS_THEME } from '../../constants/config'

export const initialState = {
    isDark: Boolean(localStorage?.getItem(LS_THEME)),
}

export default createReducer(initialState, (builder) =>
    builder.addCase(toggleTheme, (state) => {
        state.isDark = !state.isDark
        localStorage?.setItem(LS_THEME, !state.isDark)
    }),
)
