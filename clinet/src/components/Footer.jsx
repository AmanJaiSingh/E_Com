import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import RoomIcon from "@mui/icons-material/Room";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="f_left">
        <div className="f_logo">AMAN.</div>
        <p className="f_des">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
          distinctio, dolores aperiam sunt dolor a. Optio assumenda, amet
          doloribus excepturi fugiat perferendis repellat. Aperiam, ipsa.
          Repudiandae totam quibusdam tempora ea.
        </p>
        <div className="f_social">
          <div className="f_s_icon" style={{ backgroundColor: "#3B5999" }}>
            <FacebookIcon />
          </div>
          <div className="f_s_icon" style={{ backgroundColor: "#E4405F" }}>
            <InstagramIcon />
          </div>
          <div className="f_s_icon" style={{ backgroundColor: "#55ACEE" }}>
            <TwitterIcon />
          </div>
          <div className="f_s_icon" style={{ backgroundColor: "#E60023" }}>
            <LinkedInIcon />
          </div>
        </div>
      </div>
      <div className="f_center">
        <h3 className="f_title"> Useful Links</h3>
        <ul>
          <li>Home</li>
          <li>Cart</li>
          <li>Man Fashion</li>
          <li>Woman Fashion</li>
          <li>Accessories</li>
          <li>My Account</li>
          <li>Order Tracking</li>
          <li>Wishlist</li>
          <li>Wishlist</li>
          <li>Terms</li>
        </ul>
      </div>
      <div className="f_right">
        <div className="f_title">Contact</div>
        <div className="f_c_item">
          <RoomIcon style={{ marginRight: "10px" }} />
          Green Park Colony,Haridwar 247667
        </div>
        <div className="f_c_item">
          <LocalPhoneIcon style={{ marginRight: "10px" }} />
          +91 904 512 2383
        </div>
        <div className="f_c_item">
          <MailOutlineIcon style={{ marginRight: "10px" }} />
          amanjaisingh2002@gmail.com
        </div>
        <img src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </div>
    </div>
  );
};

export default Footer;
