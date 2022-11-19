import store from './state'
import { Provider } from 'react-redux'
import ThemeProviderWrapper from './context/ThemeProvider'
import TourProvider from './context/TourProvider'

const Providers = ({ children }) => {
    return (
        <Provider store={store}>
            <TourProvider>
                <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
            </TourProvider>
        </Provider>
    )
}

export default Providers
