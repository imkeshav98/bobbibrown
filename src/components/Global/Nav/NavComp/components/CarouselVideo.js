import React, { useEffect } from "react";
import "./LandingPageCrousel.css";

export default function CarouselVideo() {
  return (
    <div className="LandingPageCrouselgif">
      <div
        style={{
          backgroundImage: `url(${"https://media.giphy.com/media/FfmY5py5UMLEqcCtRU/giphy.gif"})`,
          height: "75vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div class="bottom-leftVideo notinmobile" style={{ color: "white" }}>
        <h1 style={{ fontSize: "60px", color: "white" }}>
          MORE PLAY.
          <br /> YOUR WAY.
        </h1>
        <h6 style={{ color: "white" }}>
          Blend the rules with our{" "}
          <span style={{ fontWeight: "900", color: "white" }}>NEW</span> 24-hour{" "}
          <br />{" "}
          <span style={{ fontWeight: "900", color: "white" }}>
            Long-Wear Cream Shadow Stick-
          </span>
          now <br></br>in 29 ready-to-play shades.
        </h6>
        <button className="EnrichedEyebaseButton">SHOP NOW</button>
      </div>
    </div>
  );
}
