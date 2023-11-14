import React from 'react'
import Section from '../section';
import Search  from '../search';
import { Outlet } from 'react-router-dom';
const cards = () => {
  return (
    <div>
      <Search/>
      <div className='d-flex flex-wrap'>
           <Section priceHome={400} address="Baku, eliiskenderov kucesi 1" MetroHome="Elmler" Items={"orta esyali"} roomHome={4} WhoCanTake="Telebe ve aile" measureHome={78} dateTime={"21.05.2022 21:21"}/>
           <Section priceHome={600} address="Baku, eliiskenderov kucesi 1" MetroHome="Elmler" Items={"orta esyali"} roomHome={4} WhoCanTake="Telebe ve aile" measureHome={78} dateTime={"21.05.2022 21:21"}/>
           <Section priceHome={500} address="Baku, eliiskenderov kucesi 1" MetroHome="Elmler" Items={"orta esyali"} roomHome={4} WhoCanTake="Telebe ve aile" measureHome={78} dateTime={"21.05.2022 21:21"}/>
           <Section priceHome={500} address="Baku, eliiskenderov kucesi 1" MetroHome="Elmler" Items={"orta esyali"} roomHome={4} WhoCanTake="Telebe ve aile" measureHome={78} dateTime={"21.05.2022 21:21"}/>
           <Section priceHome={500} address="Baku, eliiskenderov kucesi 1" MetroHome="Elmler" Items={"orta esyali"} roomHome={4} WhoCanTake="Telebe ve aile" measureHome={78} dateTime={"21.05.2022 21:21"}/>
           <Section priceHome={500} address="Baku, eliiskenderov kucesi 1" MetroHome="Elmler" Items={"orta esyali"} roomHome={4} WhoCanTake="Telebe ve aile" measureHome={78} dateTime={"21.05.2022 21:21"}/>
           <Section priceHome={500} address="Baku, eliiskenderov kucesi 1" MetroHome="Elmler" Items={"orta esyali"} roomHome={4} WhoCanTake="Telebe ve aile" measureHome={78} dateTime={"21.05.2022 21:21"}/>
           <Section priceHome={500} address="Baku, eliiskenderov kucesi 1" MetroHome="Elmler" Items={"orta esyali"} roomHome={4} WhoCanTake="Telebe ve aile" measureHome={78} dateTime={"21.05.2022 21:21"}/>
           <Section priceHome={500} address="Baku, eliiskenderov kucesi 1" MetroHome="Elmler" Items={"orta esyali"} roomHome={4} WhoCanTake="Telebe ve aile" measureHome={78} dateTime={"21.05.2022 21:21"}/>
           <Section priceHome={500} address="Baku, eliiskenderov kucesi 1" MetroHome="Elmler" Items={"orta esyali"} roomHome={4} WhoCanTake="Telebe ve aile" measureHome={78} dateTime={"21.05.2022 21:21"}/>
           <Section priceHome={500} address="Baku, eliiskenderov kucesi 1" MetroHome="Elmler" Items={"orta esyali"} roomHome={4} WhoCanTake="Telebe ve aile" measureHome={78} dateTime={"21.05.2022 21:21"}/>
           <Section priceHome={500} address="Baku, eliiskenderov kucesi 1" MetroHome="Elmler" Items={"orta esyali"} roomHome={4} WhoCanTake="Telebe ve aile" measureHome={78} dateTime={"21.05.2022 21:21"}/>
           <Section priceHome={500} address="Baku, eliiskenderov kucesi 1" MetroHome="Elmler" Items={"orta esyali"} roomHome={4} WhoCanTake="Telebe ve aile" measureHome={78} dateTime={"21.05.2022 21:21"}/>
        
      </div>
      <Outlet/>
    </div>
  )
}

export default cards