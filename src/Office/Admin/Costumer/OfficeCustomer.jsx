import React from 'react'
import SectionCustomer from './OfficeSectionCustomer';
import { useEffect,useState,useRef } from 'react';
import Pagenation from '../../../pagenation';
import {Load} from '../../../Load/Load';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, setPage } from '../../../Redux/OfficeAdmin';
const OfficeCustomer = () => {
    const inputValue=useRef(null);
    const [Type, setType] = useState(null);
    const [Number1, setNumber] = useState(null);
    const dispatch = useDispatch();
    const GetData = useSelector((state) => state.OfficeAdmin.data);
    const currentPageR = useSelector((state) => state.OfficeAdmin.currentPage);
    const totalPages = useSelector((state) => state.OfficeAdmin.totalPages);
    const hasFetched = useSelector((state) => state.OfficeAdmin.hasFetched);
    const SearchNumber = useSelector((state) => state.OfficeAdmin.SearchNumber);
    const SearchRedux = useSelector((state) => state.OfficeAdmin.SearchModel);
  
   
  useEffect(() => {
    if (!hasFetched) {
      dispatch(fetchData({ page: currentPageR }));
    }
  }, [dispatch, hasFetched, currentPageR]);
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      dispatch(setPage(newPage));
      dispatch(
        fetchData({
          page: newPage,
          SearchModel: SearchRedux,
          Number: SearchNumber,
        })
      );
    }
  };
  const RefuseSearch = () => {
    dispatch(setPage(1));
    dispatch(fetchData({ page: 1 }));
    setType(null);
  };
  useEffect(() => {
    if (Type !== null) {
      dispatch(setPage(1));
      dispatch(fetchData({ page: 1, SearchModel: Type, Number: Number1 }));
    }
  }, [Number1, Type]);
    const parsedData = GetData.data.map((jsonString) => JSON.parse(jsonString));
   const [showLoad, setShowLoad] = useState(true);
  
  useEffect(() => {
    if (parsedData.length === 0) {
      const timer = setTimeout(() => setShowLoad(false), 5000);
      return () => clearTimeout(timer);
    } else {
      setShowLoad(false);
    }
  }, [parsedData.length]);
  
  return (
    <div>
    <div>
      <div className="col-12 d-flex justify-content-center mt-5">
        <input type="number"  placeholder='kod' ref={inputValue}/>
        <button className='btn btn-success'  onClick={() => {
              setType("id");
              setNumber(inputValue.current.value);
            }}> Axtarmaq</button>
      </div>
      {(Type  || SearchRedux) &&(
          <div className="d-flex align-items-center col-12">
            <div className="col-12 col-lg-6 mt-4 pt-1">
              <button className="btn btn-mycolor" onClick={RefuseSearch}>
                Əvvəlki axtarışı ləğv etmək
              </button>
            </div>
          </div>
        )}
      <div className='d-flex flex-wrap'>
      {parsedData.map((x) => ( 
      <SectionCustomer
        key={x.Id}
        props={x}
      />
    ))}
    {parsedData.length === 0 && (
      <div className="w-100 BasketİsEmpty d-flex justify-content-center align-items-center">
        {showLoad ? <Load/> :  <p className='fs-3 text-danger'>Ev tapılmadı!!!</p>} 
      </div>
    )}
      </div>
    
  </div>
  <Pagenation countOfPagination={totalPages} setPage={handlePageChange} current={currentPageR}/>   
</div>
  )
}

export default OfficeCustomer