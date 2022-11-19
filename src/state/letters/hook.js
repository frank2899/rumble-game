import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    updateGeneratedLetters as updateGeneratedLettersAction,
    updateInputWords as updateInputWordsAction,
    updateValidGuess as updateValidGuessAction,
    updatePoints as updatePointsAction,
    resetValidGuess as resetValidGuessAction,
} from './action'

export const useGeneratedText = () => {
    const dispatch = useDispatch()
    const generatedLetters = useSelector(
        (state) => state.letters.generatedLetters,
    )

    const setGeneratedLetters = useCallback(
        (newGeneratedLetters) => {
            let letter = () => {
                if (typeof newGeneratedLetters === 'string')
                    return newGeneratedLetters.split('')
                if (typeof newGeneratedLetters === 'object')
                    return newGeneratedLetters

                return []
            }

            dispatch(
                updateGeneratedLettersAction({ newGeneratedLetters: letter() }),
            )
        },
        [dispatch],
    )

    return [generatedLetters, setGeneratedLetters]
}

export const useInputWords = () => {
    const dispatch = useDispatch()
    const inputWords = useSelector((state) => state.letters.inputWords)

    const setInputWords = useCallback(
        (newInputWords) => {
            dispatch(updateInputWordsAction({ newInputWords }))
        },
        [dispatch],
    )

    return [inputWords, setInputWords]
}

export const useValidGuess = () => {
    const dispatch = useDispatch()
    const allValidGuess = useSelector((state) => state.letters.validGuess)

    const setValidGuess = useCallback(
        (newValidGuess) => {
            dispatch(updateValidGuessAction({ newValidGuess }))
        },
        [dispatch],
    )

    const resetValidGuess = useCallback(() => {
        dispatch(resetValidGuessAction())
    }, [dispatch])

    return [allValidGuess, setValidGuess, resetValidGuess]
}

export const usePoints = () => {
    const dispatch = useDispatch()
    const points = useSelector((state) => state.letters.points)

    const updatePoints = useCallback(
        (action) => {
            dispatch(updatePointsAction({ action }))
        },
        [dispatch],
    )

    return [points, updatePoints]
}
