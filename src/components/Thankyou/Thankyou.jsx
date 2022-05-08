import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import IM from "../.././assets/thanksbanner.png";
import { ButtonStyled } from "../../Styled/Button";
import "./thankyou.css";

export const Thankyou = () => {
  const [timer, setTimer] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    let Interval;

    if (timer >= 1) {
      Interval = setInterval(() => {
        setTimer((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      clearInterval(Interval);
      navigate("/");
    }
    return () => clearInterval(Interval);
  }, [timer]);

  return (
    <div className="thankyou__Page">
      <div
        style={{
          position: "relative",
        }}
      >
        <img src={IM} alt="img" />
        <Link to="/">
          <ButtonStyled
            style={{
              padding: "0.5em 1em",
              position: "absolute",
              left: "40%",
              bottom: "8%",
            }}
          >
            CONTINUE SHOPPING
          </ButtonStyled>
        </Link>
      </div>
      <div>
        <p
          style={{
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
          }}
        >
          You will be redirected to homepage after{" "}
          <div
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              backgroundColor: "black",
              color: "white",
              margin: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {timer}
          </div>{" "}
          seconds.
        </p>
      </div>
    </div>
  );
};
