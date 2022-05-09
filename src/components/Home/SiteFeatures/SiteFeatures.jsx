import "./siteFeatures.css";
import { sfd } from "./siteFeaturesData";

export const SiteFeatures = () => {
  return (
    <div>
      <div className="siteFeatures">
        {sfd.map((e, i) => (
          <div className="siteFeatures__item" key={i}>
            <img src={e.image} alt="img" />
            <h3>{e.heading}</h3>
            <p>{e.describtion}</p>
            <span>{e.ctaText}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
