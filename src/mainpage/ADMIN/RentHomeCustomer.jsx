import React from 'react'
import SectionCustomer from './Customer/sectionCustomer'
const RentHomeCustomer = () => {
  return (
    <div>
        <div>
          <div className="col-12 d-flex justify-content-center mt-5">
            <input type="number" />
            <button className='btn btn-success'> Axtarmaq</button>
          </div>
          <div className='d-flex flex-wrap'>
          <SectionCustomer/>
          <SectionCustomer/>
          <SectionCustomer/>
          <SectionCustomer/>
          <SectionCustomer/>
          <SectionCustomer/>
          <SectionCustomer/>
          <SectionCustomer/>
          <SectionCustomer/>
          <SectionCustomer/>
          <SectionCustomer/>
          <SectionCustomer/>
          </div>
         
          {/* cod axtarışı */}
            {/* Müştəri zəng et düyməsinə basanda admində kaRT GÖRSənəcək və operator cartda daxil olacaq orda evsahibində olduğu kimi delet update ev sahibininadı nömrısi və
            ƏLAVƏ OLARAQ list olacaq hansı ki gələn müştərilərin adını zadı ora daxil edib orda saxlaya biləcəyik. */}
        </div>
    </div>
  )
}

export default RentHomeCustomer