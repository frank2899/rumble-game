import { Suspense, useEffect, useState } from 'react'
import styled from 'styled-components'
import AnswerInput from './components/Inputs'
import TextTiles from './components/Tiles'
import useGeneratedRumble from './hooks/useGeneratedRumble'
import useGuess from './hooks/useGuess'
import useGuessPoints from './hooks/useGuessPoints'
import useTheme from './hooks/useTheme'
import GlobalStyle from './theme/global.style'
import { jumbleRumbleLetters } from './utils/generate.rumble'
import { DarkModeToggle } from '@anatoliygatt/dark-mode-toggle'
import { BrightnessHigh, CupHot, Info, Moon } from 'react-bootstrap-icons'
import CountdownTimer from './components/Timer'
import Preview from './Preview'
import useClockTimer from './hooks/useClockTimer'
import SplashScreen from './components/splash'
import Tour from 'reactour'
import Footer from './components/Footer'

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

const PageWrapper = styled.div`
    width: 100%;
    max-width: 600px;
    margin: auto;
    padding-bottom: 150px;
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

const Tags = styled.p`
    display: block;
    border-radius: 5px;
    padding: 4px 10px;
    background-color: ${({ theme }) => theme.invertedContrast};
    color: ${({ theme }) => theme.contrast};
    font-size: 0.8em;
    cursor: pointer;
    user-select: none;
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

const DonationBtn = styled.a`
    text-decoration: none;
    display: block;
    padding: 10px 15px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.invertedBackground};
    color: ${({ theme }) => theme.contrast};
    font-size: 0.8em;
    cursor: pointer;
`
const tourConfig = [
    {
        content: `Hello newbiee!, here's a quick tour for you. Hope it helps!`,
    },
    {
        selector: '[data-tut="reactour__timer_points"]',
        content: `We have a Clock timer here, for every correct words you submit it resets the timer and also you will gain points!`,
    },
    {
        selector: '[data-tut="reactour__field"]',
        content: `You will input the letters here.`,
    },
    {
        selector: '[data-tut="reactour__tile"]',
        content: `These are shuffled and random letters for you, Try to submit many words as much as you can with this given letters, and if you dont feel like typing, you can tap the tiles to input your letters on field.`,
    },
    {
        selector: '[data-tut="reactour__eraser"]',
        content: `Just in case you're in a hurry! here's the eraser tool for faster clear field ;)`,
    },
    {
        selector: '[data-tut="reactour__last"]',
        content: `Yaaay!! Dark mode and light mode is also available , Dont forget to help me buy coffee it boost my energy to build more awesome applications! have fun!`,
    },
]

const App = () => {
    const { isDark, toggleTheme, theme } = useTheme()
    const { generatedLetters, setGeneratedLetters } = useGeneratedRumble()
    const { allValidGuess } = useGuess()
    const { points } = useGuessPoints()
    const { timeRemaining, ResumeTimer } = useClockTimer()
    const [isTourOpen, setTourOpen] = useState(
        localStorage?.getItem('rumble_tuts') ? false : true,
    )

    useEffect(() => {
        setGeneratedLetters(jumbleRumbleLetters())
    }, [])

    const closeTour = () => {
        localStorage.setItem('rumble_tuts', 'done')
        setTourOpen(false)
        ResumeTimer()
    }

    return (
        <Suspense fallback={<SplashScreen />}>
            <PageWrapper>
                <GlobalStyle />

                <Flex justifyContent="space-between" data-tut="reactour__last">
                    <DarkModeToggle
                        mode={isDark ? 'dark' : 'light'}
                        light={
                            <BrightnessHigh
                                color={theme.text}
                                style={{ marginBottom: '-1.5px' }}
                            />
                        }
                        dark={
                            <Moon
                                color={theme.text}
                                style={{ marginBottom: '-1.5px' }}
                            />
                        }
                        size="sm"
                        inactiveTrackColor={theme.dark}
                        inactiveTrackColorOnHover="#f8fafc"
                        inactiveTrackColorOnActive={theme.dark}
                        activeTrackColor={theme.dark}
                        activeTrackColorOnHover="#1e293b"
                        activeTrackColorOnActive={theme.primary}
                        inactiveThumbColor="#1e293b"
                        activeThumbColor={theme.primary}
                        onChange={() => toggleTheme()}
                    />
                    <DonationBtn
                        target="_black"
                        href="https://www.paypal.com/donate/?hosted_button_id=3D9Q2E22ADJUA"
                    >
                        DONATE <CupHot style={{ marginBottom: '-2px' }} />
                    </DonationBtn>
                </Flex>

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
                        return (
                            <Tags key={i} className="code">
                                {e}{' '}
                                <Info
                                    color={theme.contrast}
                                    cursor="pointer"
                                    style={{ margin: '0 0 -1px -3px' }}
                                />
                            </Tags>
                        )
                    })}
                </TagsWrapper>

                <TextTiles
                    data={generatedLetters}
                    fontSize="2rem"
                    data-tut="reactour__tile"
                />

                {timeRemaining ? '' : <Preview />}
            </PageWrapper>

            <Tour
                closeWithMask={false}
                onRequestClose={closeTour}
                steps={tourConfig}
                isOpen={isTourOpen}
                rounded={5}
            />
            <Footer />
        </Suspense>
    )
}

export default App
