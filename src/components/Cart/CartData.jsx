/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { userLogin } from "../../Redux/Login/action";
import "./cart.css";
export const CartData = (data, quantityy, key) => {
  const dispatch = useDispatch();

  const deleteFunction = (productID) => {
    let token = JSON.parse(localStorage.getItem("UserToken"));
    fetch(`https://bobbi-brown-api.herokuapp.com/cart/delete/${productID}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((cart) => {
        dispatch(userLogin(cart.user));
        localStorage.setItem("Userdata", JSON.stringify(cart.user));
      });
  };

  const addtocart = (productID) => {
    let token = JSON.parse(localStorage.getItem("UserToken"));
    fetch(`https://bobbi-brown-api.herokuapp.com/cart/add/${productID}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((cart) => {
        dispatch(userLogin(cart.user));
        localStorage.setItem("Userdata", JSON.stringify(cart.user));
      });
  };

  const removecart = (productID) => {
    let token = JSON.parse(localStorage.getItem("UserToken"));
    fetch(`https://bobbi-brown-api.herokuapp.com/cart/remove/${productID}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((cart) => {
        dispatch(userLogin(cart.user));
        localStorage.setItem("Userdata", JSON.stringify(cart.user));
      });
  };

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

  return (
    <div key={key}>
      <div className="flex_table">
        <div className="image_name">
          <Link
            to={`/products/${data.data.page}/${data.data._id}`}
            className="image_name"
          >
            <img src={data.data.Image} alt=""></img>
          </Link>
          <div>
            <p>
              <b>{data.data.name}</b>
              {/* name */}
            </p>
            <p
              style={{
                fontSize: "12.5px",
                color: "grey",
                fontWeight: "500",
                cursor: "pointer",
                textDecoration: "underline",
              }}
              onClick={() => {
                deleteFunction(data.data._id);
              }}
            >
              REMOVE
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
            onClick={() => {
              addtocart(data.data._id);
            }}
          >
            {" "}
            +{" "}
          </button>
          <p style={{ paddingTop: "10px" }}>{data.quantityy}</p>
          <button
            style={{ border: "none", fontWeight: "bold", fontSize: "15px" }}
            onClick={() => {
              removecart(data.data._id);
            }}
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
          <p>${data.data.price}</p>
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
          <p>${data.data.price * data.quantityy}</p>
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
