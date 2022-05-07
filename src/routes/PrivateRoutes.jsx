import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const Auth = localStorage.getItem("Userdata") || false;
  if (Auth === false) {
    return <Navigate to="/login" replace={false} />;
  }
  return children;
};
