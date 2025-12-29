import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './reset.css'
import './index.css'
import './skills.css'
import './projects.css'
import './cursor.css'
import './intro.css'
import App from './App.jsx'
import Data from './DataContext/Data.jsx'

createRoot(document.getElementById('root')).render(
  <Data>
    <App/>
  </Data>
)
