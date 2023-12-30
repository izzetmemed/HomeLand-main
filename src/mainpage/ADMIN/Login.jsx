import React from 'react';
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <div>
        <div className="h-100">
            <div className='d-flex justify-content-center align-items-center flex-column login-div'>
            <input type="text" placeholder='User'/>
            <input type="password" placeholder='Password'/>
            <Link to={`/HomeLogin/MainAdmin`}><button className='btn btn-mycolor mt-2'>LOGIN</button></Link>
        </div>
        </div>
        
    </div>
  )
}

export default Login