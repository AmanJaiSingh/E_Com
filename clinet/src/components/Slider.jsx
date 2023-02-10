import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { useState } from "react";
import { sliderItems } from "../data/data1";

const Slider = () => {
  const [sliderIndex, setSliderIndex] = useState(2);
  const handleClick = (dir) => {
    if (dir === "left") {
      setSliderIndex(sliderIndex > 0 ? sliderIndex - 1 : 2);
    } else {
      setSliderIndex(sliderIndex < 2 ? sliderIndex + 1 : 0);
    }
    console.log(sliderIndex);
  };

  return (
    <div className=" slider_con w-full h-screen flex  relative overflow-hidden">
      <div className="arrow left-3" onClick={() => handleClick("left")}>
        <ArrowBackIosNewOutlinedIcon />
      </div>
      <div
        className="Wraper_slider "
        style={{ transform: `translate( ${sliderIndex * -100}vw)` }}
      >
        {sliderItems.map((item, i) => (
          <div
            className="Slider_1"
            key={i}
            style={{ backgroundColor: item.bg }}
          >
            <div className=" flex-1 h-full img_con">
              <img className="h-96" src={item.img}></img>
            </div>
            <div className="flex-1 info_con">
              <h1>{item.title}</h1>
              <p>{item.desc}</p>
              <button className="">SHOP NOW</button>
            </div>
          </div>
        ))}
      </div>
      <div className="arrow right-3" onClick={() => handleClick("right")}>
        <ArrowForwardIosOutlinedIcon />
      </div>
    </div>
  );
};

export default Slider;
