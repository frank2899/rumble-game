import { useEffect } from 'react'
import styled from 'styled-components'
import { DEFAULT_TIMER } from '../../constants/config'
import useClockTimer from '../../hooks/useClockTimer'
import useGeneratedRumble from '../../hooks/useGeneratedRumble'
import useGuess from '../../hooks/useGuess'
import useGuessPoints from '../../hooks/useGuessPoints'
import useInputField from '../../hooks/useInputWords'
import { validateGuess } from '../../utils/checker'
import EnterButton from './components/button'

export const CustomInput = styled.input`
    border: none;
    outline: none;
    transition: 0.3s all ease;
    dipslay: block;
    width: 100%;
    padding: 0;
    letter-spacing: 0.5rem;
    font-size: 1.5rem;
    background: ${({ theme }) => theme.white};
`

export const CustomWrapper = styled.div`
    display: flex;
    border-radius: 10px;
    border: 0.3px solid ${({ theme }) => theme.primary};
    margin: 1rem auto;
    padding: 1rem;
    background: ${({ theme }) => theme.white};
    box-shadow: 0px 0px 10px -4px ${({ theme }) => theme.primary};
    width: 100%;
    max-width: 400px;
    gap: 5px;
`

const AnswerInput = (props) => {
    const { inputWords, setInputWords } = useInputField()
    const { generatedLetters } = useGeneratedRumble()
    const { allValidGuess, setValidGuess } = useGuess()
    const { updatePoints } = useGuessPoints()
    const { timeRemaining, restartTimer } = useClockTimer()

    const validateInputs = () => {
        let newValue = []
        let currentValue = JSON.parse(JSON.stringify(inputWords)).split('')
        let getGeneratedLetters = JSON.parse(JSON.stringify(generatedLetters))

        currentValue.forEach((letter) => {
            let index = getGeneratedLetters.indexOf(letter.toUpperCase())
            if (index !== -1) {
                getGeneratedLetters.splice(index, 1)
                newValue.push(letter)
            }
        })

        setInputWords(newValue.join(''))
    }

    const handleSubmit = async () => {
        if (!inputWords) return
        if (timeRemaining === 0) return console.log('NO TIME LEFT!')

        if (allValidGuess.indexOf(inputWords) !== -1) {
            updatePoints('DECREMENT')
            console.log('WORD ALREADY GUESSED')
        } else {
            if (validateGuess(inputWords)) {
                setValidGuess(inputWords)
                updatePoints('INCREMENT')
                if (timeRemaining < DEFAULT_TIMER) restartTimer()
            } else {
                updatePoints('DECREMENT')
                console.log('INVALID WORD GUESS')
            }
        }

        setInputWords('')
    }

    useEffect(() => {
        validateInputs()
    }, [inputWords])

    return (
        <CustomWrapper {...props}>
            <CustomInput
                value={inputWords}
                onChange={(e) => {
                    setInputWords(e.target.value.toUpperCase())
                }}
            />
            <EnterButton onClick={() => handleSubmit()} />
        </CustomWrapper>
    )
}

export default AnswerInput
