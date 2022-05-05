import "./community.css";
import { comData } from "./comData";
import { AiOutlineCamera } from "react-icons/ai";

export const Community = () => {
  return (
    <section
      className="siteCommunity"
      style={{
        marginBottom: "4em",
      }}
    >
      <h2>#BOBBIBROWN COMMUNITY</h2>
      <p>
        Looking fresh-faced? Let's see it. Mention @bobbibrown and tag
        #BobbiBrown to share.
      </p>
      <div className="siteCom__card">
        {comData.map((e, i) => (
          <div className="card-container" key={i}>
            <div className="card-image">
              <img src={e.image} alt="img" />
            </div>
            <div className="card-cta">
              <button className="card-container__btn">SHOP NOW</button>
            </div>
            <div className="card__username">{e.username}</div>
          </div>
        ))}
      </div>
      <button className="gallery__btn">
        <AiOutlineCamera />
        <span>SHARE YOUR LOOK</span>
      </button>
      <p className="gallery__cta">VIEW GALLERY</p>
    </section>
  );
};
