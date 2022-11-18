import { useValidGuess } from '../state/letters/hook'

const useGuess = () => {
    const [allValidGuess, setValidGuess] = useValidGuess()

    return { allValidGuess, setValidGuess }
}

export default useGuess
