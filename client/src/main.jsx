import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/js/boostrap.js'
import { BrowserRouter } from 'react-router-dom'

import i18n from './translation/i18n';
import { I18nextProvider } from 'react-i18next';

// redux
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </I18nextProvider>
  </Provider>
    
    
  // </React.StrictMode>,
)
