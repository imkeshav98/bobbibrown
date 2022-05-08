// import axios from "axios";
import { Link } from "react-router-dom";
import { ButtonStyled } from "../../../Styled/Button";
import "./productcard.css";
import { useDispatch } from "react-redux";
import { userLogin } from "../../../Redux/Login/action";

export const ProductCard = ({ info }) => {
  const dispatch = useDispatch();
  const addtocart = async (product_id) => {
    let token = JSON.parse(localStorage.getItem("UserToken"));
    console.log(product_id);
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
        alert(`Added ${info.name} to cart`)
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
          addtocart(info.id);
        }}
      >
        ADD TO BAG
      </ButtonStyled>
    </div>
  );
};
