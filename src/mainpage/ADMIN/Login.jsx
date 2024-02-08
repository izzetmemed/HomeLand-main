import React from "react";
import { useRef } from "react";
import SendLog from "../../MyComponents/SendLog";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const User = useRef(null);
  const Password = useRef(null);
  const login = async () => {
    const Data = {
      UserName: User.current.value,
      Password: Password.current.value,
    };
    try {
      const Resp = await SendLog(Data, "Auth/login");
      await sessionStorage.setItem("Resp", JSON.stringify(Resp));
      navigate("/Homelogin/MainAdmin");
    } catch (error) {
      console.error("Error:", error);
    }
  };
  // async function refreshToken() {
  //   const oldToken = sessionStorage.getItem("Resp");
  //   console.log(oldToken)
  //   try {
  //     const response = await fetch("--", {
  //       method: "POST",
  //       headers: {
  //         "Authorization": `Bearer ${JSON.parse(oldToken)}`,
  //       },
  //     });
  
  //     if (!response.ok) {
  //       throw new Error("Failed to refresh token");
  //     }
  
  //     const newToken = await response.text();
  //     sessionStorage.setItem("Resp", newToken); 
  //     return newToken;
  //   } catch (error) {
  //     console.error("Error refreshing token:", error);
  //     // Additional logic could be added here for handling repeated failures
  //   }
  // }
  
  // const intervalId = setInterval(() => {
  //   if (sessionStorage.getItem("Resp")) {
  //     console.log("ndn")
  //     refreshToken().then(newToken => {
  //       console.log("Token refreshed:", newToken);
  //     }).catch(error => {
  //       console.error("Failed to refresh token:", error);
  //       // Consider clearing the interval here if needed
  //       // clearInterval(intervalId);
  //     });
  //   }
  // }, 8000);
  
  return (
    <div>
      <div className="h-100">
        <div className="d-flex justify-content-center align-items-center flex-column login-div">
          <input type="text" placeholder="User" ref={User} />
          <input type="password" placeholder="Password" ref={Password} />
          <button className="btn btn-mycolor mt-2" onClick={login}>
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
