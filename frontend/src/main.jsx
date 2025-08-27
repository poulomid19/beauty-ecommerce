import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './components/context/Authcontext.jsx'
import { ShopContextProvider } from './components/context/ShopContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShopContextProvider>
    <AuthProvider>
    <App />
    </AuthProvider>
     </ShopContextProvider>
  </StrictMode>
)
