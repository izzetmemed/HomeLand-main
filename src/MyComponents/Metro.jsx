import React from 'react'

const Metro = ({myRef}) => {
  return (
    <>
    <div className="col-12 col-lg-3">
                <div className="d-flex flex-row justify-content-between p-2 MakeHandSelect">
                  <span>Metro</span>
                  <span>
                    <i className="fa-solid fa-chevron-down"></i>
                  </span>
                </div>

                <div className="mt-3 col-12 pe-2">
                  <div className="col-12 div-in-select chechAndLabel forOverFlow ms-1 pe-1">
                  <div>
                      <input
                        type="checkbox"
                       
                      />
                      <label className="ms-1">
                        Bütün
                      </label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="Metroya yaxın deyil"
                        ref={(element) => (myRef.current[1] = element)}
                      />
                      <label className="ms-1">
                        Metroya yaxın olmasın.
                      </label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="Həzi"
                        ref={(element) => (myRef.current[2] = element)}
                      />
                      <label className="ms-1">Həzi Aslanov Metrosu.</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="Əhmədli"
                        ref={(element) => (myRef.current[3] = element)}
                      />
                      <label className="ms-1">Əhmədli Metrosu.</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="Xalqlar"
                        ref={(element) => (myRef.current[4] = element)}
                      />
                      <label className="ms-1">Xalqlar dostluğu Metrosu.</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="Neftçilər"
                        ref={(element) => (myRef.current[5] = element)}
                      />
                      <label className="ms-1">Neftçilər Metrosu.</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="Qarayev"
                        ref={(element) => (myRef.current[6] = element)}
                      />
                      <label className="ms-1">Qara qarayev Metrosu.</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="Koroğlu"
                        ref={(element) => (myRef.current[7] = element)}
                      />
                      <label className="ms-1">Koroğlu Metrosu.</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="Bakmil"
                        ref={(element) => (myRef.current[8] = element)}
                      />
                      <label className="ms-1">Bakmil Metrosu.</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="Nərmanov"
                        ref={(element) => (myRef.current[9] = element)}
                      />
                      <label className="ms-1">Nərman Nərmanov Metrosu.</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="Gənçlik"
                        ref={(element) => (myRef.current[10] = element)}
                      />
                      <label className="ms-1">Gənçlik Metrosu.</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="28 May"
                        ref={(element) => (myRef.current[11] = element)}
                      />
                      <label className="ms-1">28 May Metrosu.</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="Xətai"
                        ref={(element) => (myRef.current[12] = element)}
                      />
                      <label className="ms-1">Şah İsmayıl Xətai Metrosu</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="Sahil"
                        ref={(element) => (myRef.current[13] = element)}
                      />
                      <label className="ms-1">Sahil Metrosu</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="İçərişəhər"
                        ref={(element) => (myRef.current[14] = element)}
                      />
                      <label className="ms-1">İçərişəhər Metrosu</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="Nizami"
                        ref={(element) => (myRef.current[15] = element)}
                      />
                      <label className="ms-1">Nizami Metrosu</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="Elmlər"
                        ref={(element) => (myRef.current[16] = element)}
                      />
                      <label className="ms-1">Elmlər Metrosu</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="İnşaatçılar"
                        ref={(element) => (myRef.current[17] = element)}
                      />
                      <label className="ms-1">İnşaatçılar Metrosu</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="20 Yanvar"
                        ref={(element) => (myRef.current[18] = element)}
                      />
                      <label className="ms-1">20 Yanvar Metrosu</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="Əcəmi"
                        ref={(element) => (myRef.current[19] = element)}
                      />
                      <label className="ms-1">Memar Əcəmi Metrosu</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="Nəsimi"
                        ref={(element) => (myRef.current[20] = element)}
                      />
                      <label className="ms-1">Nəsimi Metrosu</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="Azadlıq"
                        ref={(element) => (myRef.current[21] = element)}
                      />
                      <label className="ms-1">Azadlıq Metrosu</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="Dərnəgül"
                        ref={(element) => (myRef.current[22] = element)}
                      />
                      <label className="ms-1">Dərnəgül Metrosu</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="Noyabr"
                        ref={(element) => (myRef.current[23] = element)}
                      />
                      <label className="ms-1">8 Noyabr Metrosu</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="Avtovağzal"
                        ref={(element) => (myRef.current[24] = element)}
                      />
                      <label className="ms-1">Avtovağzal Metrosu</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="Xocəsən"
                        ref={(element) => (myRef.current[25] = element)}
                      />
                      <label className="ms-1">Xocəsən Metrosu</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="Ulduz"
                        ref={(element) => (myRef.current[26] = element)}
                      />
                      <label className="ms-1">Ulduz Metrosu.</label>
                    </div>
                  </div>
                </div>
              </div>
    </>
  )
}

export default Metro