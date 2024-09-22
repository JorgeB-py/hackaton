import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Primero from './Primero.jsx'
import Segundo from './Segundo.jsx'
import Tercero from './Tercero.jsx'
import Cuarto from './Cuarto.jsx'
import Quinto from './Quinto.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Quinto></Quinto>
  </StrictMode>,
)
