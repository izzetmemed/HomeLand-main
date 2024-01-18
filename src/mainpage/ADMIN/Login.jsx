import React from "react";
import { useRef } from "react";
import SendLog from "../../MyComponents/SendLog";
import {useNavigate} from 'react-router-dom';
const Login = () => {
  const navigate=useNavigate();
  const User=useRef(null);
  const Password=useRef(null);
  const login=async ()=>{
    const Data={
      UserName:User.current.value,
      Password:Password.current.value
    }
    try {
      const Resp = await SendLog(Data, "Auth/login");
      await sessionStorage.setItem('Resp', JSON.stringify(Resp));
      navigate("/HomeLogin/MainAdmin");
   } catch (error) {
      console.error('Error:', error);
   }
   
  }
  return (
    <div>
      <div className="h-100">
        <div className="d-flex justify-content-center align-items-center flex-column login-div">

          <input type="text" placeholder="User" ref={User}/>
          <input type="password" placeholder="Password" ref={Password}/>
            <button className="btn btn-mycolor mt-2" onClick={login}>LOGIN</button>

          
        </div>
      </div>
    </div>
  );
};

export default Login;
