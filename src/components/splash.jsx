import styled from 'styled-components'
import overlayBg from '../image/overlayBg.png'
import Motion from './Motion'

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    background-color: ${({ theme }) => theme.background};
    z-index: 100;
    width: 100%;
    height: 100vh;

    &:before {
        content: '';
        width: 100%;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 120;
        background: url(${overlayBg}) no-repeat;
        background-attachment: fixed;
        background-size: auto 1000px;
        background-position: center;
    }
`

const Title = styled.div`
    text-align: center;
    color: ${({ theme }) => theme.orange};
    font-family: 'Archivo Black', sans-serif;
    font-size: 3em;
    z-index: 110;
`

const SplashScreen = () => {
    return (
        <Motion>
            <Wrapper>
                <Title>RUMBLE</Title>
            </Wrapper>
        </Motion>
    )
}

export default SplashScreen
