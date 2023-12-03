
import { useState } from "react"
import React from 'react'
import Coordinate from "../../answer/coordinate";
const İnsideCardPayment = () => {
    const keepingImgSource = [
        'https://foyr.com/learn/wp-content/uploads/2021/08/design-your-dream-home.jpg',
        'https://tjh.com/wp-content/uploads/2023/04/denver-new-home-Meade2.webp',
        'https://nh.rdcpix.com/0ca5883f9bf997505d554633ca1e8aa9l-f3652169346od-w480_h360.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPRSAAg1MOr6nFfMv7L131kZl7O3se-oYEf0V0ZLW7jDUVmh7vtnwLZ1uJHUI7Ji_-pTE&usqp=CAU',
        'https://photos.zillowstatic.com/fp/99e328626c7284a24c908e885ecb489e-cc_ft_960.jpg',
        'https://foyr.com/learn/wp-content/uploads/2021/08/design-your-dream-home.jpg',
        'https://tjh.com/wp-content/uploads/2023/04/denver-new-home-Meade2.webp',
        'https://foyr.com/learn/wp-content/uploads/2021/08/design-your-dream-home.jpg',
        'https://nh.rdcpix.com/0ca5883f9bf997505d554633ca1e8aa9l-f3652169346od-w480_h360.jpg',
        'https://photos.zillowstatic.com/fp/99e328626c7284a24c908e885ecb489e-cc_ft_960.jpg',

    ];

    const [ImgSourceIndex, setImgSourceIndex] = useState(0);
    const btnLeftIcon = () => {
        if (ImgSourceIndex < keepingImgSource.length - 1) {
            setImgSourceIndex(ImgSourceIndex + 1);
        } else {
            setImgSourceIndex(0);
        }
    };

    const btnRightIcon = () => {
        if (ImgSourceIndex > 0) {
            setImgSourceIndex(ImgSourceIndex - 1);
        } else {
            setImgSourceIndex(keepingImgSource.length - 1);
        }
    };
    return (
        <div>
            <div className=' col-12 p-2 mt-4 ps-2'>
                <div className='insideCard-home'>
                    <div className='overflow-hidden'>
                        <div>
                            <span onClick={btnLeftIcon}><i className="fa-solid fa-angle-left"></i></span>
                            <span onClick={btnRightIcon}><i className="fa-solid fa-angle-right"></i></span>
                        </div>
                        <div>
                            <img src={keepingImgSource[ImgSourceIndex]} alt="" className='w-100 h-100' />
                        </div>




                    </div>
                    <div className='pb-2 mt-3'>
                        <p>Ev sahibi:<span className='price-home'>Quliyev Mezahir</span></p>
                        <p>Nomre:<span className='price-home'>055 555 55 55</span></p>
                        <p>Qiymet:<span className='price-home'>500</span></p>
                        <p>Kod:<span className='price-home'>120</span></p>
                        <p>Unvan:<span className='address-home'>Nesimi Rayon, eliiskenderov kucesi</span></p>
                        <p>Metro:<span className='address-home'>28 May</span></p>
                        <p>Otaq sayi:<span className='room-home'>5 otaq</span></p>
                        <p>Sahe:<span className='measure-home'>80 km</span></p>
                        <p>Ətraflı:<span className='measure-home'>Lorem ipsum dolor sit, amet consectetur lorem200 adipisicing elit. Amet excepturi a quos mollitia dicta facere, nostrum quibusdam laborum sint vel at sequi, pariatur quo vero nulla, labore earum veniam! Facilis, facere ex? Deserunt consequuntur sint dolorum distinctio optio dignissimos corrupti.</span></p>
                        <p>Tarix:<span className='time-home'>06.09.2023 17:23</span></p>
                        <p>Ev kim' verilir:<span className='time-home'>Aile ve telebe</span></p>
                        <p>Əşya:<span className='time-home'>Əşyalı</span></p>
                        <p>Təmir:<span className='time-home'>Orta təmir</span></p>
                        <p>Bina:<span className='time-home'>Yeni tikili</span></p>
                        <p>Evdə olan Əşyalar:<span className='time-home'>..........</span></p>
                        <p>Evi tutduğunuz halda əmlakşıya verəcəyiniz ödəniş:<span className='time-home'>100</span></p>
                        <div className="col-12 d-flex justify-content-center">
                            <div className="col-6 d-flex mt-3">
                                <table className="table table-dark table-striped">
                                    <thead>
                                        <tr>
                                            <th>Müştərinin adı soyadı</th>
                                            <th>Nömrə</th>
                                            <th>Tarix</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>izzet memmedov</td>
                                            <td>055 555 55 55</td>
                                            <th>Tarix</th>
                                        </tr>
                                        <tr>
                                            <td>izzet memmedov</td>
                                            <td>055 555 55 55</td>
                                            <th>Tarix</th>
                                        </tr>
                                        <tr>
                                            <td>izzet memmedov</td>
                                            <td>055 555 55 55</td>
                                            <th>Tarix</th>
                                        </tr>
                                        <tr>
                                            <td>izzet memmedov</td>
                                            <td>055 555 55 55</td>
                                            <th>Tarix</th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>



                       
                        <div className="height-for-coordiante mt-2 mb-2 p-4">
                            <Coordinate />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default İnsideCardPayment