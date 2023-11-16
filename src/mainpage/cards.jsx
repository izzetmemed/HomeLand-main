import React from 'react'
import Section from '../section';
import Search  from '../search';
import { Outlet } from 'react-router-dom';
const cards = () => {
  return (
    <div>
      <Search/>
      <div className='d-flex flex-wrap'>
           <Section id={1}   type={"rentHome"} priceHome={400} address="Baku, eliiskenderov kucesi 1" MetroHome="Elmler" Items={"orta esyali"} roomHome={4} WhoCanTake="Telebe ve aile" measureHome={78} dateTime={"21.05.2022 21:21"}/>
           <Section id={2}  type={"rentHome"} priceHome={600} address="Baku, eliiskenderov kucesi 1" MetroHome="Elmler" Items={"orta esyali"} roomHome={4} WhoCanTake="Telebe ve aile" measureHome={78} dateTime={"21.05.2022 21:21"}/>
           <Section id={3}  type={"rentHome"} priceHome={500} address="Baku, eliiskenderov kucesi 1" MetroHome="Elmler" Items={"orta esyali"} roomHome={4} WhoCanTake="Telebe ve aile" measureHome={78} dateTime={"21.05.2022 21:21"}/>
           <Section id={4}  type={"rentHome"} priceHome={500} address="Baku, eliiskenderov kucesi 1" MetroHome="Elmler" Items={"orta esyali"} roomHome={4} WhoCanTake="Telebe ve aile" measureHome={78} dateTime={"21.05.2022 21:21"}/>
           <Section id={5}  type={"rentHome"} priceHome={500} address="Baku, eliiskenderov kucesi 1" MetroHome="Elmler" Items={"orta esyali"} roomHome={4} WhoCanTake="Telebe ve aile" measureHome={78} dateTime={"21.05.2022 21:21"}/>
           <Section id={6}  type={"rentHome"} priceHome={500} address="Baku, eliiskenderov kucesi 1" MetroHome="Elmler" Items={"orta esyali"} roomHome={4} WhoCanTake="Telebe ve aile" measureHome={78} dateTime={"21.05.2022 21:21"}/>
           <Section id={7}  type={"rentHome"} priceHome={500} address="Baku, eliiskenderov kucesi 1" MetroHome="Elmler" Items={"orta esyali"} roomHome={4} WhoCanTake="Telebe ve aile" measureHome={78} dateTime={"21.05.2022 21:21"}/>
           <Section id={8}  type={"rentHome"} priceHome={500} address="Baku, eliiskenderov kucesi 1" MetroHome="Elmler" Items={"orta esyali"} roomHome={4} WhoCanTake="Telebe ve aile" measureHome={78} dateTime={"21.05.2022 21:21"}/>
           <Section id={9}  type={"rentHome"} priceHome={500} address="Baku, eliiskenderov kucesi 1" MetroHome="Elmler" Items={"orta esyali"} roomHome={4} WhoCanTake="Telebe ve aile" measureHome={78} dateTime={"21.05.2022 21:21"}/>
           <Section id={10} type={"rentHome"}  priceHome={500} address="Baku, eliiskenderov kucesi 1" MetroHome="Elmler" Items={"orta esyali"} roomHome={4} WhoCanTake="Telebe ve aile" measureHome={78} dateTime={"21.05.2022 21:21"}/>
           <Section id={11} type={"rentHome"}  priceHome={500} address="Baku, eliiskenderov kucesi 1" MetroHome="Elmler" Items={"orta esyali"} roomHome={4} WhoCanTake="Telebe ve aile" measureHome={78} dateTime={"21.05.2022 21:21"}/>
           <Section id={12} type={"rentHome"}  priceHome={500} address="Baku, eliiskenderov kucesi 1" MetroHome="Elmler" Items={"orta esyali"} roomHome={4} WhoCanTake="Telebe ve aile" measureHome={78} dateTime={"21.05.2022 21:21"}/>
           <Section id={13} type={"rentHome"}  priceHome={500} address="Baku, eliiskenderov kucesi 1" MetroHome="Elmler" Items={"orta esyali"} roomHome={4} WhoCanTake="Telebe ve aile" measureHome={78} dateTime={"21.05.2022 21:21"}/>
        
      </div>
      <Outlet/>
    </div>
  )
}

export default cards