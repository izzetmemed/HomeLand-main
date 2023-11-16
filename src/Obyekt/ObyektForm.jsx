import React from 'react'
import { useState,useRef } from 'react';
import MapComponent from '../mainpage/answer/coordinate'
const ObyektForm = () => {

    const fileInputRef = useRef(null);
    const [images, setImages] = useState([]);
    const triggerFileInput = () => {
        fileInputRef.current.click();
    };
    const onImageChange = (event) => {
        if (event.target.files) {
            const selectedImages = Array.from(event.target.files).slice(0, 10); // Limit to 10 images
            const newImageUrls = selectedImages.map((image) => URL.createObjectURL(image));
            if (images.length > 9) {
                return;
            }
            setImages((prevImages) => [...prevImages, ...newImageUrls]);
        }
    };

    const keepingImgSource = images;

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
            <div className='mt-5 ms-1'>
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
                            <p> <strong>Obyektinizi satmaq və ya kiraye vermək üçün aşağıdakı sualları cavablandırın:</strong></p>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div>
                            <div className='div-in-label'>
                                <label htmlFor="customerName">Obyekt sahibinin adı və Soyadı:</label>
                            </div>
                            <div className='col-12 div-in-input'>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='mt-3'>
                            <div className='div-in-label'>
                                <label htmlFor="customerName">Obyekt sahibinin əlaqə nömrəsi:</label>
                            </div>
                            <div className='col-12 div-in-input'>
                                <input type="number" placeholder='0xx-xxx-xx-xx' />
                            </div>
                        </div>
                        <div>
                            <div className='d-flex flex-column align-items-center mt-3'>
                                <p className='text-danger fs-5'>Obyektinizə aid 10 şəkil əlavə edin.</p>
                                <div className="custom-file-input" onClick={triggerFileInput}>
                                    Şəkil əlavə etmək.
                                </div>
                                <input
                                    type="file"
                                    onChange={onImageChange}
                                    className="filetype"
                                    multiple
                                    ref={fileInputRef}
                                    style={{ display: 'none' }}
                                />
                                <div className='mt-4'>
                                    <p>Yüklədiyiniz şəkil sayı: {images.length}</p>
                                </div>
                            </div>

                        </div>
                        <div>
                            <div className=' col-12 p-2 mt-4 ps-2'>
                                <div className='answer-images-rent'>
                                    <div className='overflow-hidden backgrounImgDefault'>
                                        <div>
                                            <span onClick={btnLeftIcon}><i className="fa-solid fa-angle-left"></i></span>
                                            <span onClick={btnRightIcon}><i className="fa-solid fa-angle-right"></i></span>
                                        </div>
                                        <div>
                                            <img src={keepingImgSource[ImgSourceIndex]} alt="" className='w-100 h-100' />
                                        </div>




                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-3'>

                            <div className='div-in-label'>
                                <label htmlFor="customerName">Obyektin yerləşdiyi rayon:</label>
                            </div>
                            <div className='col-12 div-in-select'>
                                <select name="" id="">
                                    <option value=""></option>
                                    <option value="">Digər Rayon</option>
                                    <option value="">Nəsimi Rayon</option>
                                    <option value="">Nizami Rayon</option>
                                    <option value="">Xətai Rayon</option>
                                    <option value="">Nərmanov Rayon</option>
                                    <option value="">Yasamal Rayon</option>
                                    <option value="">Pirallahı Rayon</option>
                                    <option value="">Suraxanı Rayon</option>
                                    <option value="">Sabunçu Rayon</option>
                                    <option value="">Səbail Rayon</option>
                                    <option value="">Xəzər Rayon</option>
                                    <option value="">Qaradağ Rayon</option>
                                    <option value="">Binəqədi Rayon</option>
                                </select>
                            </div>
                        </div>
                        <div className='mt-3'>
                            <div className='div-in-label'>
                                <label htmlFor="customerName">Obyektin yerləşdiyi küçənin adı:</label>
                            </div>
                            <div className='col-12 div-in-input'>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='mt-3'>

                            <div className='div-in-label'>
                                <label htmlFor="customerName">Obyektinizi satırsınız yoxsa kiraye verirsiniz:</label>
                            </div>
                            <div className='col-12 div-in-select'>
                                <select name="" id="">
                                    <option value=""></option>
                                    <option value=""> Satılır</option>
                                    <option value=""> Kiraye verilir</option>
                                   
                                </select>
                            </div>
                        </div>
                        <div className='mt-3'>
                            <div className='div-in-label'>
                                <label htmlFor="customerName">Obyectinin qiyməti:</label>
                            </div>
                            <div className='col-12 div-in-input'>
                                <input type="text" />
                            </div>
                        </div>
                     
                        <div className='mt-3'>
                            <MapComponent />
                        </div>

                        <div className='mt-3'>

                            <div className='div-in-label'>
                                <label htmlFor="customerName">Metro:</label>
                            </div>
                            <div className='col-12 div-in-select'>
                                <select name="" id="">
                                    <option value=""></option>
                                    <option value="">Metroya yaxın deyil</option>
                                    <option value="">Həzi Aslanov Metrosu</option>
                                    <option value="">Əhmədli Metrosu</option>
                                    <option value="">Xalqlar dostluğu Metrosu</option>
                                    <option value="">Neftçilər Metrosu</option>
                                    <option value="">Qara qarayev Metrosu</option>
                                    <option value="">Koroğlu Metrosu</option>
                                    <option value="">Ulduz Metrosu</option>
                                    <option value="">Bakmil Metrosu</option>
                                    <option value="">Nərman Nərmanov Metrosu</option>
                                    <option value="">Gənçlik Metrosu</option>
                                    <option value="">28 May Metrosu</option>
                                    <option value="">Şah İsmayıl Xətai Metrosu</option>
                                    <option value="">Sahil Metrosu</option>
                                    <option value="">İçərişəhər Metrosu</option>
                                    <option value="">Nizami Metrosu</option>
                                    <option value="">Elmlər Metrosu</option>
                                    <option value="">İnşaatçılar Metrosu</option>
                                    <option value="">20 Yanvar Metrosu</option>
                                    <option value="">Memar Əcəmi Metrosu</option>
                                    <option value="">Nəsimi Metrosu</option>
                                    <option value="">Azadlıq Metrosu</option>
                                    <option value="">Dərnəgül Metrosu</option>
                                    <option value="">8 Noyabr Metrosu</option>
                                    <option value="">Avtovağzal Metrosu</option>
                                    <option value="">Xocəsən Metrosu</option>

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
                                <label htmlFor="customerName">Obyektin sahəsi:</label>
                            </div>
                            <div className='col-12 div-in-input'>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='mt-3'>
                            <div className='div-in-label'>
                                <label htmlFor="customerName">Obyekt haqqında əlavə məlumat yaza bilərsiniz:</label>
                            </div>
                            <div className='col-12 div-in-input'>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='d-flex justify-content-center col-12 mb-5'>
                            <div className=' mt-5'>
                                <button className='btn btn-mycolor pe-5 ps-5'>Elan yerləşdirmək</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ObyektForm