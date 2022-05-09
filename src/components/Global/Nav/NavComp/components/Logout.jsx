import React from "react";
import { ButtonStyled } from "../../../../../Styled/Button";
import { useDispatch } from "react-redux";
import { userLogin } from "../../../../../Redux/Login/action";
import IM1 from "../../../../../assets/avatar1.gif";
import IM2 from "../../../../../assets/avatar2.gif";
import IM3 from "../../../../../assets/avatar3.gif";

export const Logout = () => {
  const userData = JSON.parse(localStorage.getItem("Userdata")) || [];
  const dispatch = useDispatch();
  const avatar = [IM1, IM2, IM3];
  let currentAvatar = avatar[Math.floor(Math.random() * avatar.length)];

  return (
    <div
      className="navUserLogout"
      style={{
        position: "absolute",
        top: "5rem",
        backgroundColor: "white",
        zIndex: "999",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "5px",
        padding: "1em",
        gap: "1em",
        right: "2rem",
        border: "1px solid black",
        boxShadow:
          "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
      }}
    >
      <div
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "bolder",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        <img src={currentAvatar} alt="" style={{ width: "100%" }} />
      </div>
      <span style={{ wordWrap: "break-word", fontWeight: "500" }}>
        {userData === [] ? "user" : userData.name}
      </span>
      <ButtonStyled
        style={{ borderRadius: "3px" }}
        onClick={() => {
          localStorage.removeItem("Userdata");
          localStorage.removeItem("UserToken");
          dispatch(userLogin(false));
          // window.location.reload();
        }}
      >
        Logout
      </ButtonStyled>
    </div>
  );
};
