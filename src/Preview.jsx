import { ArrowCounterclockwise } from 'react-bootstrap-icons'
import styled from 'styled-components'
import useGuessPoints from './hooks/useGuessPoints'

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 100;
    width: 100%;
    height: 100vh;
    padding: 1rem;
`

const AppTitle = styled.h5`
    text-align: center;
    color: ${({ theme }) => theme.black};
    margin-bottom: 0.3em;
    font-family: 'Archivo Black', sans-serif;
    padding-bottom: 20px;
    border-bottom: 1px solid #cecece;
`

const ScoreWord = styled.h1`
    text-align: center;
    color: ${({ theme }) => theme.orange};
    font-family: 'Archivo Black', sans-serif;
    font-size: 0.9em;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`

const PreviewCard = styled.div`
    width: 100%;
    max-width: 450px;
    background-color: ${({ theme }) => theme.white};
    padding: 20px 20px 60px 20px;
    border-radius: 15px;
    box-shadow: 0 0 3px #cecece;
`

const FinalScore = styled.div`
    text-align: center;
    color: ${({ theme }) => theme.orange};
    font-family: 'Archivo Black', sans-serif;
    font-size: 3em;
    padding: 30px 0;
`

const Preview = (props) => {
    const { points } = useGuessPoints()

    // Soon will be replaced by useRestartGame hook!!
    const refresh = () => {
        location.reload()
    }

    return (
        <Wrapper>
            <PreviewCard>
                <AppTitle>Time Runs out!</AppTitle>
                <FinalScore>{points}</FinalScore>
                <ScoreWord>
                    FINAL SCORE{' '}
                    <ArrowCounterclockwise
                        onClick={() => refresh()}
                        style={{
                            cursor: 'pointer',
                            fontSize: '1.5em',
                            fontWeight: 'bolder',
                            marginTop: '-3px',
                        }}
                    />
                </ScoreWord>
            </PreviewCard>
        </Wrapper>
    )
}

export default Preview
