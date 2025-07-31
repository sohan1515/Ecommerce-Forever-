import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as BrowerserRouter } from 'react-router-dom'
import ShopContextProvider from './context/ShopContextProvider.jsx'; 


createRoot(document.getElementById('root')).render(
  <BrowerserRouter>
      <ShopContextProvider>
          <App />
      </ShopContextProvider>
  </BrowerserRouter>,
)
