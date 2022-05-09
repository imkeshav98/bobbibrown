import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./checkout.css";
import { ChekoutProducts, Subtotal } from "./CheckoutProducts";
import { userLogin } from "../../Redux/Login/action";
export const Checkout = () => {
  const navigate = useNavigate();
  let cartItems = useSelector((store) => store.loginData.payload);
  let userdata = JSON.parse(localStorage.getItem("Userdata"));
  const email_of_user = userdata.email;
  const dispatch = useDispatch();

  const deleteFunction = () => {
    let token = JSON.parse(localStorage.getItem("UserToken"));
    fetch(`https://bobbi-brown-api.herokuapp.com/cart/removeall`, {
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

  const [checkout_form, setCheckoutForm] = useState({
    first_name: "",
    last_name: "",
    street: "",
    apt: "",
    zip: "",
    city: "",
    state: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCheckoutForm({
      ...checkout_form,
      [name]: value,
    });
  };
  const [submitted, setSubmitted] = useState(false);
  const handleCheckout = () => {
    if (
      checkout_form.first_name !== "" &&
      checkout_form.last_name !== "" &&
      checkout_form.street !== "" &&
      checkout_form.zip !== "" &&
      checkout_form.city !== "" &&
      checkout_form.state !== "" &&
      checkout_form.phone !== ""
    ) {
      setSubmitted(true);
    } else {
      alert("Please Enter Shipping Details");
    }
  };

  const [cartData, setCartData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
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
    <div id="main_checkout_div">
      <div id="checkout_content">
        <div className="checkout_userdetails">
          <h3>CHECKOUT</h3>
          <hr></hr>
          <h5>EMAIL</h5>
          <hr />
          <p>{email_of_user}</p> {/* USER EMAIL HERE */}
          <hr />
          {submitted === false ? (
            <div className="userdetail_checkoutform">
              <h5>SHIPPING</h5>
              <hr />
              <p>
                Please note: Changes to these fields will update your address on
                file
              </p>
              <form>
                <section className="check_username">
                  <input
                    onChange={handleChange}
                    name="first_name"
                    type="text"
                    placeholder="* First Name"
                  />
                  <input
                    onChange={handleChange}
                    name="last_name"
                    type="text"
                    placeholder="* Last Name"
                  />
                </section>
                <input
                  onChange={handleChange}
                  name="street"
                  type="text"
                  placeholder="* Street Address"
                  style={{ width: "100%" }}
                ></input>
                <input
                  onChange={handleChange}
                  name="apt"
                  type="text"
                  placeholder="Apt, Suite, unit, floor etc (optional)"
                  style={{ width: "100%" }}
                ></input>
                <section className="zip_city_state">
                  <input
                    onChange={handleChange}
                    name="zip"
                    type="text"
                    placeholder="Zip"
                  />
                  <input
                    onChange={handleChange}
                    name="city"
                    type="text"
                    placeholder="City"
                  />
                  <input
                    onChange={handleChange}
                    name="state"
                    type="text"
                    placeholder="State"
                  />
                </section>
                <p style={{ marginBottom: "0px" }}>Location</p>
                <p style={{ marginBottom: "0px" }}>United States</p>
                <p style={{ fontSize: "12px" }}>
                  *Shipping limited to United States addresses only
                </p>
                <input
                  onChange={handleChange}
                  name="phone"
                  type="text"
                  placeholder="* Enter Phone no."
                  style={{ width: "30%" }}
                ></input>
              </form>
              <h5>FREE GIFT WRAPPING</h5>
              <hr />
              <input type="checkbox"></input>
              <label style={{ fontSize: "12px" }}> Yes! Wrap this order</label>
              <h5>SIGN UP</h5>
              <hr />
              <input type="checkbox"></input>
              <label style={{ fontSize: "15px" }}>
                {" "}
                Yes, sign me up to hear from Bobbi Brown! To learn more, view
                our{" "}
                <span style={{ color: "grey", textDecoration: "underline" }}>
                  Privacy Policy.
                </span>
                . If I am a California resident, I agree to the Notice of{" "}
                <span style={{ color: "grey", textDecoration: "underline" }}>
                  Financial Incentive.
                </span>
              </label>
              <p>
                In providing your email address you are agreeing to receive
                email communication from Bobbi Brown Online. If you do not wish
                to receive such communication via email, please un-tick this
                box.
              </p>
              <input type="checkbox"></input>
              <label style={{ fontSize: "15px" }}>
                {" "}
                I'd like to receive recurring advertising text messages (SMS and
                MMS) from Bobbi Brown. I understand these text messages may be
                sent via an autodialer, that consent is not required to purchase
                goods from Bobbi Brown, and that I can opt-out any time by
                replying STOP to the text message I receive from Bobbi Brown. I
                can text HELP for more information. Msg and data rates may
                apply. If I am a California resident, I agree to the Notice of{" "}
                <span style={{ color: "grey", textDecoration: "underline" }}>
                  Financial Incentive.
                </span>
                . To learn more, view our{" "}
                <span style={{ color: "grey", textDecoration: "underline" }}>
                  Privacy Policy.
                </span>
              </label>
              <hr></hr>
              <button className="apply_btn" onClick={handleCheckout}>
                CONTINUE
              </button>
            </div>
          ) : (
            <div className="Payment_section">
              <h5>SHIPPING</h5>
              <hr />
              <p className="shipping_address">
                {checkout_form.first_name + " " + checkout_form.last_name}
              </p>
              <p className="shipping_address">{checkout_form.street}</p>
              {checkout_form.apt ? (
                <p className="shipping_address">{checkout_form.apt}</p>
              ) : null}
              <p className="shipping_address">
                {checkout_form.city + " " + checkout_form.zip}
              </p>
              <p className="shipping_address">{checkout_form.state}</p>
              <p className="shipping_address">{checkout_form.phone}</p>
              <hr></hr>
              <h5>PAYMENT</h5>
              <hr />
              <form>
                <input type="checkbox" value="Creditcard"></input>
                <label>
                  <b> Credit card</b>
                </label>
                <br></br>
                <div className="payment_cards_pic">
                  <img
                    src="https://www.bobbibrowncosmetics.com/media/images/account/mastercard.gif"
                    alt="mastercard"
                  ></img>
                  <img
                    src="https://www.bobbibrowncosmetics.com/media/images/account/visa.gif"
                    alt="visa"
                  ></img>
                  <img
                    src="https://www.bobbibrowncosmetics.com/media/images/account/americanexpress.gif"
                    alt="amexpress"
                  />
                  <img
                    src="https://www.bobbibrowncosmetics.com/media/images/account/discover.gif"
                    alt="discover"
                  />
                  <img
                    src="https://www.bobbibrowncosmetics.com/media/images/account/unionpay.svg"
                    alt="union"
                  ></img>
                </div>
                <input type="checkbox" value="Paypal"></input>
                <label>
                  <b> PayPal</b>
                </label>
                <br></br>
                <div className="payment_cards_pic">
                  <img
                    src="https://www.bobbibrowncosmetics.com/media/images/checkout/paypal.gif"
                    alt="paypal"
                  ></img>
                </div>
                <input type="checkbox" value="Afterpay"></input>
                <label>
                  <b> Afterpay</b>
                </label>
                <div style={{ width: "30%" }} className="payment_cards_pic">
                  Pay with{" "}
                  <img
                    src="https://www.bobbibrowncosmetics.com/media/export/cms/icons/afterpay_icon.svg"
                    alt="afterpay"
                  ></img>
                </div>
                <p style={{ width: "30%" }}>
                  Pay $0 Now First Payment 2 Weeks From Purchase 4 interest-free
                  installments of $32.58
                </p>
                <input type="number" placeholder="Credit Card Number"></input>
                <div className="zip_city_state">
                  <input
                    id="month_oncard"
                    type="number"
                    placeholder="Month"
                  ></input>
                  <input
                    id="year_oncard"
                    type="number"
                    placeholder="Year"
                  ></input>
                  <input
                    id="cvv_oncard"
                    type="number"
                    placeholder="Cvv"
                  ></input>
                </div>
              </form>
              <hr></hr>
              <h5>COMPLETE ORDER</h5>
              <hr />
              <p>
                By clicking Place Order, I agree to be bound by the Bobbi Brown
                Cosmetics Terms and Conditions and Privacy Policy.
              </p>
              <button
                className="apply_btn"
                onClick={() => {
                  deleteFunction();
                  navigate("/thanks");
                }}
              >
                COMPLETE ORDER
              </button>
              <hr></hr>
              <h5>OUR GUARENTEE</h5>
              <hr />
              <p>
                If for any reason you are not completely satisfied with your
                Bobbi Brown Online purchase, simply return the unused portion
                and we will be happy to process an exchange or remit your
                account for the full amount of the purchase. Please refer our
                Return Policy.
              </p>
            </div>
          )}
        </div>
        <div className="checkout_productdetails">
          <h5>SHOPPING BAG</h5>
          <hr />
          <p>{cartData.length + " Items"}</p>
          <hr />
          {cartData.map((e, i) => {
            // let sum=0;
            return (
              <ChekoutProducts
                data={e.productId}
                qty={e.qty}
                i={i}
              ></ChekoutProducts>
            );
          })}
          <hr></hr>
          <Subtotal data={totalPrice}></Subtotal>
          <hr></hr>
          <p style={{ width: "70%" }}>
            Afterpay cannot be used to purchase backordered, pre-ordered or
            auto-replenishment products, donations or gift cards{" "}
          </p>
          <h5>OFFER CODE</h5>
          <hr></hr>
          <input
            placeholder="Offer Code"
            style={{ width: "95%", padding: "2.5%" }}
          ></input>
          <div
            className="flex_table"
            style={{ justifyContent: "space-between", fontSize: "15px" }}
          >
            <p>One offer code per order</p>
            <p style={{ color: "grey", textDecoration: "underline" }}>
              SEE ALL OFFERS
            </p>
          </div>
          <button className="apply_btn">APPLY</button>
          <hr></hr>
          <p style={{ textAlign: "center", fontWeight: "bold" }}>
            Join BB Access and earn 144 points with your purchase today.
          </p>
          <hr></hr>
          <h5>DONATE</h5>
          <hr></hr>
          <div className="donate_div">
            <div>
              <img
                style={{ width: "20%" }}
                src="https://www.bobbibrowncosmetics.com/media/export/cms/products/80x80/bb_prod_555877_80x80_0.jpg"
                alt="constImage"
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
            <button className="apply_btn">ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
  );
};
