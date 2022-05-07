import axios from "axios";
import { Link } from "react-router-dom";
import { ButtonStyled } from "../../../Styled/Button";
import "./productcard.css";

export const ProductCard = ({ info }) => {
  const getToken = () => {
    let token = JSON.parse(localStorage.getItem("Usertoken")) || "";
    let config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    return config;
  };

  const addtocart = (product_id) => {
    axios
      .post(
        `https://bobbi-brown-api.herokuapp.com/cart/add/${product_id}`,
        getToken()
      )
      .then((res) => console.log(res));
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
