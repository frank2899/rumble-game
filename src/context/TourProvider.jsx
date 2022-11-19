import { Fragment, useState } from 'react'
import { TOUR_CONFIG } from '../constants/config'
import useClockTimer from '../hooks/useClockTimer'
import Tour from 'reactour'

const TourProvider = ({ children }) => {
    const { ResumeTimer } = useClockTimer()
    const [isTourOpen, setTourOpen] = useState(
        localStorage?.getItem('rumble_tuts') ? false : true,
    )

    const closeTour = () => {
        localStorage.setItem('rumble_tuts', 'done')
        setTourOpen(false)
        ResumeTimer()
    }

    return (
        <Fragment>
            {children}
            <Tour
                closeWithMask={false}
                onRequestClose={closeTour}
                steps={TOUR_CONFIG}
                isOpen={isTourOpen}
                rounded={5}
            />
        </Fragment>
    )
}

export default TourProvider
