import styled from 'styled-components'
import overlayBg from '../image/overlayBg.png'

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    background-color: ${({ theme }) => theme.black};
    z-index: 100;
    width: 100%;
    height: 100vh;

    &:before {
        content: '';
        width: 100%;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 99;
        background-color: ${({ theme }) => theme.background};
        background-attachment: fixed;
        background-size: auto 1000px;
        background-position: center;
    }
`

const Title = styled.div`
    text-align: center;
    color: ${({ theme }) => theme.orange};
    font-family: 'Archivo Black', sans-serif;
    font-size: 2em;
    border-bottom: 1px solid #cecece;
`

const SplashScreen = (props) => {
    return (
        <Wrapper>
            <Title>RUMBLE</Title>
        </Wrapper>
    )
}

export default SplashScreen
