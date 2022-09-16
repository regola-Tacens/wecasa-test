// library imports
import React from 'react'
import ReactDOM from 'react-dom/client'

// component imports
import App from './components/App'

// styles imports
import './styles/index.css'
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
