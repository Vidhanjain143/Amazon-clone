import React from 'react'
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import styled from 'styled-components';
import Home from "./components/Home";
import Login from'./components/Login';
import Signup from './components/Signup';
import Checkout from './components/Checkout';
import Address from './components/Address';
import Payment from './components/Payment';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import AddProduct from './components/AddProduct';

const promise = loadStripe(
  'pk_test_51MuThVSGOV4tg1qm2LK4nH8g1tvABksefH360qkNZkYMxWyimedMMGMVEScASP3BqCwO4K6qK2esc06bPyQeeyHA00KFMhywl5'
)

const App = () => {
  return (
   <Router>
    <Container>
      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/login" element ={<Login/>}/>
        <Route path="/signup" element ={<Signup/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/address' element={<Address/>}/>
        <Route path='/payment' element={
                  <Elements stripe={promise}><Payment/></Elements>}/>
        <Route path='/add' element={<AddProduct/>}/>          
      </Routes>
      </Container>
   </Router>
  )
}
const Container=styled.div`
width: 98.9vw;
`;

export default App
