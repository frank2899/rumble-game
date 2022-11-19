import { Suspense, useEffect } from 'react'
import styled from 'styled-components'
import AnswerInput from './components/Inputs'
import TextTiles from './components/Tiles'
import useGeneratedRumble from './hooks/useGeneratedRumble'
import useGuess from './hooks/useGuess'
import useGuessPoints from './hooks/useGuessPoints'
import useTheme from './hooks/useTheme'
import GlobalStyle from './theme/global.style'
import { DarkModeToggle } from '@anatoliygatt/dark-mode-toggle'
import { BrightnessHigh, CupHot, Info, Moon } from 'react-bootstrap-icons'
import CountdownTimer from './components/Timer'
import Preview from './Preview'
import useClockTimer from './hooks/useClockTimer'
import SplashScreen from './components/splash'
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

const App = () => {
    const { isDark, toggleTheme, theme } = useTheme()
    const { createJumbleLetters } = useGeneratedRumble()
    const { allValidGuess } = useGuess()
    const { points } = useGuessPoints()
    const { timeRemaining } = useClockTimer()

    useEffect(() => {
        createJumbleLetters()
    }, [])

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

                <TextTiles fontSize="2rem" data-tut="reactour__tile" />

                {timeRemaining ? '' : <Preview />}
            </PageWrapper>
            <Footer />
        </Suspense>
    )
}

export default App
