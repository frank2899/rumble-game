import { useEffect } from 'react'
import styled from 'styled-components'
import AnswerInput from '../components/Inputs'
import TextTiles from '../components/Tiles'
import useGeneratedRumble from '../hooks/useGeneratedRumble'
import useGuess from '../hooks/useGuess'
import useGuessPoints from '../hooks/useGuessPoints'
import CountdownTimer from '../components/Timer'
import useClockTimer from '../hooks/useClockTimer'
import GuessTags from '../components/GuessTag'
import TourProvider from '../context/TourProvider'
import Preview from '../Preview'

const AppTitle = styled.h1`
    text-align: center;
    color: ${({ theme }) => theme.orange};
    margin-top: 3em;
    margin-bottom: 0.3em;
    font-family: 'Archivo Black', sans-serif;
`

const PointsText = styled.h4`
    color: ${({ theme }) => theme.orange};
    text-align: center;
`

const TagsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    max-width: 400px;
    justify-content: center;
    margin: 0 auto 2.5rem auto;
    gap: 5px;
`

const Flex = styled.div`
    display: flex;
    ${({ justifyContent, alignItems, gap, flexDirection, flexWrap }) => `
    ${justifyContent && `justify-content: ${justifyContent};`}
    ${alignItems && `align-items: ${alignItems};`}
    ${gap && `gap: ${gap};`}
    ${flexDirection && `flex-direction: ${flexDirection};`}
    flex-wrap: wrap;
  `}
`

const Game = () => {
    const { createJumbleLetters } = useGeneratedRumble()
    const { allValidGuess } = useGuess()
    const { points } = useGuessPoints()
    const { timeRemaining } = useClockTimer()

    useEffect(() => {
        createJumbleLetters()
    }, [])

    return (
        <TourProvider>
            <AppTitle>RUMBLES</AppTitle>

            <Flex
                justifyContent="center"
                alignItems="center"
                gap="10px"
                style={{
                    margin: '2em 0 4em 0',
                    transform: 'translate(-8px,0)',
                }}
                data-tut="reactour__timer_points"
            >
                <CountdownTimer />
                <PointsText>POINTS : {points}</PointsText>
            </Flex>

            <AnswerInput data-tut="reactour__field" />
            <TagsWrapper>
                {allValidGuess.map((e, i) => {
                    return <GuessTags data={e} key={i} />
                })}
            </TagsWrapper>

            <TextTiles fontSize="2rem" data-tut="reactour__tile" />

            {timeRemaining ? '' : <Preview />}
        </TourProvider>
    )
}

export default Game
