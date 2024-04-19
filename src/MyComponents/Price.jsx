import React from 'react';
const Price = ({Price}) => {
  return (
    <>
    <div className=" d-flex flex-row justify-content-center col-12">
                <div className="col-12 col-lg-8 mt-4">
                  <label>Qiymet:</label>
                  <div className="d-flex flex-row max-min-input mt-1">
                    <input
                      type="number"
                      placeholder="Max"
                      inputmode="numeric"
                      ref={(element) => (Price.current[1] = element)}
                    />
                    <input
                      type="number"
                      placeholder="Min"
                      inputmode="numeric"
                      ref={(element) => (Price.current[2] = element)}
                    />
                  </div>
                </div>
              </div>
    </>
  )
}

export default Price