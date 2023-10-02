import React from 'react'

const section = () => {
  return (
    <div>
        <div className=' col-3 p-2'>
            <div className='card-home'>
                <div className='overflow-hidden '>
                    <div>
                    <span><i class="fa-solid fa-angle-left"></i></span>
                    <span><i class="fa-solid fa-angle-right"></i></span>
                    </div>
                    <div>
                         <img className='w-100' src="https://foyr.com/learn/wp-content/uploads/2021/08/design-your-dream-home.jpg" alt="" />
                    </div>
                </div>
                <div>
                   <p>Qiymet:<span className='price-home'>500</span></p> 
                   <p>Unvan:<span className='address-home'>Nesimi Rayon, eliiskenderov kucesi</span></p> 
                   <p>Metro:<span className='address-home'>28 May</span></p> 
                    <p>Otaq sayi:<span className='room-home'>5 otaq</span></p> 
                    <p>Sahe:<span className='measure-home'>80 km</span></p>
                    <p>Tarix:<span className='time-home'>06.09.2023 17:23</span></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default section