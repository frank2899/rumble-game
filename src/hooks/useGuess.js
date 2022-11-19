import { useValidGuess } from '../state/letters/hook'

const useGuess = () => {
    const [allValidGuess, setValidGuess, resetValidGuess] = useValidGuess()

    return { allValidGuess, setValidGuess, resetValidGuess }
}

export default useGuess
