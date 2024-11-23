import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './app/stote.ts'
import { Toaster } from 'react-hot-toast';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <App />
    <Toaster position="top-center" reverseOrder={false} />
    </Provider>
  </StrictMode>,
)
