import React from 'react'
import Section from '../section';
import Search  from '../search';
import { Outlet } from 'react-router-dom';
const cards = () => {
  return (
    <div>
      <Search/>
      <div className='d-flex flex-wrap'>
           <Section/>
           <Section/>
           <Section/>
           <Section/>
           <Section/>
           <Section/>
           <Section/>
           <Section/>
           <Section/>
           <Section/>
           <Section/>
           <Section/>
           <Section/>
           <Section/>
           <Section/>
           <Section/>
      </div>
      <Outlet/>
    </div>
  )
}

export default cards