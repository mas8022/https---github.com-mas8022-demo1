import React, { useEffect, useState } from "react";
import "./ProductSlider.css";
import "./ProductSlider-media.css";
import Carding from "../tools/Cart/Carding";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  centerMode: true,
  centerPadding: "100",
};

export default function ProductSlider() {
  const [newProductArray, setNewProductArray] = useState([]);

  useEffect(() => {
    fetch("https://demo1react-a5250-default-rtdb.firebaseio.com/product.json")
      .then((res) => res.json())
      .then((data) => setNewProductArray(Object.entries(data).slice(0, 6)));
  }, []);

  return (
    <div className="productSlider">
        <h2>NewProduct</h2>
        <Slider {...sliderSettings}>
          {newProductArray
            ? newProductArray.map((item) => (
                <Carding key={item[0]} {...item[1]} mode="see" />
              ))
            : ""}
        </Slider>
      </div>
  );
}
