import React from 'react'
import SectionPayment from './payment/sectionpayment'
const RentPayment = () => {
  return (
    <div>
        <div>
            {/* Ən az bir müştəri göndərilib və 1 gün keşib filter */}
            {/* cartın içərisində ev sahibinin və müştərilərin məlumatı olacaq və ev sahibinin və
             müştərinin özünün (ödədi) buttonu olacaq əgər ödənişi ikisindən biri etsə cartın rəngi dəyişəcək 
             əgər hər ikisi ödəsə cart ödəniş olunmuş listəyə keşir. */}
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