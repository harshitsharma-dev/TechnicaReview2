import React from 'react'
import ReactDOM from 'react-dom/client'
import LoginPage from './loginPage.jsx'
import Navbar from './Navbar.jsx'
import Signup from './SignupPage.jsx'
import Footer from './Footer.jsx'
import LoggedIN from './LoggedinPage.jsx'
import CartPage from './CartPage.jsx'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartPage />
  </React.StrictMode>,
)
