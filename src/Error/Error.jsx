import React from 'react'
import { Link } from 'react-router-dom'
const Error = () => {
  return (
    <div>
            <div className='d-flex w-100 flex-column Error-massage justify-content-center align-items-center'>
                <p className='fs-2 '>Səhifə Tapılmadı.</p>
                <button className='btn '><Link to={"/"}>Ana səhifəyə geri dön</Link></button>
            </div>
    </div>
  )
}

export default Error