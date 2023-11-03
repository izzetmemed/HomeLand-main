import React from 'react'
import { Routes,Route } from 'react-router-dom';
import Footer from '../footer';
import Header from '../header';
import Cards from '../cards';
import InsideCard from '../İnsideCard';
const route = () => {
  return (
    <div>
        <Header/>
        <Routes>
            <Route path='/' element={<Cards/>}>
                <Route path='/Kart' element={<InsideCard/>}/>
            </Route>
            
        </Routes>
        <Footer/>
    </div>
  )
}

export default route