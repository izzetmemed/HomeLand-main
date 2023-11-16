import React from 'react'
import { Routes,Route } from 'react-router-dom';
import Footer from '../footer';
import Header from '../header';
import Cards from '../mainpage/cards';
import Index from '../mainpage/index';
import Rent from '../mainpage/answer/rent';
import InsideCard from '../mainpage/İnsideCard';
import IndexAdmin from '../mainpage/ADMIN/indexAdmin';
import Login from '../mainpage/ADMIN/Login';
import MainAdmin from '../mainpage/ADMIN/mainAdmin';
import IndexHome from '../mainpage/ADMIN/indexrentHome';
import Costumer from '../mainpage/ADMIN/RentHomeCustomer' ;
import Own from '../mainpage/ADMIN/RentHomeOwn' ;
import Payment from '../mainpage/ADMIN/RentPayment' ;
import Basket from '../Sebet/Basket';
import CardsSell from '../SellHome/CardsSell';
import Sell from "../SellHome/Sell";
import Obyekt from "../Obyekt/CardsObyekt";
import ObyektForm from "../Obyekt/ObyektForm";
import Error from '../Error/Error';
const route = () => {
  return (
    <div >
        <Header/>
        <Routes>
          <Route path='/' element={<Index/>}>
              <Route index={true} element={<Cards/>}/>
                <Route path='/Kart' element={<InsideCard/>}/>
                <Route path='/satılıq-ev' element={<CardsSell/>}/>
                <Route path='/satılıq-ev/səbət' element={<Basket/>}/>
                  <Route  path='/kiraye-ev-form' element={<Rent/>}/>

                  <Route path="*" element={<Error />} />

                  <Route  path='/satılıq-ev-form' element={<Sell/>}/>
                  <Route  path='/səbət' element={<Basket/>}/>
                  <Route  path='/Obyekt' element={<Obyekt/>}/>
                  <Route  path='/Obyekt/səbət' element={<Basket/>}/>
                  <Route  path='/Obyekt-form' element={<ObyektForm/>}/>
                  <Route  path='/Login' element={<IndexAdmin/>}>
                   <Route index={true} element={<Login/>}/>
                    <Route path='MainAdmin' element={<IndexHome/>}>
                      <Route index={true} element={<MainAdmin/>}/>
                      
                      <Route path='Customer' element={<Costumer/>}/>
                      <Route path='Own' element={<Own/>}/>
                      <Route path='Payment' element={<Payment/>}/>
                    </Route>
                  </Route>
          </Route>
          
          
            
        </Routes>
        <Footer/>
    </div>
  )
}

export default route