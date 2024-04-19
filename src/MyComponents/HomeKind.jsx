import React from 'react'

const HomeKind = ({HomeOrFlat}) => {
  return (
    <>
     <div className="col-12 col-lg-3">
                <div className="d-flex flex-row justify-content-between p-2 MakeHandSelect">
                  <span>Həyət yoxsa bina evi?</span>
                  <span>
                    <i className="fa-solid fa-chevron-down"></i>
                  </span>
                </div>

                <div className="mt-3 col-12">
                  <div className="col-12 div-in-select chechAndLabel ms-1">
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="Yeni tikili bina."
                        ref={(element) => (HomeOrFlat.current[1] = element)}
                      />
                      <label className="ms-1">Yeni tikili bina.</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="Köhnə tikili bina."
                        ref={(element) => (HomeOrFlat.current[3] = element)}
                      />
                      <label className="ms-1">Köhnə tikili bina.</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="Həyət evi"
                        ref={(element) => (HomeOrFlat.current[2] = element)}
                      />
                      <label className="ms-1">Həyət evi</label>
                    </div>
                  </div>
                </div>
              </div>
    </>
  )
}

export default HomeKind