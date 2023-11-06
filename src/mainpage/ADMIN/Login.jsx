import React from 'react';
const Login = () => {
  return (
    <div>
        <div className="h-100">
            <div className='d-flex justify-content-center align-items-center flex-column login-div'>
            <input type="text" placeholder='User'/>
            <input type="password" placeholder='Password'/>
                  <button className='btn btn-mycolor mt-2'>LOGIN</button>
        </div>
        </div>
        
    </div>
  )
}

export default Login