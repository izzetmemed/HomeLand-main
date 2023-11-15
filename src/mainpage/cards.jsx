import React from 'react'
import Section from '../section';
import Search  from '../search';
import { Outlet } from 'react-router-dom';
const cards = () => {
  return (
    <div>
      <Search/>
      <div className='d-flex flex-wrap'>
           <Section id={1} priceHome={400} address="Baku, eliiskenderov kucesi 1" MetroHome="Elmler" Items={"orta esyali"} roomHome={4} WhoCanTake="Telebe ve aile" measureHome={78} dateTime={"21.05.2022 21:21"}/>
           <Section id={2} priceHome={600} address="Baku, eliiskenderov kucesi 1" MetroHome="Elmler" Items={"orta esyali"} roomHome={4} WhoCanTake="Telebe ve aile" measureHome={78} dateTime={"21.05.2022 21:21"}/>
           <Section id={3} priceHome={500} address="Baku, eliiskenderov kucesi 1" MetroHome="Elmler" Items={"orta esyali"} roomHome={4} WhoCanTake="Telebe ve aile" measureHome={78} dateTime={"21.05.2022 21:21"}/>
           <Section id={4} priceHome={500} address="Baku, eliiskenderov kucesi 1" MetroHome="Elmler" Items={"orta esyali"} roomHome={4} WhoCanTake="Telebe ve aile" measureHome={78} dateTime={"21.05.2022 21:21"}/>
           <Section id={5} priceHome={500} address="Baku, eliiskenderov kucesi 1" MetroHome="Elmler" Items={"orta esyali"} roomHome={4} WhoCanTake="Telebe ve aile" measureHome={78} dateTime={"21.05.2022 21:21"}/>
           <Section id={6} priceHome={500} address="Baku, eliiskenderov kucesi 1" MetroHome="Elmler" Items={"orta esyali"} roomHome={4} WhoCanTake="Telebe ve aile" measureHome={78} dateTime={"21.05.2022 21:21"}/>
           <Section id={7} priceHome={500} address="Baku, eliiskenderov kucesi 1" MetroHome="Elmler" Items={"orta esyali"} roomHome={4} WhoCanTake="Telebe ve aile" measureHome={78} dateTime={"21.05.2022 21:21"}/>
           <Section id={8} priceHome={500} address="Baku, eliiskenderov kucesi 1" MetroHome="Elmler" Items={"orta esyali"} roomHome={4} WhoCanTake="Telebe ve aile" measureHome={78} dateTime={"21.05.2022 21:21"}/>
           <Section id={9} priceHome={500} address="Baku, eliiskenderov kucesi 1" MetroHome="Elmler" Items={"orta esyali"} roomHome={4} WhoCanTake="Telebe ve aile" measureHome={78} dateTime={"21.05.2022 21:21"}/>
           <Section id={10} priceHome={500} address="Baku, eliiskenderov kucesi 1" MetroHome="Elmler" Items={"orta esyali"} roomHome={4} WhoCanTake="Telebe ve aile" measureHome={78} dateTime={"21.05.2022 21:21"}/>
           <Section id={11} priceHome={500} address="Baku, eliiskenderov kucesi 1" MetroHome="Elmler" Items={"orta esyali"} roomHome={4} WhoCanTake="Telebe ve aile" measureHome={78} dateTime={"21.05.2022 21:21"}/>
           <Section id={12} priceHome={500} address="Baku, eliiskenderov kucesi 1" MetroHome="Elmler" Items={"orta esyali"} roomHome={4} WhoCanTake="Telebe ve aile" measureHome={78} dateTime={"21.05.2022 21:21"}/>
           <Section id={13} priceHome={500} address="Baku, eliiskenderov kucesi 1" MetroHome="Elmler" Items={"orta esyali"} roomHome={4} WhoCanTake="Telebe ve aile" measureHome={78} dateTime={"21.05.2022 21:21"}/>
        
      </div>
      <Outlet/>
    </div>
  )
}

export default cards