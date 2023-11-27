import React from 'react'
import SectionPayment from './payment/sectionpayment'
const RentPayment = () => {
  return (
    <div>
        <div>
             <div className="col-12 d-flex justify-content-center mt-5">
            <input type="number" placeholder='Kod' />
            <button className='btn btn-success'> Axtarmaq</button>
          </div>
          <div className="col-12 d-flex justify-content-center mt-5">
            <input type="number" placeholder='Nömrə'/>
            <button className='btn btn-success'> Axtarmaq</button>
          </div>
              <div className='d-flex flex-wrap'>
                <SectionPayment/>
                <SectionPayment/>
                <SectionPayment/>
                <SectionPayment/>
                <SectionPayment/>
                <SectionPayment/>
                <SectionPayment/>
                <SectionPayment/>
                <SectionPayment/>
                <SectionPayment/>
                <SectionPayment/>
                <SectionPayment/>
              </div>
        </div>
    </div>
  )
}

export default RentPayment