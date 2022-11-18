import { DICTIONARY } from '../constants/endpoints'

export const useDictionary = async (word) => {
    const url = await fetch(DICTIONARY + word)
    const tojson = await url.json()

    return tojson
}

export default useDictionary
