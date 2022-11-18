import { usePoints } from '../state/letters/hook'

const useGuessPoints = () => {
    const [points, updatePoints] = usePoints()

    return { points, updatePoints }
}

export default useGuessPoints
