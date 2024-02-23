import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogOut = () => {
    const nav = useNavigate();

    const Logout = () => {
        sessionStorage.removeItem("Resp");
        nav("/");
    }

    return (
        <div className="col-12 mt-3 pe-1 ps-1">
            <button className="btn text-white search-btn-click fs-6" onClick={Logout}>
            <i class="fa-solid fa-arrow-right-from-bracket"></i> Log out
            </button>
        </div>
    );
}

export default LogOut;
