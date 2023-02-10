import React from "react";
import Search from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/userRedux";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const Logout = () => {
    dispatch(logout());
  };

  return (
    <div className="container bg-red-300">
      <div className="Wrap flex justify-between items-center">
        <div className=" flex-1 flex items-center">
          <h1 className="text-xs lan cursor-pointer">EN</h1>
          <div className="Search_containeer">
            <input className="outline-none" placeholder="Search"></input>
            <Search style={{ color: "gray", fontSize: "16px" }} />
          </div>
        </div>
        <Link to="/">
          <div className="flex-1 cursor-pointer font-bold text-center nav_logo">
            AMAN
          </div>
        </Link>
        <div className="flex-1 nav_right flex items-center justify-end">
          {!user ? (
            <>
              <Link to="/Register">
                <div className="MenuItems">REGIISTER</div>
              </Link>
              <Link to="/Login">
                <div className="MenuItems">SIGN IN</div>
              </Link>
            </>
          ) : (
            <button onClick={Logout}>Logout</button>
          )}

          <Link to="/cart">
            <div className="MenuItems">
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlinedIcon className="mt-2"></ShoppingCartOutlinedIcon>
              </Badge>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
