import './main.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import Provider from './provider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider />
  </React.StrictMode>,
)
