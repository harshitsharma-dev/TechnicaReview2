import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Navbar.jsx'
import Product from './ProductPage.jsx'
import Footer from './Footer.jsx'
// import './index.css'
var myData = localStorage['objectToPass'];
myData = parseInt(myData)

ReactDOM.createRoot(document.getElementById('root')).render(
    
  <React.StrictMode>
    <Navbar/>
    <Product id={myData}/>
    <Footer/>
  </React.StrictMode>,
)
