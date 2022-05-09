import { useEffect, useState } from "react";
import { BButton } from "../ProductDetails/styled-components";
import "./cart.css";
import { CartData, Subtotal } from "./CartData";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export const Cart = () => {
  const navigate = useNavigate();
  let cartItems = useSelector((store) => store.loginData.payload);
  const [cartData, setCartData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const proceedtoCheckout = () => {
    navigate("/checkout");
  };

  useEffect(() => {
    if (cartItems !== undefined) {
      setCartData(cartItems.cart.items);
    }
  }, [cartItems]);

  useEffect(() => {
    if (cartItems !== undefined) {
      setTotalPrice(cartItems.cart.totalPrice);
    }
  }, [cartItems]);

  return (
    <div style={{ padding: "2.5% 0%" }}>
      <div id="cart_div">
        <div className="cart_products">
          <img
            src="https://www.bobbibrowncosmetics.com/media/export/cms/offers/BB_Banner_Loyalty_728x90.jpg"
            alt=""
          ></img>
          <h3>SHOPPING BAG</h3>
          <hr></hr>
          <p>Enjoy Free Standard Shipping on any $65+ order.</p>
          <div className="flex_table">
            <div>
              <b>PRODUCT</b>
            </div>
            <div>
              <b>QUANTITY</b>
            </div>
            <div>
              <b>PRICE</b>
            </div>
            <div>
              <b>TOTAL</b>
            </div>
          </div>
          <hr></hr>
          {cartData.map((e, i) => {
            // let sum=0;
            return (
              <CartData data={e.productId} quantityy={e.qty} key={i}></CartData>
            );
          })}
          <div>
            <Subtotal data={totalPrice}></Subtotal>
            <hr></hr>
            <p>
              Afterpay cannot be used to purchase backordered, pre-ordered or
              auto-replenishment products, donations or gift cards{" "}
            </p>
          </div>
        </div>
        <div className="cart_summary">
          <BButton onClick={proceedtoCheckout} style={{ width: "100%" }}>
            CHECKOUT
          </BButton>
          <div className="flex_table" id="payment_icons">
            <img
              src="https://www.bobbibrowncosmetics.com/media/export/cms/icons/visa_card.svg"
              alt="visa"
            ></img>
            <img
              src="https://www.bobbibrowncosmetics.com/media/export/cms/icons/master_card.svg"
              alt="master"
            ></img>
            <img
              src="https://www.bobbibrowncosmetics.com/media/export/cms/icons/maestro_card.svg"
              alt="maestro"
            />
            <img
              src="https://www.bobbibrowncosmetics.com/media/export/cms/icons/discover_card.svg"
              alt="discover"
            />
            <img
              src="https://www.bobbibrowncosmetics.com/media/export/cms/icons/amex_card.svg"
              alt="amex_card"
            />
            <img
              src="https://www.bobbibrowncosmetics.com/media/export/cms/icons/paypal_icon.svg"
              alt="paypal"
            />
            <img
              src="https://www.bobbibrowncosmetics.com/media/export/cms/icons/afterpay_icon.svg"
              alt="afterpay"
            ></img>
          </div>
          <h3>OFFER CODE</h3>
          <hr></hr>
          <input
            placeholder="Offer Code"
            style={{ width: "95%", padding: "2.5%" }}
          />
          <div
            className="flex_table"
            style={{ justifyContent: "space-between", fontSize: "15px" }}
          >
            <p>One offer code per order</p>
            <p style={{ color: "grey", textDecoration: "underline" }}>
              SEE ALL OFFERS
            </p>
          </div>
          <button className="apply">APPLY</button>
          <hr></hr>
          <p style={{ textAlign: "center", fontWeight: "bold" }}>
            Join BB Access and earn 144 points with your purchase today.
          </p>
          <hr></hr>
          <Subtotal data={totalPrice}></Subtotal>
          <p style={{ fontSize: "15px" }}>
            Afterpay cannot be used to purchase backordered, pre-ordered or
            auto-replenishment products, donations or gift cards{" "}
          </p>
          <h3>DONATE</h3>
          <hr></hr>
          <div className="donate_div">
            <div>
              <img
                style={{ width: "20%" }}
                src="https://www.bobbibrowncosmetics.com/media/export/cms/products/80x80/bb_prod_555877_80x80_0.jpg"
                alt=""
              ></img>
            </div>
            <select style={{ width: "95%", margin: "auto", padding: "5px" }}>
              <option value="BCRF">BCRF DONATION</option>
              <option value="SheisFirst">She's The First</option>
            </select>
            <p style={{ fontSize: "15px" }}>
              Donate today to The Breast Cancer Research Foundation to support
              life-saving research. Learn More about BCRF.
            </p>
            <form>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  width: "60%",
                }}
              >
                <section>
                  <input type="radio" name="selected" value="onetime"></input>
                  <label>1.00$</label>
                </section>
                <section>
                  <input type="radio" name="selected" value="replenish"></input>
                  <label>5.00$</label>
                </section>
                <section>
                  <input type="radio" name="selected" value="replenish"></input>
                  <label>10.00$</label>
                </section>
              </div>
            </form>
            <br></br>
            <button className="apply">ADD TO CART</button>
          </div>
        </div>
      </div>
      <div id="fans_also_like">
        <hr></hr>
        <h3>FANS ALSO LIKE</h3>
      </div>
    </div>
  );
};
