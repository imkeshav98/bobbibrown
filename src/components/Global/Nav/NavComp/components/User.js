import React from "react";
import "./User.css";
import { FiX } from "react-icons/fi";
import { IconContext } from "react-icons";
import { BsFacebook } from "react-icons/bs";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogin } from "../../../../../Redux/Login/action";

export default function User() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const crossIcon = () => {
    document.querySelector(".hiddenBoxofLogin").classList.add("hidden");
  };

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    const { name, value } = e.target;
    setLogin({
      ...login,
      [name]: value,
    });
  };

  const loginSuccess = (e) => {
    e.preventDefault();
    axios
      .post("https://bobbi-brown-api.herokuapp.com/login", login)
      .then((res) => {
        localStorage.setItem("Userdata", JSON.stringify(res.data.user));
        localStorage.setItem("UserToken", JSON.stringify(res.data.token));
        dispatch(userLogin(res.data.user));
        navigate("/");
      });
  };

  return (
    <>
      <div className="userbox">
        <div className="crossIcon" onClick={crossIcon}>
          <IconContext.Provider value={{ color: "grey", size: "2rem" }}>
            <FiX />
          </IconContext.Provider>
        </div>
        <div className="upperPortionOfUserBox">
          <h3 style={{ marginBottom: "0.5em" }}>Login</h3>
          <input
            className="emailAndPass my-1"
            type="text"
            placeholder="Email"
            name="email"
            onChange={handleLogin}
          />
          <br />
          <input
            className="emailAndPass my-1"
            type="text"
            placeholder="Password"
            name="password"
            onChange={handleLogin}
          />
          <br />
          <a href="/" className="allHyperLinks my-2">
            Forgot Password?
          </a>
          <br />
          <button className="LogInButton my-3" onClick={loginSuccess}>
            LOG IN
          </button>

          <hr className="horizontalLine" />
        </div>
        <div className="Registerpart">
          <p>Don't have an account?</p>
          <button className="RegisterOfUser">REGISTER</button>
        </div>
      </div>
      <div class="arrowOfUser"></div>
    </>
  );
}
