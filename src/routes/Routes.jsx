import { Route, Routes } from "react-router-dom";
import { Home } from "../components/Home/Home";
import { ProductDetails } from "../components/ProductDetails/ProductDetails";
import { Products } from "../components/Products/Products";
// import { Cart } from "../components/Cart/Cart"; //FOR CHECKING PURPOSE

export const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products/:page" element={<Products />}></Route>
        <Route path="/products/:page/:_id" element={<ProductDetails />}></Route>
        {/* <Route path="/cart" element={<Cart/>}></Route> */}
      </Routes>
    </>
  );
};
