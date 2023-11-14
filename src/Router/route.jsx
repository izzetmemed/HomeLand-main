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
const route = () => {
  return (
    <div >
        <Header/>
        <Routes>
          <Route path='/' element={<Index/>}>
              <Route index={true} element={<Cards/>}/>
                <Route path='/Kart' element={<InsideCard/>}/>
                  <Route  path='/form' element={<Rent/>}/>
                  <Route  path='/səbət' element={<Basket/>}/>
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