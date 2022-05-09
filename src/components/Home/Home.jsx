import CarouselVideo from "../Global/Nav/NavComp/components/CarouselVideo";
import { CrouselsOfImages } from "../Global/Nav/NavComp/components/CrouselsOfImages";
import { BookSession } from "./BookSession/BookSession";
import { Community } from "./Community/Community";
import { FeaturedSection1 } from "./FeaturedSection1/FeaturedSection1";
import { SiteFeatures } from "./SiteFeatures/SiteFeatures";
import "./home.css";

export const Home = () => {
  return (
    <>
      <div className="onlyinmobile">
        <CarouselVideo />
      </div>
      <CrouselsOfImages />
      <FeaturedSection1 />
      <BookSession />
      <Community />
      <SiteFeatures />
    </>
  );
};
