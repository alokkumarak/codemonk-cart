import React from 'react';
import './App.css';
import CartPage from './components/CartPage';
import Navbar from './components/Navbar';
import Steppers from "./components/Stepper";
import Footer from "./components/Footer";

import data from './data.json'

function App() {

  return (
    <>
      <Navbar />
      <Steppers />
      <CartPage discount={data.discount} products={data.products}  pincode={data.pincode}/>
      <Footer />
    </>
  );
}

export default App;
