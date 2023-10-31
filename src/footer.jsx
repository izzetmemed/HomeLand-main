import React from 'react'

const footer = () => {
  return (
    <div>
      <hr />
      <div className='p-2 '>
         <div className='d-flex  col-12 flex-lg-row flex-column align-items-center  justify-content-around p-3 for-bottom-border '>
        <div className='col-12 col-sm-8 col-md-6 col-lg-4 d-flex flex-column justify-content-center align-items-center img-div-for-height '>
          <img src={require('./logo.home/Logo-white.PNG')} className="w-100 h-100" />
        </div>
       
        <div className='col-lg-9 col-12 px-3 '>
          <p className='mb-0'>Əmlak şirkəti olaraq öncəliyimiz müştəri məmnuniyyətidir və buna görə də sizin istədiyiniz xidmətləri lazım olan vaxtdan da tez həll etməyə çalışacayıq. Bizin işimiz evini satmaq və kiraye vermək istəyən müştərilərin evini satmaq və kiraye vermək və həmçinin ev almaq və kiraye götürmək istəyən müştərilərimizə də lazımınca xidmət görsətmək. <br /> <i><strong>Bizi seçdiyiniz üçün sizə minnatdarıq.</strong></i></p>
        </div>
      </div>
        <div>
          <hr />
        <div className='col-12 d-flex flex-column justify-content-center align-items-center img-div-for-height '>
          <span className='logo-in-header'>
            HomeLand
          </span>
        </div>
        </div>
        <hr />
        <div className='col-12 footer-end-part'>
            <p>Evi görmədən ödəniş etməyin.</p>
            <p>Elanlar haqqında məsuliyyət daşımırıq.</p>
        </div>
      </div>
     

    </div>
  )
}

export default footer