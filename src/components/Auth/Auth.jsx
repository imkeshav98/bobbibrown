/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../Redux/Login/action";

import "./Auth.css";

export const Auth = () => {
  let dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const [userData, setUserData] = useState({
    name: "",
    password: "",
    email: "",
  });
  console.log(userData);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://bobbi-brown-api.herokuapp.com/register", userData)
      .then(function (response) {
        localStorage.setItem("Userdata", JSON.stringify(response.data.user));
        localStorage.setItem("UserToken", JSON.stringify(response.data.token));
        dispatch(userLogin(response.data.user));
        navigate("/");
      })
      .catch(function (error) {
        if (error.response.data) {
          alert("Email and Password Should be fill");
        }
      });
  };

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
    <div>
      <div className="Auth">
        <form className="formleft" onSubmit={loginSuccess}>
          <section className="left">
            <div className="leftDiv">
              <div className="leftDiv__heading">
                <h3 className="Alreadyhaveacc" style={{ fontSize: "1.4em" }}>
                  Already have an account?
                </h3>
                <h5 className="section" style={{ fontSize: "1em" }}>
                  CONTINUE
                </h5>
              </div>
              <div>
                <input
                  className="form"
                  type="email"
                  name="email"
                  placeholder="*Email Address"
                  onChange={handleLogin}
                  required
                />
              </div>
              <div>
                <input
                  className="form"
                  type="password"
                  name="password"
                  placeholder="*Password"
                  onChange={handleLogin}
                  required
                />
              </div>
              <div className="forgetpass">
                <a href="#">Forgot your password?</a>
              </div>
              <div>
                <input
                  className="Continueleft"
                  type="submit"
                  value="CONTINUE"
                  onSubmit={loginSuccess}
                />
              </div>
            </div>
          </section>
        </form>
        <div className="vertical_lineAuth"></div>
        <form className="formright" onSubmit={handleSubmit}>
          <section className="right">
            <div className="rightDiv">
              <div>
                <div className="rightDiv__heading">
                  <h3 className="Alreadyhaveacc" style={{ fontSize: "1.4em" }}>
                    Don't have an account?
                  </h3>
                  <h5 className="section" style={{ fontSize: "1em" }}>
                    CREATE & JOIN BB <u>ACCESS</u>
                  </h5>
                </div>
                <div>
                  <input
                    className="form"
                    type="text"
                    name="name"
                    placeholder="*NAME"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <input
                    className="form"
                    type="email"
                    name="email"
                    placeholder="*Email Address"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <input
                    className="form"
                    type="password"
                    name="password"
                    placeholder="*Password"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <section
                    className="rightsection"
                    style={{
                      marginLeft: "0px",
                      marginBottom: "1em",
                    }}
                  >
                    <label className="check">When is your birthday?</label>

                    <div className="monnthnday">
                      <select
                        className="month"
                        style={{
                          marginLeft: "0px",
                        }}
                      >
                        <option value="">Month</option>
                        <option value="1">January</option>
                        <option value="2">February</option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                      </select>

                      <select className="day">
                        <option value="">Day</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                      </select>
                    </div>
                  </section>
                </div>
                <div className="rightleble">
                  <label>
                    <div>
                      <input type="checkbox" required />
                      <span className="check">
                        Yes, I want to join BB Access. By clicking ‘Join Now’ I
                        agree to BB Access{" "}
                        <a
                          className="termCond"
                          href="/bobbi-brown-club-terms-conditions"
                        >
                          Terms &amp; Conditions
                        </a>
                        , Bobbi Brown{" "}
                        <a className="termCond" href="/privacy-policy">
                          Privacy Policy
                        </a>{" "}
                        and, if I am a California resident, the Notice of{" "}
                        <a className="termCond" href="/privacy-policy">
                          Financial Incentive
                        </a>
                        . I also agree to the Bobbi Brown{" "}
                        <a
                          className="termCond"
                          href="/customer-service-corporate#corporate-terms "
                        >
                          Terms and Conditions
                        </a>
                      </span>
                    </div>
                  </label>
                  <label>
                    <input type="checkbox" required />
                    <span className="check">
                      By clicking "Sign Up", I agree to the Bobbi Brown{" "}
                      <a
                        href="/customer-service-corporate#corporate-terms"
                        target="_blank"
                        className="termCond"
                      >
                        Terms and Conditions
                      </a>
                      and
                      <a
                        href="/privacy-policy"
                        target="_blank"
                        className="termCond"
                      >
                        Privacy Policy
                      </a>
                      .
                    </span>
                  </label>
                </div>
                <div>
                  <input
                    className="Continueright"
                    type="submit"
                    value="SIGN UP"
                    onSubmit={handleSubmit}
                  />
                </div>
              </div>
            </div>
          </section>
        </form>
      </div>

      <br />

      <div className="lastdiv">
        <span className="check">
          By clicking "CONTINUE WITH FACEBOOK", I agree to the Bobbi Brown{" "}
        </span>
        <a href="#" target="" className="termCond">
          Terms and Conditions
        </a>
        <span className="termCond">and </span>
        <a href="#" target="" className="termCond">
          Privacy Policy
        </a>
        <div>
          <input id="" className="" type="checkbox" name="" required />
          <label className="check">
            Yes, sign me up to hear from Bobbi Brown! To learn more, view our{" "}
            <a href="/privacy-policy" className="termCond">
              Privacy Policy
            </a>
            . If I am a California resident, I agree to the Notice of{" "}
            <a href="/privacy-policy#financial" className="termCond">
              Financial Incentive
            </a>
          </label>
        </div>
      </div>
    </div>
  );
};
