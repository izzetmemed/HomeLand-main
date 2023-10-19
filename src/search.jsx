import React, { useState } from 'react';
const Search = () => {
  const [isActive,setisActive]=useState(false);
  return (
    <div>

      <div className="search-part ">
        <div className='col-12'>
          <div className="col-12">
            <button className='btn w-100 text-white btn-success search-btn-click'  onClick={()=>{setisActive(!isActive)}}><span><i className="fa-solid fa-magnifying-glass"></i></span>Axtarış etmək </button>
          </div>
          {isActive && (
            <div className='d-flex flex-wrap search-flex-part bg-success' >
            <div className='col-2'>
              <label htmlFor="">Həyət yoxsa bina evi?</label>
              <select name="" id="">
                <option value="">Həyət və Bina evi</option>
                <option value="">Yalnız bina evi</option>
                <option value="">Yalnız Həyat evi</option>
              </select>
            </div>
            <div className='col-2'>
              <label htmlFor="">Ünvan:</label>
              <select name="" id="">
                <option value="">Bütün Bakı</option>
                <option value="">Nəsimi Rayon</option>
                <option value="">Xəyai Rayon</option>
                <option value="">Səyail Rayon</option>
                <option value="">Nərmanov Rayon</option>
              </select>
            </div>
            <div className='col-2'>
              <label htmlFor="">Metro:</label>
              <select name="" id="">
                <option value="">Bütün Metro</option>
                <option value="">28 May</option>
                <option value="">Nizami</option>
                <option value="">Nəsimi</option>
                <option value="">Əcəmi</option>
              </select>
            </div>
            <div className='col-2'>
              <label htmlFor="">Otaq sayı:</label>
              <select name="" id="">
                <option value=""></option>
                <option value="">1 otaqlı</option>
                <option value="">2 otaqlı</option>
                <option value="">3 otaqlı</option>
                <option value="">4 otaqlı</option>
                <option value="">5 otaqlı</option>
                <option value="">6 və ya çox otaqlı</option>
              </select>
            </div>
            <div className='col-2'>
              <label htmlFor="">Qiymet:</label>
              <div className='d-flex flex-row max-min-input'>
                <input type="Number" placeholder='Max' />
                <input type="Number" placeholder='Min' />
              </div>
            </div>
          </div>
          )}
          
        </div>
      </div>
    </div>
    
  )
  
}

export default Search;