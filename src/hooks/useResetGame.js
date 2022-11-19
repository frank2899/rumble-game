import { DEFAULT_INITIAL_TIMER } from '../constants/config'
import useClockTimer from './useClockTimer'
import useGeneratedRumble from './useGeneratedRumble'
import useGuess from './useGuess'
import useGuessPoints from './useGuessPoints'
import useInputField from './useInputWords'

const useResetGame = () => {
    const { setInputWords } = useInputField()
    const { restartTimer } = useClockTimer()
    const { updatePoints } = useGuessPoints()
    const { resetValidGuess } = useGuess()
    const { createJumbleLetters } = useGeneratedRumble()

    const reset = () => {
        setInputWords('')
        restartTimer(DEFAULT_INITIAL_TIMER)
        updatePoints('RESET')
        resetValidGuess()
        createJumbleLetters()
    }

    return reset
}

export default useResetGame
