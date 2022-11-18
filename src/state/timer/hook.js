import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateTimer as updateTimerAction } from './action'

export const useTimer = () => {
    const dispatch = useDispatch()
    const timeRemaining = useSelector((state) => state.timer.time)

    const updateTimer = useCallback(
        (timer) => {
            dispatch(updateTimerAction({ timer }))
        },
        [dispatch],
    )

    return [timeRemaining, updateTimer]
}
