// // eslint-disable-next-line no-unused-vars
// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import {BrowserRouter} from 'react-router-dom'
// import StoreContextProvider from './context/StoreContext.jsx'

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <BrowserRouter basename="/Food-delivery-frontend">
//     <StoreContextProvider>
//       <App />
//     </StoreContextProvider>
//   </BrowserRouter>
// );
// eslint-disable-next-line no-unused-vars
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import StoreContextProvider from './context/StoreContext.jsx'

// Dynamic basename: GitHub Pages ke liye repo name, Vercel/Local ke liye empty string
const baseName = window.location.hostname.includes('github.io') 
                 ? "/Food-delivery-frontend" 
                 : "";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename={baseName}>
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </BrowserRouter>
);