import React from 'react'

const Region = ({Region}) => {
  return (
    <>
     <div className="col-12 col-lg-3">
                <div className="d-flex flex-row justify-content-between p-2 MakeHandSelect">
                  <span>Rayon:</span>
                  <span>
                    <i className="fa-solid fa-chevron-down"></i>
                  </span>
                </div>

                <div className="mt-3 col-12 pe-2">
                  <div className="col-12 div-in-select chechAndLabel forOverFlow ms-1 pe-1">
                  <div>
                      <input
                        type="checkbox"
                        name=""
                        id="0"
                        
                      />
                      <label className="ms-1">Bütün</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="Nəsimi"
                        ref={(element) => (Region.current[1] = element)}
                      />
                      <label className="ms-1">Nəsimi Rayon</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="Nizami"
                        ref={(element) => (Region.current[2] = element)}
                      />
                      <label className="ms-1">Nizami Rayon</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="Xətai"
                        ref={(element) => (Region.current[3] = element)}
                      />
                      <label className="ms-1">Xətai Rayon</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="Nərmanov"
                        ref={(element) => (Region.current[4] = element)}
                      />
                      <label className="ms-1">Nərmanov Rayon</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="Yasamal"
                        ref={(element) => (Region.current[5] = element)}
                      />
                      <label className="ms-1">Yasamal Rayon</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="Pirallahı"
                        ref={(element) => (Region.current[6] = element)}
                      />
                      <label className="ms-1">Pirallahı Rayon</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="Suraxanı"
                        ref={(element) => (Region.current[7] = element)}
                      />
                      <label className="ms-1">Suraxanı Rayon</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="Sabunçu"
                        ref={(element) => (Region.current[8] = element)}
                      />
                      <label className="ms-1">Sabunçu Rayon</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="Səbail"
                        ref={(element) => (Region.current[9] = element)}
                      />
                      <label className="ms-1">Səbail Rayon</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="Xəzər"
                        ref={(element) => (Region.current[10] = element)}
                      />
                      <label className="ms-1">Xəzər Rayon</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="Qaradağ"
                        ref={(element) => (Region.current[11] = element)}
                      />
                      <label className="ms-1">Qaradağ Rayon</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="Binəqədi"
                        ref={(element) => (Region.current[12] = element)}
                      />
                      <label className="ms-1">Binəqədi Rayon</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="Abşeron"
                        ref={(element) => (Region.current[13] = element)}
                      />
                      <label className="ms-1">Abşeron Rayon</label>
                    </div>
                  </div>
                </div>
              </div>
    </>
  )
}

export default Region