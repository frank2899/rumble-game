import { createAction } from '@reduxjs/toolkit'

export const updateGeneratedLetters = createAction(
    'letters/updateGeneratedLetters',
)

export const updateInputWords = createAction('letters/updateInputWords')

export const updateValidGuess = createAction('letters/updateValidGuess')

export const updatePoints = createAction('letters/points')
