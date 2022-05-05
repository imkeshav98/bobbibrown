import { BookSession } from "./BookSession/BookSession";
import { Community } from "./Community/Community";
import { FeaturedSection1 } from "./FeaturedSection1/FeaturedSection1";
import { SiteFeatures } from "./SiteFeatures/SiteFeatures";

export const Home = () => {
  return (
    <>
      <FeaturedSection1 />
      <BookSession />
      <Community />
      <SiteFeatures />
    </>
  );
};
