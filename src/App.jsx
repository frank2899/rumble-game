import { lazy, Suspense } from 'react'
import styled from 'styled-components'
import SplashScreen from './components/splash'
import Footer from './components/Footer'
import GlobalStyle from './theme/global.style'
import { Navigate, Route, BrowserRouter as Router } from 'react-router-dom'
import Nav from './components/Nav'
import PageTransition from './context/PageTransition'
import Motion from './components/Motion'

const PageWrapper = styled.div`
    width: 100%;
    max-width: 600px;
    margin: auto;
    padding-bottom: 150px;
`

const Home = lazy(() => import('./views/Home'))
const Game = lazy(() => import('./views/Game'))

const App = () => {
    return (
        <Router>
            <GlobalStyle />
            <Nav />

            <Suspense fallback={<SplashScreen />}>
                <PageWrapper>
                    <PageTransition>
                        <Route
                            path="/rumble-game"
                            element={
                                <Motion>
                                    <Home />
                                </Motion>
                            }
                        />
                        <Route
                            path="/rumble-game/play"
                            element={
                                <Motion>
                                    <Game />
                                </Motion>
                            }
                        />

                        <Route
                            path="*"
                            element={
                                <Navigate to="/rumble-game" replace={true} />
                            }
                        />
                    </PageTransition>
                </PageWrapper>
            </Suspense>

            <Footer />
        </Router>
    )
}

export default App
