import React, { useContext, useEffect, useState } from "react";
import "./MyBasket.css";
import "./MyBasket-media.css";
import Carding from "../../component/tools/Cart/Carding";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { siteContext } from "../../Context";

export default function MyBasket() {
  let ProductBasketInfoArray = useContext(siteContext);
  const [allCost, setAllCost] = useState(0);
  const [deleteProduct, setDeleteProduct] = useState(null)

  useEffect(() => {
    setAllCost(0)
    ProductBasketInfoArray.setProductAdded(ProductBasketInfoArray.productAdded.filter(item => item.courseNameCms !== deleteProduct))
    ProductBasketInfoArray.productAdded.forEach((item) => {
      setAllCost((perv) => Number(perv) + Number(item.priceCourseCms));
    });

  }, []);


  useEffect(() => {
    ProductBasketInfoArray.setProductAdded(ProductBasketInfoArray.productAdded.filter(item => item.courseNameCms !== deleteProduct))

      let deleteProductPrice = ProductBasketInfoArray.productAdded.find((item) => {
        return item.courseNameCms === deleteProduct
      });
      if (deleteProductPrice) {
        setAllCost(perv => perv - deleteProduct.priceCourseCms)
      }
      

  },[deleteProduct])







  return (
    <>
      <div className="myBasket">
        <div className="newProduct">
          {ProductBasketInfoArray.productAdded.map((item, index) => (
            <Carding key={index} {...item} mode={'delete'} setDeleteProduct={setDeleteProduct} />
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
