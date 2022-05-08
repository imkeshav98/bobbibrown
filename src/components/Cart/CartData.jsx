import { useState } from "react";

import "./cart.css";

export const CartData = (data, i) => {
  // const [qty, setQty] = useState(1);
  // const handleQty = (e) => {
  //   setQty(e.target.value);
  // };
  const [form_subscription, setSubscription] = useState({
    subscription: false,
    value: "",
  });
  const handleSubscription = (event) => {
    if (event.target.value === "onetime") {
      setSubscription(false);
    } else {
      setSubscription(true);
    }
  };

  return (
    <div>
      <div key={i} className="flex_table">
        <div className="image_name">
          <img src={Image} alt=""></img>
          <div>
            <p>
              <b>{}</b>
              {/* name */}
            </p>
            <p
              style={{
                fontSize: "12.5px",
                color: "grey",
                textDecoration: "underline",
              }}
            >
              R E M O V E
            </p>
          </div>
        </div>
        <div>
          <select>
            {/* Onchange = {handle quantity}*/}
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div>{}</div>
        {/* price */}
        <div>{}</div> {/* price * qty */}
      </div>
      <form>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <section>
            <input
              type="radio"
              name="selected"
              value="onetime"
              onChange={handleSubscription}
            ></input>
            <label>PURCHASE ONE TIME ONLY</label>
          </section>
          <section>
            <input
              type="radio"
              name="selected"
              value="replenish"
              onChange={handleSubscription}
            ></input>
            <label>AUTO REPLENISH + FREE SHIPPING</label>
          </section>
        </div>
      </form>
      {form_subscription === true ? (
        <div style={{ width: "70%", textAlign: "justify" }}>
          <p>
            Thank you for choosing our Replenishment Service. This product will
            be automatically shipped at the interval of days you have selected.
            Your credit card will be charged at the time the product ships.
          </p>{" "}
          <select>
            <option value="30">30 days</option>
            <option value="60">60 days</option>
            <option value="90">90 days</option>
          </select>
        </div>
      ) : null}
      <hr></hr>
    </div>
  );
};

export const Subtotal = ({ data }) => {
  return (
    <div id="subtotal">
      <div>
        <p>Subtotal</p>
        <p>Shipping</p>
        <p>
          <b>SUBTOTAL</b>
        </p>
      </div>
      <div>
        <p>$ {data}</p>
        <p>FREE</p>
        <p>
          <b>$ {data}</b>
        </p>
      </div>
    </div>
  );
};
