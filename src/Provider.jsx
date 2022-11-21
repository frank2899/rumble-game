import store from './state'
import { Provider } from 'react-redux'
import ThemeProviderWrapper from './context/ThemeProvider'

const Providers = ({ children }) => {
    return (
        <Provider store={store}>
            <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
        </Provider>
    )
}

export default Providers
