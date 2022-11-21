import { Fragment, useState } from 'react'
import { LS_TOUR, TOUR_CONFIG } from '../constants/config'
import useClockTimer from '../hooks/useClockTimer'
import Tour from 'reactour'

const TourProvider = ({ children }) => {
    const { ResumeTimer } = useClockTimer()
    const [isTourOpen, setTourOpen] = useState(
        localStorage?.getItem(LS_TOUR) ? false : true,
    )

    const closeTour = () => {
        localStorage.setItem(LS_TOUR, 'done')
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
