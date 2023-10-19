import React from 'react'
import MapComponent from './coordinate'
const rent = () => {
    return (
        <div>
            <div className='mt-5'>
                <div className='d-flex flex-column align-items-center '>
                    <div className='col-5'>
                        <p className='text-center text-danger'>
                            <strong >Yalnız ev sahibləri elan yerləşdirə bilər.
                                <br />
                                Əmlakçıların elan yerləşdirilmısinə icazə verilmir!!!
                            </strong>
                        </p>
                    </div>
                    <div className='col-12'>
                        <div>
                            <p> <strong>Evinizi kiraye vermək üçün aşağıdakı sualları cavablandırın:</strong></p>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div>
                            <div className='div-in-label'>
                                <label htmlFor="customerName">Ev sahibinin adı və Soyadı:</label>
                            </div>
                            <div className='col-12 div-in-input'>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='mt-3'>
                            <div className='div-in-label'>
                                <label htmlFor="customerName">Ev sahibinin əlaqə nömrəsi:</label>
                            </div>
                            <div className='col-12 div-in-input'>
                                <input type="number" placeholder='xxx-xxx-xx-xx' />
                            </div>
                        </div>
                        <div className='mt-3'>

                            <div className='div-in-label'>
                                <label htmlFor="customerName">Evin yerləşdiyi rayon:</label>
                            </div>
                            <div className='col-12 div-in-select'>
                                <select name="" id="">
                                    <option value=""></option>
                                    <option value="">Nəsimi Rayon</option>
                                    <option value="">Nizami Rayon</option>
                                    <option value="">Xətai Rayon</option>
                                    <option value="">Nərmanov Rayon</option>
                                    <option value="">Masazır</option>
                                    <option value="">Xırdalan</option>
                                    <option value="">Xətai Rayon</option>
                                    <option value="">Xətai Rayon</option>
                                </select>
                            </div>
                        </div>
                        <div className='mt-3'>
                            <div className='div-in-label'>
                                <label htmlFor="customerName">Evin yerləşdiyi küçənin adı:</label>
                            </div>
                            <div className='col-12 div-in-input'>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='mt-3'>
                        <MapComponent/>
                        </div>

                        <div className='mt-3'>

                            <div className='div-in-label'>
                                <label htmlFor="customerName">Metro:</label>
                            </div>
                            <div className='col-12 div-in-select'>
                                <select name="" id="">
                                    <option value=""></option>
                                    <option value="">Metroya yaxın deyil</option>
                                    <option value="">Nəsimi Metrosu</option>
                                    <option value="">Nizami Metrosu</option>
                                    <option value="">28 May Metrosu</option>
                                    <option value="">N.Nərmanov Metrosu</option>
                                    <option value="">20 Yanvar Metrosu</option>
                                    <option value="">Xırdalan</option>
                                    <option value="">Xətai Rayon</option>
                                    <option value="">Xətai Rayon</option>
                                </select>
                            </div>
                        </div>

                        <div className='mt-3'>

                            <div className='div-in-label'>
                                <label htmlFor="customerName">Otaq sayı:</label>
                            </div>
                            <div className='col-12 div-in-select'>
                                <select name="" id="">
                                    <option value=""></option>
                                    <option value=""> 1 otaqlı</option>
                                    <option value=""> 2 otaqlı</option>
                                    <option value=""> 3 otaqlı</option>
                                    <option value=""> 4 otaqlı</option>
                                    <option value=""> 5 otaqlı</option>
                                    <option value=""> 6 otaqlı</option>
                                    <option value=""> 7 otaqlı</option>
                                    <option value=""> 8 otaqlı</option>
                                    <option value=""> 9 və daha çox otaqlı</option>
                                </select>
                            </div>
                        </div>
                        <div className='mt-3'>

                            <div className='div-in-label'>
                                <label htmlFor="customerName">Mərtəbə sayı:</label>
                            </div>
                            <div className='col-12 div-in-select'>
                                <select name="" id="">
                                    <option value=""></option>
                                    <option value=""> 1 </option>
                                    <option value=""> 2 </option>
                                    <option value=""> 3 </option>
                                    <option value=""> 4 </option>
                                    <option value=""> 5 </option>
                                    <option value=""> 6 </option>
                                    <option value=""> 7 </option>
                                    <option value=""> 8 </option>
                                    <option value=""> 9 </option>
                                    <option value=""> 10 </option>
                                    <option value=""> 11</option>
                                    <option value=""> 12</option>
                                    <option value=""> 13</option>
                                    <option value=""> 14</option>
                                    <option value=""> 15</option>
                                    <option value=""> 16</option>
                                    <option value=""> 17</option>
                                    <option value=""> 18</option>
                                    <option value=""> 19</option>
                                    <option value=""> 20</option>
                                </select>
                            </div>
                        </div>
                        <div className='mt-3'>

                            <div className='div-in-label'>
                                <label htmlFor="customerName">Təmir:</label>
                            </div>
                            <div className='col-12 div-in-select'>
                                <select name="" id="">
                                    <option value=""></option>
                                    <option value="">Təmirsiz</option>
                                    <option value="">Orta təmirli</option>
                                    <option value="">Təmirli</option>
                                </select>
                            </div>
                        </div >
                        <div className='mt-3'>

                            <div className='div-in-label'>
                                <label htmlFor="customerName">Əşya:</label>
                            </div>
                            <div className='col-12 div-in-select'>
                                <select name="" id="">
                                    <option value=""></option>
                                    <option value="">Ev əşyasız verilir.</option>
                                    <option value="">Ev yarı əşyalı verilir.</option>
                                    <option value="">Ev əşyalı verilir.</option>
                                </select>
                            </div>
                        </div >
                        <div className='mt-3'>

                            <div className='div-in-label'>
                                <label htmlFor="customerName">Evdə hansı əşyalar var?</label>
                            </div>
                            <div className='col-12 div-in-select ms-2'>
                                <div> <input type="checkbox" name="" id="" />  
                                <label for="vehicle1" className='ms-1'>Yataq</label>
                                </div>
                                <div> <input type="checkbox" name="" id="" />  
                                <label for="vehicle1" className='ms-1'>Paltar Şkafı</label>
                                </div>
                               <div>
                                <input type="checkbox" name="" id="" />  
                                <label for="vehicle1" className='ms-1'>Stol</label>
                               </div>
                               <div>
                                <input type="checkbox" name="" id="" />  
                                <label for="vehicle1" className='ms-1'>Stul</label>
                               </div>
                               <div>
                                <input type="checkbox" name="" id="" />  
                                <label for="vehicle1" className='ms-1'>Mərkəzi istilik sistemi</label>
                               </div>
                               <div>
                                <input type="checkbox" name="" id="" />  
                                <label for="vehicle1" className='ms-1'>Qaz isidicisi (peçi)</label>
                               </div>
                               <div>
                                <input type="checkbox" name="" id="" />  
                                <label for="vehicle1" className='ms-1'>Kombi</label>
                               </div>
                               <div>
                                <input type="checkbox" name="" id="" />  
                                <label for="vehicle1" className='ms-1'>TV</label>
                               </div>
                               <div>
                                <input type="checkbox" name="" id="" />  
                                <label for="vehicle1" className='ms-1'>Paltaryuyan</label>
                               </div>
                               <div>
                                <input type="checkbox" name="" id="" />  
                                <label for="vehicle1" className='ms-1'>Kondisaner</label>
                               </div>
                               <div>
                                <input type="checkbox" name="" id="" />  
                                <label for="vehicle1" className='ms-1'>Divan və kreslo</label>
                               </div>
                               <div>
                                <input type="checkbox" name="" id="" />  
                                <label for="vehicle1" className='ms-1'>Quraşdırılmış Vifi</label>
                               </div>
                                
                            </div>
                        </div >
                        
                        <div className='mt-3'>
                            <div className='div-in-label'>
                                <label htmlFor="customerName">Evin sahəsi:</label>
                            </div>
                            <div className='col-12 div-in-input'>
                                <input type="text" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default rent