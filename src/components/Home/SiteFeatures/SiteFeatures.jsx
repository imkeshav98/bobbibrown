import "./siteFeatures.css";
import { sfd } from "./siteFeaturesData";

export const SiteFeatures = () => {
  return (
    <section>
      <div className="siteFeatures">
        {sfd.map((e) => (
          <div className="siteFeatures__item">
            <img src={e.image} alt="img" />
            <h3>{e.heading}</h3>
            <p>{e.describtion}</p>
            <span>{e.ctaText}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
