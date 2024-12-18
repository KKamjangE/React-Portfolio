import ReactDOM from 'react-dom/client'
import App from '@/App.tsx'
import GlobalStyle from '@/styles/GlobalStyle.tsx'
import { Provider } from 'react-redux'
import { store } from './store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <GlobalStyle />
        <App />
    </Provider>
)
