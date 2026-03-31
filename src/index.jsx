import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App'
import './index.css'
import './components/styles/fontawesome/css/font-awesome.min.css'

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);