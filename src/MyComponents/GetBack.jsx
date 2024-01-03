import React from 'react'
import { useNavigate } from 'react-router-dom';
const GetBack = ({Direct}) => {
    const navigate = useNavigate();
    const Back=()=>{
        navigate(Direct);
    }
  return (
    <div className='px-4 h-auto mb-3'>
        <button onClick={Back} className='btn w-100 text-white search-btn-click ' >Geri dön</button>
    </div>
  )
}

export default GetBack