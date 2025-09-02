import { Analytics } from '@vercel/analytics/react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from '@/App.tsx'
import GlobalStyle from '@/styles/GlobalStyle.tsx'
import { store } from './store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
    <Analytics />
  </Provider>
)
