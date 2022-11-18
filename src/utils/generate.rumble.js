import randomWords from 'random-words'

export const REQUIRED_LENGTH = 10

export const generateWord = randomWords({
    exactly: 1,
    formatter: (word) => word.toUpperCase(),
})

export const randomLetters = (counts) => {
    let text = ''
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    for (let i = 0; i < counts; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length))

    return text
}

export const jumbleRumbleLetters = () => {
    let toShuffle = generateWord[0]

    if (REQUIRED_LENGTH - toShuffle.length > 0)
        toShuffle =
            toShuffle + randomLetters(REQUIRED_LENGTH - toShuffle.length)

    return toShuffle?.split('')?.sort(() => {
        return Math.random() - 0.5
    })
}
