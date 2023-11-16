import React from 'react'
import SectionSell from './SectionSell';
import Search  from './searchSell';
import { Outlet } from 'react-router-dom';
const cardsSell = () => {
  return (
    <div>
      <Search/>
      <div className='d-flex flex-wrap'>
            <SectionSell id={1}type={"sellHome"}priceHome={100000} address={"Alhahh dghggd"} MetroHome={"28 May"} roomHome={4}kindofHome={"Yeni tikili bina evi"} measureHome={80} Sənəd={'kupca var'} dateTime={"14 11 2024 21:21"} />
            <SectionSell id={2}type={"sellHome"}priceHome={100000} address={"Alhahh dghggd"} MetroHome={"28 May"} roomHome={4}kindofHome={"Yeni tikili bina evi"} measureHome={80} Sənəd={'kupca var'} dateTime={"14 11 2024 21:21"} />
            <SectionSell id={3}type={"sellHome"}priceHome={100000} address={"Alhahh dghggd"} MetroHome={"28 May"} roomHome={4}kindofHome={"Yeni tikili bina evi"} measureHome={80} Sənəd={'kupca var'} dateTime={"14 11 2024 21:21"} />
            <SectionSell id={4}type={"sellHome"}priceHome={100000} address={"Alhahh dghggd"} MetroHome={"28 May"} roomHome={4}kindofHome={"Yeni tikili bina evi"} measureHome={80} Sənəd={'kupca var'} dateTime={"14 11 2024 21:21"} />
            <SectionSell id={5}type={"sellHome"}priceHome={100000} address={"Alhahh dghggd"} MetroHome={"28 May"} roomHome={4}kindofHome={"Yeni tikili bina evi"} measureHome={80} Sənəd={'kupca var'} dateTime={"14 11 2024 21:21"} />
            <SectionSell id={6}type={"sellHome"}priceHome={100000} address={"Alhahh dghggd"} MetroHome={"28 May"} roomHome={4}kindofHome={"Yeni tikili bina evi"} measureHome={80} Sənəd={'kupca var'} dateTime={"14 11 2024 21:21"} />
            <SectionSell id={7}type={"sellHome"}priceHome={100000} address={"Alhahh dghggd"} MetroHome={"28 May"} roomHome={4}kindofHome={"Yeni tikili bina evi"} measureHome={80} Sənəd={'kupca var'} dateTime={"14 11 2024 21:21"} />
            <SectionSell id={8}type={"sellHome"}priceHome={100000} address={"Alhahh dghggd"} MetroHome={"28 May"} roomHome={4}kindofHome={"Yeni tikili bina evi"} measureHome={80} Sənəd={'kupca var'} dateTime={"14 11 2024 21:21"} />
      </div>
      <Outlet/>
    </div>
  )
}

export default cardsSell