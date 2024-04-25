import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx' 
import './index.css'
import './styles.css'

const appElement = document.getElementById('root')

const root = ReactDOM.createRoot(appElement)

root.render(<App />)
