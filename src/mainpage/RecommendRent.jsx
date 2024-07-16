import React from 'react';
import { useEffect,useState } from 'react';
import Section from '../section';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../Redux/RentRecommendRedux';
const RecommendRent = () => {
    const [Data, setData] = useState([]);
    const dispatch = useDispatch();
    const GetData = useSelector((state) => state.RentRecommend.data);
    const hasFetched = useSelector((state) => state.RentRecommend.hasFetched);
    
  useEffect(() => {
    if (!hasFetched) {
      dispatch(fetchData());
    }
    setData(GetData)
  }, [dispatch, hasFetched]);

    var parsedData = Data.map((jsonString) => JSON.parse(jsonString));
  return (
    <>
    {Data.length>0 && (
      <div className='Recommend'>
      <div className='RecommendText'><p>Tövsiyə edilənlər:</p></div>
    <div className="d-flex flex-row RecommendSections pb-2">
      {parsedData.map((x,index) => (  
        <Section
          props={x}
          key={index}
        />
      ))}
    </div>
  </div>
    )}
    
    </>
  )
}

export default RecommendRent