import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'


import AppRoutes from './Routes.jsx'
import store from './appstore/Store.jsx'
import AuthContext from './components/AuthContext.jsx';


createRoot(document.getElementById('root')).render(
 <AuthContext>

 <BrowserRouter>
 <StrictMode>
  <Provider store={store}>

<AppRoutes/>

 
  </Provider>
  </StrictMode>
 </BrowserRouter>
 </AuthContext>
)
