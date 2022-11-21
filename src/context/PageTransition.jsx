import { useLocation, Routes } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Motion from '../components/Motion'

const PageTransition = (props) => {
    const location = useLocation()

    return (
        <AnimatePresence>
            <Motion>
                <Routes location={location} key={location.pathname}>
                    {props.children}
                </Routes>
            </Motion>
        </AnimatePresence>
    )
}

export default PageTransition
