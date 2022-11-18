import {
    updateGeneratedLetters,
    updateInputWords,
    updatePoints,
    updateValidGuess,
} from './action'
import { createReducer } from '@reduxjs/toolkit'

export const initialState = {
    generatedLetters: '',
    inputWords: '',
    validGuess: [],
    points: 0,
}

export default createReducer(initialState, (builder) =>
    builder
        .addCase(
            updateGeneratedLetters,
            (state, { payload: { newGeneratedLetters } }) => {
                state.generatedLetters = newGeneratedLetters
            },
        )
        .addCase(updateInputWords, (state, { payload: { newInputWords } }) => {
            state.inputWords = newInputWords
        })
        .addCase(updateValidGuess, (state, { payload: { newValidGuess } }) => {
            state.validGuess.push(newValidGuess)
        })
        .addCase(updatePoints, (state, { payload: { action } }) => {
            if (action === 'INCREMENT') state.points += 100
            if (action === 'DECREMENT')
                state.points = state.points - 20 <= 0 ? 0 : state.points - 20
        }),
)
