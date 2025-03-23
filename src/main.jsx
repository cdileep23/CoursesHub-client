import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { appStore } from './store/store'
import ThemeProvider from './components/theme-provider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={appStore}>
      <ThemeProvider>
      <App />
      </ThemeProvider>
 
    </Provider>
    
  </StrictMode>,
)
