import React from 'react'
import SectionObyect from './SectionObyekt';
import SearchObyekt  from './searchObyekt';
import { Outlet } from 'react-router-dom';
const cardsObyekt = () => {
  return (
    <div>
      <SearchObyekt/>
      <div className='d-flex flex-wrap'>
            <SectionObyect id={1} type={"obyekt"} priceHome={1000} address={"Alhahh dghggd"} SellorRent={"Satılıq"} Region={"Binəqədi"} MetroHome={"28 May"} roomHome={4} measureHome={80} dateTime={"14 11 2024 21:21"}  />
            <SectionObyect id={2} type={"obyekt"} priceHome={1000} address={"Alhahh dghggd"} SellorRent={"Satılıq"} Region={"Binəqədi"} MetroHome={"28 May"} roomHome={4} measureHome={80} dateTime={"14 11 2024 21:21"} />
            <SectionObyect id={3} type={"obyekt"} priceHome={100000} address={"Alhahh dghggd"} SellorRent={"Satılıq"} Region={"Binəqədi"} MetroHome={"28 May"} roomHome={4} measureHome={80} dateTime={"14 11 2024 21:21"} />
            <SectionObyect id={4} type={"obyekt"} priceHome={10000} address={"Alhahh dghggd"} SellorRent={"Satılıq"} Region={"Binəqədi"} MetroHome={"28 May"} roomHome={4} measureHome={80} dateTime={"14 11 2024 21:21"} />
            <SectionObyect id={5} type={"obyekt"} priceHome={100000} address={"Alhahh dghggd"} SellorRent={"Satılıq"} Region={"Binəqədi"} MetroHome={"28 May"} roomHome={4} measureHome={80} dateTime={"14 11 2024 21:21"} />
            <SectionObyect id={6} type={"obyekt"} priceHome={1000} address={"Alhahh dghggd"} SellorRent={"Satılıq"} Region={"Binəqədi"} MetroHome={"28 May"} roomHome={4} measureHome={80} dateTime={"14 11 2024 21:21"} />
            <SectionObyect id={7} type={"obyekt"} priceHome={100000} address={"Alhahh dghggd"} SellorRent={"Satılıq"} Region={"Binəqədi"} MetroHome={"28 May"} roomHome={4} measureHome={80} dateTime={"14 11 2024 21:21"} />
            <SectionObyect id={8} type={"obyekt"} priceHome={10000} address={"Alhahh dghggd"} SellorRent={"Satılıq"} Region={"Binəqədi"} MetroHome={"28 May"} roomHome={4} measureHome={80} dateTime={"14 11 2024 21:21"} />
      </div>
      <Outlet/>
    </div>
  )
}

export default cardsObyekt