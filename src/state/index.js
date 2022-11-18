import { configureStore } from '@reduxjs/toolkit'
import theme from './theme/reducer'
import letters from './letters/reducer'
import timer from './timer/reducer'

const store = configureStore({
    reducer: {
        theme,
        letters,
        timer,
    },
})

export default store
