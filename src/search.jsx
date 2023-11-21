import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Search = () => {
  const [isActive, setIsActive] = useState(false);


  const [selectedIds, setSelectedIds] = useState([]);
  const handleCheckboxChange = (id) => {
    if (selectedIds.includes(id)) {
      return;
    } else {
      const selected = [...selectedIds, id];
      setSelectedIds(selected);
    }
  };
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
                <div className="d-flex flex-row justify-content-between p-2 MakeHandSelect" >
                  <span>Həyət yoxsa bina evi?</span>
                  <span><i className="fa-solid fa-chevron-down"></i></span>
                </div>
               
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
             
              </div>

              <div className="col-12 col-lg-3">
                <div className="d-flex flex-row justify-content-between p-2 MakeHandSelect">
                  <span>Metro</span>
                  <span ><i className="fa-solid fa-chevron-down"></i></span>
                </div>
                
                  <div className='mt-3 col-12 pe-2'>
                    <div className='col-12 div-in-select chechAndLabel forOverFlow ms-1 pe-1'>
                      <div >
                        <input type="checkbox" name="" id="0"  onChange={() => handleCheckboxChange("0")}
                                                              checked={selectedIds.includes("0")} />
                        <label for="vehicle1" className='ms-1'>Metroya yaxın olmasada olar.</label>
                      </div>
                      <div >
                        <input type="checkbox" name="" id="Həzi"  onChange={() => handleCheckboxChange("Həzi")}
                                                                 checked={selectedIds.includes("Həzi")}/>
                        <label for="vehicle1" className='ms-1'>Həzi Aslanov Metrosu.</label>
                      </div>
                      <div >
                        <input type="checkbox" name="" id="Əhmədli"  onChange={() => handleCheckboxChange("Əhmədli")}
            checked={selectedIds.includes("Əhmədli")}/>
                        <label for="vehicle1" className='ms-1'>Əhmədli Metrosu.</label>
                      </div>
                      <div >
                        <input type="checkbox" name="" id="Xalqlar" onChange={() => handleCheckboxChange("Xalqlar")}
            checked={selectedIds.includes("Xalqlar")} />
                        <label for="vehicle1" className='ms-1'>Xalqlar dostluğu Metrosu.</label>
                      </div>
                      <div >
                        <input type="checkbox" name="" id="Neftçilər" onChange={() => handleCheckboxChange("Neftçilər")}
            checked={selectedIds.includes("Neftçilər")} />
                        <label for="vehicle1" className='ms-1'>Neftçilər Metrosu.</label>
                      </div>
                      <div >
                        <input type="checkbox" name="" id="Qarayev"  onChange={() => handleCheckboxChange("Qarayev")}
            checked={selectedIds.includes("Qarayev")}/>
                        <label for="vehicle1" className='ms-1'>Qara qarayev Metrosu.</label>
                      </div>
                      <div >
                        <input type="checkbox" name="" id="Koroğlu"  onChange={() => handleCheckboxChange("Koroğlu")}
            checked={selectedIds.includes("Koroğlu")}/>
                        <label for="vehicle1" className='ms-1'>Koroğlu Metrosu.</label>
                      </div>
                      <div >
                        <input type="checkbox" name="" id="Ulduz"  onChange={() => handleCheckboxChange("Ulduz")}
            checked={selectedIds.includes("Ulduz")}/>
                        <label for="vehicle1" className='ms-1'>Ulduz Metrosu.</label>
                      </div>
                      <div >
                        <input type="checkbox" name="" id="Bakmil" onChange={() => handleCheckboxChange("Bakmil")}
            checked={selectedIds.includes("Bakmil")}/>
                        <label for="vehicle1" className='ms-1'>Bakmil Metrosu.</label>
                      </div>
                      <div >
                        <input type="checkbox" name="" id="Nərmanov"  onChange={() => handleCheckboxChange("Nərmanov")}
            checked={selectedIds.includes("Nərmanov")}/>
                        <label for="vehicle1" className='ms-1'>Nərman Nərmanov Metrosu.</label>
                      </div>
                      <div >
                        <input type="checkbox" name="" id="Gənçlik"  onChange={() => handleCheckboxChange("Gənçlik")}
            checked={selectedIds.includes("Gənçlik")}/>
                        <label for="vehicle1" className='ms-1'>Gənçlik Metrosu.</label>
                      </div>
                      <div >
                        <input type="checkbox" name="" id="28"  onChange={() => handleCheckboxChange("28")}
            checked={selectedIds.includes("28")}/>
                        <label for="vehicle1" className='ms-1'>28 May Metrosu.</label>
                      </div>
                      <div >
                        <input type="checkbox" name="" id="Xətai" onChange={() => handleCheckboxChange("Xətai")}
            checked={selectedIds.includes("Xətai")} />
                        <label for="vehicle1" className='ms-1'>Şah İsmayıl Xətai Metrosu</label>
                      </div>
                      <div >
                        <input type="checkbox" name="" id="Sahil" onChange={() => handleCheckboxChange("Sahil")}
            checked={selectedIds.includes("Sahil")} />
                        <label for="vehicle1" className='ms-1'>Sahil Metrosu</label>
                      </div>
                      <div >
                        <input type="checkbox" name="" id="İçərişəhər"  onChange={() => handleCheckboxChange("İçərişəhər")}
            checked={selectedIds.includes("İçərişəhər")}/>
                        <label for="vehicle1" className='ms-1'>İçərişəhər Metrosu</label>
                      </div>
                      <div >
                        <input type="checkbox" name="" id="Nizami"  onChange={() => handleCheckboxChange("Nizami")}
            checked={selectedIds.includes("Nizami")}/>
                        <label for="vehicle1" className='ms-1'>Nizami Metrosu</label>
                      </div>
                      <div >
                        <input type="checkbox" name="" id="Elmlər"  onChange={() => handleCheckboxChange("Elmlər")}
            checked={selectedIds.includes("Elmlər")}/>
                        <label for="vehicle1" className='ms-1'>Elmlər Metrosu</label>
                      </div>
                      <div >
                        <input type="checkbox" name="" id="İnşaatçılar" onChange={() => handleCheckboxChange("İnşaatçılar")}
            checked={selectedIds.includes("İnşaatçılar")} />
                        <label for="vehicle1" className='ms-1'>İnşaatçılar Metrosu</label>
                      </div>
                      <div >
                        <input type="checkbox" name="" id="Yanvar" onChange={() => handleCheckboxChange("Yanvar")}
            checked={selectedIds.includes("Yanvar")} />
                        <label for="vehicle1" className='ms-1'>20 Yanvar Metrosu</label>
                      </div>
                      <div >
                        <input type="checkbox" name="" id="Əcəmi" onChange={() => handleCheckboxChange("Əcəmi")}
            checked={selectedIds.includes("Əcəmi")} />
                        <label for="vehicle1" className='ms-1'>Memar Əcəmi Metrosu</label>
                      </div>
                      <div >
                        <input type="checkbox" name="" id="Nəsimi" onChange={() => handleCheckboxChange("Nəsimi")}
            checked={selectedIds.includes("Nəsimi")} />
                        <label for="vehicle1" className='ms-1'>Nəsimi Metrosu</label>
                      </div>
                      <div >
                        <input type="checkbox" name="" id="Azadlıq" onChange={() => handleCheckboxChange("Azadlıq")}
            checked={selectedIds.includes("Azadlıq")} />
                        <label for="vehicle1" className='ms-1'>Azadlıq Metrosu</label>
                      </div>
                      <div >
                        <input type="checkbox" name="" id="Dərnəgül" onChange={() => handleCheckboxChange("Dərnəgül")}
            checked={selectedIds.includes("Dərnəgül")} />
                        <label for="vehicle1" className='ms-1'>Dərnəgül Metrosu</label>
                      </div>
                      <div >
                        <input type="checkbox" name="" id="Noyabr" onChange={() => handleCheckboxChange("Noyabr")}
            checked={selectedIds.includes("Noyabr")} />
                        <label for="vehicle1" className='ms-1'>8 Noyabr Metrosu</label>
                      </div>
                      <div >
                        <input type="checkbox" name="" id="Avtovağzal" onChange={() =>handleCheckboxChange("Avtovağzal")}
            checked={selectedIds.includes("Avtovağzal")} />
                        <label for="vehicle1" className='ms-1'>Avtovağzal Metrosu</label>
                      </div>
                      <div >
                        <input type="checkbox" name="" id="Xocəsən" onChange={() => handleCheckboxChange("Xocəsən")}
            checked={selectedIds.includes("Xocəsən")} />
                        <label for="vehicle1" className='ms-1'>Xocəsən Metrosu</label>
                      </div>
                     
                    </div>
                  </div >
              
              </div>
              <div className="col-12 col-lg-3">
                <div className="d-flex flex-row justify-content-between p-2 MakeHandSelect" >
                  <span>Rayon:</span>
                  <span ><i className="fa-solid fa-chevron-down"></i></span>
                </div>
                
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
              
              </div>
              <div className="col-12 col-lg-3">
                <div className="d-flex flex-row justify-content-between p-2 MakeHandSelect" >
                  <span>Otaq sayı:</span>
                  <span ><i className="fa-solid fa-chevron-down"></i></span>
                </div>
              
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
                  <button className='btn btn-mycolor' >Axtarmaq</button>
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
