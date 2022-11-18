import styled from 'styled-components'
import useClockTimer from '../../hooks/useClockTimer'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { DEFAULT_TIMER } from '../../constants/config'

export const Wrapper = styled.div`
    width: 30px;
`

const CountdownTimer = (props) => {
    const { timeRemaining } = useClockTimer()

    return (
        <Wrapper {...props}>
            <CircularProgressbar
                value={timeRemaining}
                maxValue={DEFAULT_TIMER}
                strokeWidth={50}
                size={10}
                styles={buildStyles({
                    strokeLinecap: 'butt',
                })}
            />
        </Wrapper>
    )
}

export default CountdownTimer
