import React from "react";
import { ButtonStyled } from "../../../../../Styled/Button";
import { useNavigate } from "react-router-dom";

export const Logout = () => {
  const userData = JSON.parse(localStorage.getItem("Userdata")) || [];
  const navigate = useNavigate();
  console.log(userData);

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
          window.location.reload();
        }}
      >
        Logout
      </ButtonStyled>
    </div>
  );
};
