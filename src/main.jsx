import React from 'react'
import ReactDOM from 'react-dom/client'
import { ParallaxProvider } from 'react-scroll-parallax'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router , Route , Routes} from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ParallaxProvider>
    <Router>
     <Routes>
      <Route path='/*' element={<App />} />
     </Routes>
    </Router>
      </ParallaxProvider>
  </React.StrictMode>,
)
