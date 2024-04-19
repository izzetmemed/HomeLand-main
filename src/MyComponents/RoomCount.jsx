import React from 'react'

const RoomCount = ({Room}) => {
  return (
    <>
    <div className="col-12 col-lg-3">
                <div className="d-flex flex-row justify-content-between p-2 MakeHandSelect">
                  <span>Otaq sayı:</span>
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
                        id="1"
                        ref={(element) => (Room.current[1] = element)}
                      />
                      <label className="ms-1">1 Otaqlı</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="2"
                        ref={(element) => (Room.current[2] = element)}
                      />
                      <label className="ms-1">2 Otaqlı</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="3"
                        ref={(element) => (Room.current[3] = element)}
                      />
                      <label className="ms-1">3 Otaqlı</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="4"
                        ref={(element) => (Room.current[4] = element)}
                      />
                      <label className="ms-1">4 Otaqlı</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="5"
                        ref={(element) => (Room.current[5] = element)}
                      />
                      <label className="ms-1">5 Otaqlı</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="6"
                        ref={(element) => (Room.current[6] = element)}
                      />
                      <label className="ms-1">6 Otaqlı</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="7"
                        ref={(element) => (Room.current[7] = element)}
                      />
                      <label className="ms-1">7 Otaqlı</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="8"
                        ref={(element) => (Room.current[8] = element)}
                      />
                      <label className="ms-1">8 Otaqlı</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="9"
                        ref={(element) => (Room.current[9] = element)}
                      />
                      <label className="ms-1">9 Otaqlı</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="10"
                        ref={(element) => (Room.current[10] = element)}
                      />
                      <label className="ms-1">10 Otaqlı</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="11"
                        ref={(element) => (Room.current[11] = element)}
                      />
                      <label className="ms-1">11 Otaqlı</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="12"
                        ref={(element) => (Room.current[12] = element)}
                      />
                      <label className="ms-1">12 Otaqlı</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="13"
                        ref={(element) => (Room.current[13] = element)}
                      />
                      <label className="ms-1">13 Otaqlı</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="14"
                        ref={(element) => (Room.current[14] = element)}
                      />
                      <label className="ms-1">14 Otaqlı</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="15"
                        ref={(element) => (Room.current[15] = element)}
                      />
                      <label className="ms-1">15 Otaqlı</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="16"
                        ref={(element) => (Room.current[16] = element)}
                      />
                      <label className="ms-1">16 Otaqlı</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="17"
                        ref={(element) => (Room.current[17] = element)}
                      />
                      <label className="ms-1">17 Otaqlı</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="18"
                        ref={(element) => (Room.current[18] = element)}
                      />
                      <label className="ms-1">18 Otaqlı</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="19"
                        ref={(element) => (Room.current[19] = element)}
                      />
                      <label className="ms-1">19 Otaqlı</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="20"
                        ref={(element) => (Room.current[20] = element)}
                      />
                      <label className="ms-1">20 Otaqlı</label>
                    </div>
                  </div>
                </div>
              </div>
    </>
  )
}

export default RoomCount