import React, { useEffect } from "react";
import Slider from "react-slick";
import LandingPageCrousel from "./LandingPageCrousel";
import LandingPageCrouseltwo from "./LandingPageCrouseltwo";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselVideo from "./CarouselVideo";

export function CrouselsOfImages() {
  return (
    <div>
      <div className="notinmobile">
        <Slider
          autoplay={true}
          outplayspeed={2000}
          dots
          arrows={false}
          initalslide={1}
          infinite={true}
        >
          <div>
            <LandingPageCrousel c />
          </div>
          <div>
            <LandingPageCrouseltwo />
          </div>
          <div>
            <CarouselVideo />
          </div>
        </Slider>
      </div>
    </div>
  );
}
