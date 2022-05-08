import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import "./cart.css";

export const CartData = (data, quantityy, i) => {
  // const [qty, setQty] = useState(1);
  // const handleQty = (e) => {
  //   setQty(e.target.value);
  // };
  //productId:data, qty
  const getCartElement = async () => {
    let res = await fetch(
      `https://bobbi-brown-api.herokuapp.com/product/product/${data.data}`
    );
    let element_data = await res.json();
    setCartElement(element_data);
  };
  // {"Product":{"_id":"6270c0fc5bb7242fde5f993f","Image":"https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EGXR04_600x600_0.jpg","name":"SKIN LONG-WEAR WEIGHTLESS FOUNDATION","tag":"16-hour, breathable, natural matte coverage","price":44,"page":"face"}}
  console.log("productId", data.quantityy);
  const [cartElement, setCartElement] = useState({
    Product: {
      Image: "",
      name: "",
      tag: "",
      price: "",
      page: "",
    },
  });

  useEffect(() => {
    getCartElement();
  }, []);
  console.log("cartElement", cartElement);

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

  // REMOVE FUNCTION
  // const removeFunction=(data)=>{
  //   let token = JSON.parse(localStorage.getItem("UserToken"));
  //   // console.log(product_id);
  //   fetch(`https://bobbi-brown-api.herokuapp.com/cart/remove/${data}`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: "Bearer " + token,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((cart) => {
  //       // dispatch(userLogin(cart.user));
  //       localStorage.setItem("Userdata", JSON.stringify(cart.user));
  //     });
  // }

  return (
    <div>
      <div key={i} className="flex_table">
        <div className="image_name">
          <img src={cartElement.Product.Image} alt=""></img>
          <div>
            <p>
              <b>{cartElement.Product.name}</b>
              {/* name */}
            </p>
            <p
              style={{
                fontSize: "12.5px",
                color: "grey",
                textDecoration: "underline",
              }}
              // onClick={removeFunction}
            >
              R E M O V E
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            alignItems: "center",
          }}
        >
          <button
            style={{ border: "none", fontWeight: "bold", fontSize: "15px" }}
          >
            {" "}
            +{" "}
          </button>
          <p style={{ paddingTop: "10px" }}>{data.quantityy}</p>
          <button
            style={{ border: "none", fontWeight: "bold", fontSize: "15px" }}
          >
            {" "}
            -{" "}
          </button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "2em",
          }}
        >
          <p>${cartElement.Product.price}</p>
        </div>
        {/* price */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "2em",
          }}
        >
          <p>${cartElement.Product.price * data.quantityy}</p>
        </div>{" "}
        {/* price * qty */}
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
