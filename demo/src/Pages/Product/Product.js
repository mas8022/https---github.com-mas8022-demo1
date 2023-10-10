import React, { useEffect, useState } from "react";
import "./Product.css";
import "./Product-media.css";
import Carding from "../../component/tools/Cart/Carding";
import courses from "../../dataBase";

export default function Product() {
  const HMProductShow = 7;
  let HMPageProductShow = Math.ceil(courses.length / HMProductShow);
  let arrayOfNumber = Array.from(Array(HMPageProductShow).keys());
  const [nowPageNumber, setNowPageNumber] = useState();
  const [newPaginationArray, setNewPaginationArray] = useState(courses);

  useEffect(() => {
    setNewPaginationArray(
      courses.slice(
        nowPageNumber * HMProductShow - HMProductShow,
        nowPageNumber * HMProductShow
      )
    );
  }, [nowPageNumber]);

  useEffect(() => {
    setNewPaginationArray(courses.slice(0, HMProductShow));
  }, []);

  const paginatinBtnHandler = (item) => {
    setNowPageNumber(item + 1);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="momNewProduct">
        <div className="newProduct">
          {newPaginationArray.map((item, index) => (
            <Carding key={index} {...item} />
          ))}
        </div>
        <div className="pagination">
          {arrayOfNumber.map((item, index) => (
            <div
              key={index}
              onClick={() => paginatinBtnHandler(item)}
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
