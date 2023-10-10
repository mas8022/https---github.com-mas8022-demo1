import React, { useContext, useEffect, useState } from "react";
import "./MyBasket.css";
import "./MyBasket-media.css";
import Carding from "../../component/tools/Cart/Carding";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { siteContext } from "../../Context";

export default function MyBasket() {
  let ProductBasketInfoArray = useContext(siteContext);
  const [allCost, setAllCost] = useState(0);

  useEffect(() => {
    ProductBasketInfoArray.productAdded.forEach((item) => {
      setAllCost((perv) => perv + item.price);
    });

  }, []);

  return (
    <>
      <div className="myBasket">
        <div className="newProduct">
          {ProductBasketInfoArray.productAdded.map((item, index) => (
            <Carding key={index} {...item} />
          ))}
        </div>
        <div className="calculateBasketBox">
          <p className="totalCost">{allCost ? `$${allCost}` : "$0"}</p>
          <div className="buyBtn">
            <ShoppingCartIcon style={{ fontSize: 30 }} />
          </div>
        </div>
      </div>
    </>
  );
}
