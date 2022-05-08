import React from "react";
import { ButtonStyled } from "../../../../../Styled/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogin } from "../../../../../Redux/Login/action";

export const Logout = () => {
  const userData = JSON.parse(localStorage.getItem("Userdata")) || [];
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
        gap: "2em",
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
          backgroundColor: "black",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "bolder",
          textAlign: "center",
        }}
      >
        <span style={{ wordWrap: "break-word" }}>
          {userData === [] ? "user" : userData.name}
        </span>
      </div>
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
