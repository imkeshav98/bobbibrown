import React from "react";
import "./bbaccess.css";
import { FiX } from "react-icons/fi";
import { IconContext } from "react-icons";
import "./Navbar.css";
import "./SignUp.css";

export default function Bbaccess() {
  const crossIcon = () => {
    document.querySelector(".hiddenBoxofBbaccess").classList.add("hidden");
  };
  return (
    <>
      <div className="JoinBbaccess">
        <div className="crossIcon" onClick={crossIcon}></div>
        <div className="ImageOfJoinBbaccess">
          <img
            className="ImgBbaccess"
            src="https://www.bobbibrowncosmetics.com/media/export/cms/Intrusive%20Popup/BB-Loyalty-Popup-img.jpg"
            alt=""
          />
        </div>
        <div className="TextOfBbaccess">
          <div className="crossIcon">
            <IconContext.Provider value={{ color: "black", size: "2rem" }}>
              <FiX />
            </IconContext.Provider>
          </div>

          <h3 style={{ color: "black" }}>WANT 15% OFF?</h3>
          <p>
            Join BB Access to save on <br></br> your first order and start{" "}
            <br></br>earning points and perks
          </p>
          <input
            className="BbaccessInputEmail"
            type="text"
            placeholder="Email Address"
          />
          <br />
          <br />
          <div className="JoinButtonAndLearnMore">
            <button className="Joinbutton">JOIN</button>
            <div className="LearnMore">
              <a href="" className="linkInput">
                LEARN MORE
              </a>
            </div>
          </div>
          <br />
          <a href="/" className="linkInput">
            Terms & Condition
          </a>
        </div>
      </div>
      <div className="arrowOfBbaccess"></div>
    </>
  );
}
