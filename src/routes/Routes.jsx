import { Route, Routes } from "react-router-dom";
import { Home } from "../components/Home/Home";
// import { ProductDetails } from "../components/ProductDetails/ProductDetails".....JUST WANTED TO VERIFY THE LAYOUT;

export const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/productsdetails" element={<ProductDetails></ProductDetails>}></Route> */}
      </Routes>
    </>
  );
};
