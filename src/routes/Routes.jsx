import { Route, Routes } from "react-router-dom";
import { ErrorRoute } from "../components/Error/errorroute";
import { Home } from "../components/Home/Home";
import { ProductDetails } from "../components/ProductDetails/ProductDetails";
import { Products } from "../components/Products/Products";
import { Auth } from "../components/Auth/Auth";
import { Checkout } from "../components/Checkout/Checkout"; //FOR CHECKING PURPOSE


export const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<ErrorRoute />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products/:page" element={<Products />}></Route>
        <Route path="/products/:page/:_id" element={<ProductDetails />}></Route>
        <Route path="/login" element={<Auth />}></Route>
        {/* <Route path="/cart" element={<Cart/>}></Route> */}
        <Route path="/checkout" element={<Checkout></Checkout>}></Route>
      </Routes>
    </>
  );
};
