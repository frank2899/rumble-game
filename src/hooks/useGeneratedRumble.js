import { useGeneratedText } from '../state/letters/hook'

const useGeneratedRumble = () => {
    const [generatedLetters, setGeneratedLetters] = useGeneratedText()

    return { generatedLetters, setGeneratedLetters }
}

export default useGeneratedRumble
