import { updateTimer } from './action'
import { createReducer } from '@reduxjs/toolkit'
import { DEFAULT_INITIAL_TIMER } from '../../constants/config'

export const initialState = {
    time: DEFAULT_INITIAL_TIMER,
}

export default createReducer(initialState, (builder) =>
    builder.addCase(updateTimer, (state, { payload: { timer } }) => {
        state.time = Number(timer)
    }),
)
