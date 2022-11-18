import { useEffect, useState } from 'react'
import { DEFAULT_TIMER } from '../constants/config'
import { useTimer } from '../state/timer/hook'

const useClockTimer = () => {
    const [timeRemaining, updateTimer] = useTimer()
    const restartTimer = () => updateTimer(DEFAULT_TIMER)
    const [isPause, setPause] = useState(true)

    const PauseTimer = () => setPause(true)
    const ResumeTimer = () => setPause(false)

    useEffect(() => {
        if (localStorage?.getItem('rumble_tuts')) return ResumeTimer()

        PauseTimer()
    }, [isPause])

    useEffect(() => {
        if (!timeRemaining || isPause) return

        const timer = setTimeout(() => {
            updateTimer(timeRemaining - 1)
        }, 1500)

        return () => clearTimeout(timer)
    }, [timeRemaining, isPause])

    return {
        timeRemaining,
        updateTimer,
        restartTimer,
        isPause,
        ResumeTimer,
        PauseTimer,
    }
}

export default useClockTimer
