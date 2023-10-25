import React, { useEffect, useState, useContext } from "react";
import "./Product.css";
import "./Product-media.css";
import Carding from "../../component/tools/Cart/Carding";
import { siteContext } from "../../Context";
import Loader from "../../component/Loader/Loader";

export default function Product() {
  const HMProductShow = 7;
  const [nowPageNumber, setNowPageNumber] = useState();
  let courseArrayDataForProductPage = useContext(siteContext);
  const [newPaginationArray, setNewPaginationArray] = useState(
    courseArrayDataForProductPage.coursesArray
  );
  const [loader, setLoader] = useState(true);
  let HMPageProductShow = Math.ceil(
    courseArrayDataForProductPage.coursesArray.length / HMProductShow
  );
  let arrayOfNumber = Array.from(Array(HMPageProductShow).keys());

  useEffect(() => {
    setNewPaginationArray(
      courseArrayDataForProductPage.coursesArray.slice(
        nowPageNumber * HMProductShow - HMProductShow,
        nowPageNumber * HMProductShow
      )
    );
  }, [nowPageNumber]);

  useEffect(() => {
    fetch("https://demo1react-a5250-default-rtdb.firebaseio.com/product.json")
      .then((res) => res.json())
      .then((data) => {
        setNewPaginationArray(Object.entries(data).slice(0, 7));
        setLoader(false);
      });
  }, []);

  const paginationBtnHandler = (item, e) => {
    setNowPageNumber(item + 1);
    window.scrollTo(0, 0);
    document
      .querySelectorAll(".paginationBtn")
      .forEach((item) => (item.className = "paginationBtn"));
    e.target.className = "paginationBtn paginationBtnActive";
  };
  return (
    <>
      <Loader loader={loader} />
      <div className="momNewProduct">
        <div className="newProduct">
          {newPaginationArray.length
            ? newPaginationArray.map((item, index) => (
                <Carding key={index} {...item[1]} mode={'see'} />
              ))
            : ""}
        </div>

        <div className="pagination">
          {arrayOfNumber.map((item, index) => (
            <div
              key={index}
              onClick={(e) => paginationBtnHandler(item, e)}
              className="paginationBtn"
            >
              {item + 1}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
