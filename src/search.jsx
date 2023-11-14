import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Search = () => {
  const [isActive, setIsActive] = useState(false);
  const [isHomeOrFlat, setIsHomeOrFlat] = useState(false);
  const [isMetro, setIsMetro] = useState(false);
  const [isRayon, setIsRayon] = useState(false);
  const [isRoom, setIsRoom] = useState(false);

  return (
    <div>
      <div className="search-part pe-2">
        <div className='col-12'>
          <div className="col-12">
            <button className='btn w-100 text-white  search-btn-click' onClick={() => setIsActive(!isActive)}>
              <span><i className="fa-solid fa-magnifying-glass"></i></span>Axtarış etmək
            </button>
          </div>
          {isActive && (
            <div className='d-flex flex-wrap search-flex-part bg-success'>
              <div className="col-12 col-lg-3">
                <div className="d-flex flex-row justify-content-between p-2 MakeHandSelect" onClick={() => setIsHomeOrFlat(!isHomeOrFlat)} >
                  <span>Həyət yoxsa bina evi?</span>
                  <span><i className="fa-solid fa-chevron-down"></i></span>
                </div>
                {isHomeOrFlat && (
                  <div className='mt-3 col-12'>
                    <div className='col-12 div-in-select chechAndLabel ms-1'>
                      <div >
                        <input type="checkbox" name="" id="" />
                        <label for="vehicle1" className='ms-1'>Bina evi</label>
                      </div>
                      <div >
                        <input type="checkbox" name="" id="" />
                        <label for="vehicle1" className='ms-1'>Həyət evi</label>
                      </div>
                    </div>
                  </div >
                )}
              </div>

              <div className="col-12 col-lg-3">
                <div className="d-flex flex-row justify-content-between p-2 MakeHandSelect" onClick={() => setIsMetro(!isMetro)}>
                  <span>Metro</span>
                  <span ><i className="fa-solid fa-chevron-down"></i></span>
                </div>
                {isMetro && (
                  <div className='mt-3 col-12 pe-2'>
                    <div className='col-12 div-in-select chechAndLabel forOverFlow ms-1 pe-1'>
                      <div >
                        <input type="checkbox" name="" id="" />
                        <label for="vehicle1" className='ms-1'>28 May</label>
                      </div>
                      <div >
                        <input type="checkbox" name="" id="" />
                        <label for="vehicle1" className='ms-1'>Gənclik</label>
                      </div>
                      <div >
                        <input type="checkbox" name="" id="" />
                        <label for="vehicle1" className='ms-1'>Nərmanov</label>
                      </div>
                      <div >
                        <input type="checkbox" name="" id="" />
                        <label for="vehicle1" className='ms-1'>Ulduz</label>
                      </div>
                      <div >
                        <input type="checkbox" name="" id="" />
                        <label for="vehicle1" className='ms-1'>Koroğlu</label>
                      </div>
                      <div >
                        <input type="checkbox" name="" id="" />
                        <label for="vehicle1" className='ms-1'>Qarayev</label>
                      </div>
                      <div >
                        <input type="checkbox" name="" id="" />
                        <label for="vehicle1" className='ms-1'>Qarayev</label>
                      </div>
                      <div >
                        <input type="checkbox" name="" id="" />
                        <label for="vehicle1" className='ms-1'>Qarayev</label>
                      </div>
                      <div >
                        <input type="checkbox" name="" id="" />
                        <label for="vehicle1" className='ms-1'>Qarayev</label>
                      </div>
                      <div >
                        <input type="checkbox" name="" id="" />
                        <label for="vehicle1" className='ms-1'>Qarayev</label>
                      </div>
                      <div >
                        <input type="checkbox" name="" id="" />
                        <label for="vehicle1" className='ms-1'>Qarayev</label>
                      </div>
                      <div >
                        <input type="checkbox" name="" id="" />
                        <label for="vehicle1" className='ms-1'>Qarayev</label>
                      </div>
                    </div>
                  </div >
                )}
              </div>
              <div className="col-12 col-lg-3">
                <div className="d-flex flex-row justify-content-between p-2 MakeHandSelect" onClick={() => setIsRayon(!isRayon)}>
                  <span>Rayon:</span>
                  <span ><i className="fa-solid fa-chevron-down"></i></span>
                </div>
                {isRayon && (
                  <div className='mt-3 col-12 pe-2'>
                    <div className='col-12 div-in-select chechAndLabel forOverFlow ms-1 pe-1'>
                      <div >
                        <input type="checkbox" name="" id="" />
                        <label for="vehicle1" className='ms-1'>28 May</label>
                      </div>
                      <div >
                        <input type="checkbox" name="" id="" />
                        <label for="vehicle1" className='ms-1'>Gənclik</label>
                      </div>
                      <div >
                        <input type="checkbox" name="" id="" />
                        <label for="vehicle1" className='ms-1'>Nərmanov</label>
                      </div>
                      <div >
                        <input type="checkbox" name="" id="" />
                        <label for="vehicle1" className='ms-1'>Ulduz</label>
                      </div>
                      <div >
                        <input type="checkbox" name="" id="" />
                        <label for="vehicle1" className='ms-1'>Koroğlu</label>
                      </div>
                      <div >
                        <input type="checkbox" name="" id="" />
                        <label for="vehicle1" className='ms-1'>Qarayev</label>
                      </div>
                      <div >
                        <input type="checkbox" name="" id="" />
                        <label for="vehicle1" className='ms-1'>Qarayev</label>
                      </div>
                      <div >
                        <input type="checkbox" name="" id="" />
                        <label for="vehicle1" className='ms-1'>Qarayev</label>
                      </div>
                      <div >
                        <input type="checkbox" name="" id="" />
                        <label for="vehicle1" className='ms-1'>Qarayev</label>
                      </div>
                      <div >
                        <input type="checkbox" name="" id="" />
                        <label for="vehicle1" className='ms-1'>Qarayev</label>
                      </div>
                      <div >
                        <input type="checkbox" name="" id="" />
                        <label for="vehicle1" className='ms-1'>Qarayev</label>
                      </div>
                      <div >
                        <input type="checkbox" name="" id="" />
                        <label for="vehicle1" className='ms-1'>Qarayev</label>
                      </div>
                    </div>
                  </div >
                )}
              </div>
              <div className="col-12 col-lg-3">
                <div className="d-flex flex-row justify-content-between p-2 MakeHandSelect" onClick={() => setIsRoom(!isRoom)}>
                  <span>Otaq sayı:</span>
                  <span ><i className="fa-solid fa-chevron-down"></i></span>
                </div>
                {isRoom && (
                  <div className='mt-3 col-12 pe-2'>
                    <div className='col-12 div-in-select chechAndLabel forOverFlow ms-1 pe-1'>
                      <div >
                        <input type="checkbox" name="" id="" />
                        <label for="vehicle1" className='ms-1'>1 Otaqlı</label>
                      </div>
                      <div >
                        <input type="checkbox" name="" id="" />
                        <label for="vehicle1" className='ms-1'>2 Otaqlı</label>
                      </div>
                      <div >
                        <input type="checkbox" name="" id="" />
                        <label for="vehicle1" className='ms-1'>3 Otaqlı</label>
                      </div>
                      <div >
                        <input type="checkbox" name="" id="" />
                        <label for="vehicle1" className='ms-1'>4 Otaqlı</label>
                      </div>
                      <div >
                        <input type="checkbox" name="" id="" />
                        <label for="vehicle1" className='ms-1'>5 Otaqlı</label>
                      </div>
                      <div >
                        <input type="checkbox" name="" id="" />
                        <label for="vehicle1" className='ms-1'>6 və çox Otaqlı</label>
                      </div>

                    </div>
                  </div >
                )}
              </div>
              <div className=' d-flex flex-row justify-content-center col-12'>
                <div className='col-12 col-lg-8 mt-4'>
                  <label htmlFor="">Qiymet:</label>
                  <div className='d-flex flex-row max-min-input mt-1'>
                    <input type="number" placeholder='Max' />
                    <input type="number" placeholder='Min' />
                  </div>
                </div>
              </div>
              <div className='d-flex align-items-center col-12'>
                <div className='col-12 col-lg-6 mt-5 pt-1'>
                  <button className='btn btn-mycolor'>Axtarmaq</button>
              </div>
              </div>
              
            </div>

          )}
        </div>
      </div>
      <div className="col-12 mt-3 pe-2">
            <Link to="Səbət" className='btn w-100 text-white  search-btn-click' >
              Mənim səbətim
            </Link>
          </div>
    </div>
  );
}

export default Search;
