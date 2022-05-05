import "./featuredSection1.css";
import { featuredData1 } from "./featuredData1";

export const FeaturedSection1 = () => {
  return (
    <section className="featuredSection1">
      <div className="featuredSection1__left">
        <h2>{featuredData1.heading}</h2>
        <p>{featuredData1.description}</p>
      </div>
      <div className="featuredSection1__middle">
        <img src={featuredData1.image} alt="" />
      </div>
      <div className="featuredSection1__right">
        {featuredData1.details.map((e) => (
          <div>
            <h5>{e.heading}</h5>
            <p>{e.description}</p>
            <span>{"Shop Now"}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
