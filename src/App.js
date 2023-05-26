import React from "react";
import "./App.css";
import Signup from "./Component/Signup/Signup";
import Login from "./Component/Login/Login";
import {
  BrowserRouter,
  Link,
  Navigate,
  Route,
  Router,
  RouterProvider,
  Routes,
  createBrowserRouter,
  useNavigate,
} from "react-router-dom";
import Productlist from "./Component/ProductList/Productlist";
import { useSelector } from "react-redux";
import Editpage from "./Component/Editproduct/Editpage";
import AddProductpage from "./Component/Addproduct/AddProductpage";

function App() {
  const { loginCred } = useSelector((state) => state.counter);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/productlist"
            element={
              loginCred.email ? <Productlist /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/editproduct/:id"
            element={loginCred.email ? <Editpage /> : <Navigate to="/login" />}
          />
          <Route
            path="addproduct"
            element={
              loginCred.email ? <AddProductpage /> : <Navigate to="/login" />
            }
          />
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
