import { useGeneratedText } from '../state/letters/hook'
import { jumbleRumbleLetters } from '../utils/generate.rumble'

const useGeneratedRumble = () => {
    const [generatedLetters, setGeneratedLetters] = useGeneratedText()

    const createJumbleLetters = () => setGeneratedLetters(jumbleRumbleLetters())

    return { generatedLetters, setGeneratedLetters, createJumbleLetters }
}

export default useGeneratedRumble
