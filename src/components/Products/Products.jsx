import "./products.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ProductCard } from "../Global/ProductCard/ProductCard";

export const Products = () => {
  const [product, setProduct] = useState([]);
  const { page } = useParams();
  const allProducts = useSelector((store) => store.productData.data);
  let filteredProduct;

  useEffect(() => {
    filterProduct();
  }, [allProducts, page]);

  const filterProduct = () => {
    filteredProduct = allProducts.filter((e) => e.page === page);
    if (filteredProduct.length > 0) {
      setProduct(filteredProduct);
    }
  };

  const handleSort = (e) => {
    const { value } = e.target;
    const tempArr = [...product];
    value === "priceacs"
      ? tempArr.sort((a, b) => a.price - b.price)
      : value === "pricedec"
      ? tempArr.sort((a, b) => b.price - a.price)
      : setProduct(filterProduct);
    setProduct(tempArr);
  };

  return (
    <section>
      <div className="Product___sort">
        <select name="sort" id="sort" onChange={handleSort}>
          <option value="sort">SORT BY</option>
          <option value="priceacs">Price(LOW TO HIGH)</option>
          <option value="pricedec">Price(HIGH TO LOW)</option>
        </select>
      </div>
      <div className="product___page">
        {product.map((e) => {
          const info = {
            id: e._id,
            image: e.Image,
            name: e.name,
            tag: e.tag,
            price: e.price,
            page: e.page,
          };
          return <ProductCard info={info} key={info.id} />;
        })}
      </div>
    </section>
  );
};
