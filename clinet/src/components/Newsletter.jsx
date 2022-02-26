import React from "react";
import SendIcon from "@mui/icons-material/Send";

const Newsletter = () => {
  return (
    <div className="news_cont">
      <h1 className="news_title"> Newsletter</h1>
      <div className="news_des">
        Get timely updates from your favorite products.
      </div>
      <div className="news_input">
        <input type="" placeholder="Your Email" id="" />
        <button>
          <SendIcon />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
