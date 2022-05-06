import { Link } from "react-router-dom";
import { ButtonStyled } from "../../../Styled/Button";
import "./productcard.css";

export const ProductCard = ({ info }) => {
  return (
    <div className="product___card">
      <Link to={`/products/${info.page}/${info.id}`}>
        <img src={info.image} alt="img" />
      </Link>
      <h3>{info.name}</h3>
      <p>{info.tag}</p>
      <span>${info.price}</span>
      <ButtonStyled size="medium">ADD TO BAG</ButtonStyled>
    </div>
  );
};
