import React from "react";
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  function AuthRoute({ children }) {
    if (user) {
      //Not signed in
      return <Navigate to="/" />;
    }
    //Signed in
    return children;
  }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route
          path="/Login"
          element={
            <AuthRoute>
              <Login />
            </AuthRoute>
          }
        />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
