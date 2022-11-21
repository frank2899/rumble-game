import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Tile } from '../components/Tiles'

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 80vh;
`

const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Home = (props) => {
    return (
        <Wrapper>
            <Section>
                <center>
                    <Link
                        to="/rumble-game/play"
                        className="text-decoration-none"
                    >
                        <Tile width="200px">PLAY RUMBLE</Tile>
                    </Link>
                </center>
            </Section>
        </Wrapper>
    )
}

export default Home
