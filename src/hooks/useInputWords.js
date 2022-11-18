import { useInputWords } from '../state/letters/hook'

const useInputField = () => {
    const [inputWords, setInputWords] = useInputWords()

    return { inputWords, setInputWords }
}

export default useInputField
