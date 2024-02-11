
import { BrowserRouter } from 'react-router-dom'
import { BaseTheme } from './theme'
import { Provider } from 'react-redux'
import store from '../store/store'

export const MainContainer = (props: any) => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <BaseTheme>{props.children}</BaseTheme>
            </BrowserRouter>
        </Provider>
    )
}
