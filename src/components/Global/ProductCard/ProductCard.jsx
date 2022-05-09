// import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ButtonStyled } from "../../../Styled/Button";
import "./productcard.css";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../../Redux/Login/action";

export const ProductCard = ({ info }) => {
  let isUserLoggedIn = useSelector((store) => store.loginData.payload);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addtocart = async (product_id) => {
    let token = JSON.parse(localStorage.getItem("UserToken"));
    fetch(`https://bobbi-brown-api.herokuapp.com/cart/add/${product_id}`, {
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
        alert(`Added ${info.name} to cart`);
      });
  };

  return (
    <div className="product___card">
      <Link to={`/products/${info.page}/${info.id}`}>
        <img src={info.image} alt="img" />
      </Link>
      <span>{info.name}</span>
      <p>{info.tag}</p>
      <span>${info.price}</span>
      <ButtonStyled
        size="medium"
        onClick={() => {
          isUserLoggedIn === false ? navigate("/login") : addtocart(info.id);
        }}
      >
        ADD TO BAG
      </ButtonStyled>
    </div>
  );
};
