import "./Error.css";
export const ErrorRoute = () => {
  return (
    <section>
      <div className="errordiv">
        <h2>WE'RE SORRY</h2>
        <img
          src="https://www.bobbibrowncosmetics.com/media/export/cms/404-lipstick.jpg"
          alt="error pic"
        />
        <p>
          We can't seem to find the page you're looking for.
          <br />
          Want to try searching for something else?
        </p>
        <div>
          <button>NEW</button>
          <button>MAKEUP</button>
          <button>SKIN</button>
        </div>
      </div>
    </section>
  );
};
