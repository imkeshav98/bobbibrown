import React from "react";
import "./SignUp.css";
import { FiX } from "react-icons/fi";
import { IconContext } from "react-icons";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Signup() {
  const crossIcon = () => {
    document.querySelector(".hiddenBoxofSignUp").classList.add("hidden");
  };

  return (
    <div className="Signup_div">
      <div className="arrow"></div>
      <div className="crossIcon" onClick={crossIcon}>
        <IconContext.Provider value={{ color: "grey", size: "2rem" }}>
          <FiX />
        </IconContext.Provider>
      </div>
      <h2 style={{ marginTop: "-30px" }}>SIGN UP NOW</h2>
      <h6>
        Sign up for emails and be the first to know
        <br />
        about exclusive offers, pre-sales, new
        <br />
        collections and more.
      </h6>
      <input
        className="inputOfSignUp"
        type="text"
        placeholder="ENTER YOUR EMAIL"
      />
      <br />
      <br />
      <p className="WeLoveBirthday">WE LOVE BIRTHDAYS</p>
      {/* <br /> */}
      <p>
        Tell us your birthday and we'll send you a <br /> special surprise on
        your big day.
      </p>
      <div className="inputMonthSelect">
        <select
          className="form-select selecttagOFInput"
          aria-label="Default select example"
        >
          <option selected>MONTH</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
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
        </select>

        <select
          className="form-select selecttagOFInput"
          aria-label="Default select example"
        >
          <option selected>DAY</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
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

      <p>
        By clicking "Submit", I agree to the Bobbi Brown <br />
        <a href=""> Terms and Conditions</a>
        and <a href=""> Privacy Policy</a>.
      </p>
      <br />
      <Link to="/login">
        <button className="submitbuttonSignUp">SUBMIT</button>
      </Link>
    </div>
  );
}
