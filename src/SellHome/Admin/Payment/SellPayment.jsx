import React from "react";
import SectionPayment from "./SellSectionPayment";
import { useEffect, useState, useRef } from "react";
import {Load} from '../../../Load/Load';
import Pagination from "../../../pagenation";
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, setPage } from '../../../Redux/SellAdmin';
const SellPayment = () => {
  const inputValue = useRef(null);
  const inputOwnValue = useRef(null);
  const inputCustomerValue = useRef(null);
  const [Type, setType] = useState(null);
  const [Number1, setNumber] = useState(null);

  const dispatch = useDispatch();
  const GetData = useSelector((state) => state.SellAdmin.data);
  const currentPageR = useSelector((state) => state.SellAdmin.currentPage);
  const totalPages = useSelector((state) => state.SellAdmin.totalPages);
  const hasFetched = useSelector((state) => state.SellAdmin.hasFetched);
  const SearchNumber = useSelector((state) => state.SellAdmin.SearchNumber);
  const SearchRedux = useSelector((state) => state.SellAdmin.SearchModel);

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
          <input type="number" placeholder="kod" ref={inputValue} />
          <button className="btn btn-success" onClick={() => {
              setType("id");
              setNumber(inputValue.current.value);
            }}>
            {" "}
            Axtarmaq
          </button>
        </div>
        <div className="col-12 d-flex justify-content-center mt-5">
          <input
            type="number"
            ref={inputOwnValue}
            placeholder="Ev sahibinin nömrəsi"
          />
          <button className="btn btn-success" onClick={() => {
              setType("AdminONumber");
              setNumber(inputOwnValue.current.value);
            }}>
            {" "}
            Axtarmaq
          </button>
        </div>
        <div className="col-12 d-flex justify-content-center mt-5">
          <input
            type="number"
            ref={inputCustomerValue}
            placeholder="Müştəri nömrəsi"
          />
          <button className="btn btn-success"onClick={() => {
            setType("AdminCNumber");
            setNumber(inputCustomerValue.current.value);
          }}>
            {" "}
            Axtarmaq
          </button>
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
        <div className="d-flex flex-wrap">
          {parsedData.map((x) => (
            <SectionPayment
              id={x.Id}
              Name={x.FullName}
              Number={x.Number}
              Code={x.Id}
              key={x.Id}
              data={x}
            />
          ))}
           {parsedData.length === 0 && (
          <div className="w-100 BasketİsEmpty d-flex justify-content-center align-items-center">
            {showLoad ? <Load/> :  <p className='fs-3 text-danger'>Ev tapılmadı!!!</p>} 
          </div>
        )}
        </div>
        <Pagination countOfPagination={totalPages} setPage={handlePageChange} current={currentPageR}/>  
        </div>
    </div>
  );
};

export default SellPayment;
