import { DICTIONARY } from '../constants/endpoints'

export const useDictionary = async (word) => {
    try {
        const url = await fetch(DICTIONARY + word)
        const tojson = await url.json()

        return tojson
    } catch (error) {
        console.error(
            'Error occured on useDictionary() hook, while fetch definition of ' +
                props.data,
        )
        console.error(error)
    }
}

export default useDictionary
