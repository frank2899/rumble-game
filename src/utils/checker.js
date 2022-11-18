import { WORDS } from '../constants/words'

export const validateGuess = (guess) => {
    return WORDS.indexOf(guess.toLowerCase()) !== -1 ? true : false
}
