import React from 'react';
import { useEffect,useState } from 'react';
import FetchGetAll from '../MyComponents/FetchGetAll';
import SectionSell from './SectionSell';
const RecommendSell = () => {
    const [Data, setData] = useState([]);
    useEffect(() => {
      const GetRecommend = async () => {
        try {
          const resp = await FetchGetAll("Sell/Recommend");
          setData(resp.data);
        } catch (error) {
          console.error("Error fetching data: GetRecommend");
        }
      };
      GetRecommend(); 
    }, []);
    var parsedData = Data.map((jsonString) => JSON.parse(jsonString));
  return (
    <>
    {Data.length>0 && (
      <div className='Recommend'>
      <div className='RecommendText'><p>Tövsiyə edilənlər:</p></div>
    <div className="d-flex flex-row RecommendSections pb-2">
      {parsedData.map((x,index) => (  
        <SectionSell
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

export default RecommendSell