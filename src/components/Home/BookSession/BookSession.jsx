import "./bookSession.css";
import { sessionSData } from "./sessionData";

export const BookSession = () => {
  return (
    <section className="sessions__section">
      <p
        className="sessions__P"
        style={{
          marginBottom: "1em",
        }}
      >
        VIRTUAL ARTISTY CONSULTATIONS
      </p>
      <h2
        className="sessions__h2"
        style={{
          marginBottom: "0.2em",
        }}
      >
        LEARN FROM THE PROS
      </h2>
      <p
        className="sessions__P"
        style={{
          marginBottom: "2em",
        }}
      >
        From trying a new shade to learning new tips, our artists are here to
        help with complimentary video sessions.
      </p>
      <div className="sessions_container">
        {sessionSData.map((e, i) => (
          <div className="session_container" key={i}>
            <img src={e.image} alt="img" />
            <span>{e.time}</span>
            <h5>{e.heading}</h5>
            <p>{e.description}</p>
            <button>BOOK NOW</button>
          </div>
        ))}
      </div>
    </section>
  );
};
