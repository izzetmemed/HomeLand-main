import React, { useRef, useState } from "react";
import SendLog from "../../MyComponents/SendLog";
import { useNavigate } from "react-router-dom";
import Scroll from "../../MyComponents/Scroll";

const Login = () => {
  Scroll();
  const navigate = useNavigate();
  const User = useRef(null);
  const Password = useRef(null);
  
  const login = async (event) => {
    event.preventDefault(); // Prevent the default form submission
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

  const [activeTab, setActiveTab] = useState('login');

  const changeContent = (contentId) => {
    setActiveTab(contentId);
  };

  return (
    <div>
      <section className="login-register-area">
        <div className="custom-container">
          <div className="row">
            <div className="col-lg-7 col-md-12 ms-auto me-auto">
              <div className="login-register-wrapper">
                <div className="login-register-button d-flex justify-content-center align-items-center">
                  <a href="#login" className={activeTab === 'login' ? 'active' : ''} onClick={() => changeContent('login')}>Login</a>
                  <span>|</span>
                  <a href="#register" className={activeTab === 'register' ? 'active' : ''} onClick={() => changeContent('register')}>Register</a>
                </div>
                <div className="login-register-content position-relative">
                  <div id="login" className={'login-register-form-container ' + (activeTab === 'login' ? 'active' : '')}>
                    <div className="login-form-content">
                      <form onSubmit={login}>
                        <div className="inp-box d-flex flex-column">
                          <input type="text" name="username" placeholder="Username" ref={User} autoComplete="username" />
                          <input type="password" name="password" placeholder="Password" ref={Password} autoComplete="current-password" />
                        </div>
                        <div className="button-box">
                          <div className="login-btn d-flex justify-content-between">
                            <div>
                              <input type="checkbox" className="me-1" />
                              <label> Remember me</label>
                            </div>
                            <a href="#">Forgot Password ?</a>
                          </div>
                          <button type="submit">LOGIN</button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div id="register" className={'login-register-form-container ' + (activeTab === 'register' ? 'active' : '')}>
                    <div className="login-form-content">
                      <form>
                        <div className="inp-box d-flex flex-column">
                          <input type="text" name="username" placeholder="Username" autoComplete="username" />
                          <input type="password" name="password" placeholder="Password" autoComplete="new-password" />
                          <input type="email" name="email" placeholder="Email" autoComplete="email" />
                        </div>
                        <div className="button-box">
                          <button type="submit">REGISTER</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
