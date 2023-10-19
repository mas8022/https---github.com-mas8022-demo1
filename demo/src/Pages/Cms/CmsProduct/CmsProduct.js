import React, { useEffect, useState } from "react";
import "./CmsProduct.css";
import "./CmsProduct-media.css";
import CmsNavbar from "../CmsComponent/CmsNavbar";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function CmsProduct() {
  const [cmsInput, setCmsInput] = useState();
  const [cmsCourseArrayFind, setCmsCourseArrayFind] = useState([]);
  const [videoCourseSrcCms, setVideoCourseSrcCms] = useState("");
  const [imageCourseSrcCms, setImageCourseSrcCms] = useState("");
  const [describeCourseCms, setDescribeCourseCms] = useState("");
  const [masterNameCms, setMasterNameCms] = useState("");
  const [courseNameCms, setCourseNameCms] = useState("");
  const [dashPriceCourseCms, setDashPriceCourseCms] = useState("");
  const [priceCourseCms, setPriceCourseCms] = useState("");
  const [productsArrayCms, setProductsArrayCms] = useState([]);
  let deleteCourse;

  useEffect(() => {
    fetch("https://demo1react-a5250-default-rtdb.firebaseio.com/product.json")
      .then((res) => res.json())
      .then((data) => setProductsArrayCms(Object.entries(data)));
  }, []);

  useEffect(() => {
    if (cmsInput) {
      setCmsCourseArrayFind(
        productsArrayCms.filter((item) => {
          return item[1].courseNameCms
            .toLowerCase()
            .trim()
            .includes(cmsInput.toLowerCase().trim());
        })
      );
    } else {
      setCmsCourseArrayFind([]);
    }
  }, [cmsInput]);

  const selectCmsItemHandle = (item) => {
    setVideoCourseSrcCms("");
    setImageCourseSrcCms(item.imageCourseSrcCms);
    setDescribeCourseCms(item.describeCourseCms);
    setMasterNameCms(item.masterNameCms);
    setCourseNameCms(item.courseNameCms);
    setDashPriceCourseCms(item.dashPriceCourseCms);
    setPriceCourseCms(item.priceCourseCms);
    setCmsInput("");
  };

  const deleteInputsHandle = () => {
    setVideoCourseSrcCms("");
    setImageCourseSrcCms("");
    setDescribeCourseCms("");
    setMasterNameCms("");
    setCourseNameCms("");
    setDashPriceCourseCms("");
    setPriceCourseCms("");
  };

  const registerProductHandle = () => {
    let newProduct = {
      id: productsArrayCms.length + 1,
      videoCourseSrcCms,
      imageCourseSrcCms,
      describeCourseCms,
      masterNameCms,
      courseNameCms,
      dashPriceCourseCms,
      priceCourseCms,
    };

    if (newProduct) {
      fetch(
        "https://demo1react-a5250-default-rtdb.firebaseio.com/product.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newProduct),
        }
      ).then((res) => {
        console.log(res);
        deleteInputsHandle();
        window.location.reload();
      });
    }
  };

  const deleteProductHandle = () => {
    deleteCourse = productsArrayCms.filter(
      (item) =>
        item[1].courseNameCms.toLowerCase().trim() ===
        courseNameCms.toLowerCase().trim()
    )[0][0];

    fetch(
      `https://demo1react-a5250-default-rtdb.firebaseio.com/product/${deleteCourse}.json`,
      {
        method: "DELETE",
      }
    ).then((res) => {
      console.log(res);
      deleteInputsHandle();
      window.location.reload();
    });
  };

  const editProductHandle = () => {
    let newProductEdit = {
      id: productsArrayCms.length + 1,
      videoCourseSrcCms,
      imageCourseSrcCms,
      describeCourseCms,
      masterNameCms,
      courseNameCms,
      dashPriceCourseCms,
      priceCourseCms,
    };

    deleteCourse = productsArrayCms.filter(
      (item) =>
        item[1].courseNameCms.toLowerCase().trim() ===
        courseNameCms.toLowerCase().trim()
    )[0][0];

    fetch(
      `https://demo1react-a5250-default-rtdb.firebaseio.com/product/${deleteCourse}.json`,
      {
        method: "PUT",
        body: JSON.stringify(newProductEdit),
      }
    ).then((res) => {
      console.log(res);
      deleteInputsHandle();
      window.location.reload();
    });
  };

  return (
    <div className="cmsProduct">
      <CmsNavbar />
      <div className="cmsFlex">
        <div className="leftCmsProduct">
          <form action="#">
            <div className="cmsFormFlex">
              <label htmlFor=".videoCourseSrcCms">VIDEO SRC</label>
              <input
                type="text"
                className="videoCourseSrcCms"
                placeholder="video src:"
                value={videoCourseSrcCms}
                onChange={(e) => setVideoCourseSrcCms(e.target.value)}
              />
              <label htmlFor=".videoCourseSrcCms">IMAGE SRC</label>
              <input
                type="text"
                className="imageCourseSrcCms"
                placeholder="image src:"
                value={imageCourseSrcCms}
                onChange={(e) => setImageCourseSrcCms(e.target.value)}
              />
              <label htmlFor=".videoCourseSrcCms">DESCRIBE SRC</label>
              <input
                type="text"
                className="describeCourseCms"
                placeholder="describe courses:"
                value={describeCourseCms}
                onChange={(e) => setDescribeCourseCms(e.target.value)}
              />
              <label htmlFor=".videoCourseSrcCms">MASTER NAME</label>
              <input
                type="text"
                className="masterNameCms"
                placeholder="master name:"
                value={masterNameCms}
                onChange={(e) => setMasterNameCms(e.target.value)}
              />
              <label htmlFor=".videoCourseSrcCms"> COURSE NAME</label>
              <input
                type="text"
                className="courseNameCms"
                placeholder="course name:"
                value={courseNameCms}
                onChange={(e) => setCourseNameCms(e.target.value)}
              />
              <label htmlFor=".videoCourseSrcCms">PRICE WITH DISCOUNT</label>
              <input
                type="text"
                className="dashPriceCourseCms"
                placeholder="price with discount:"
                value={priceCourseCms}
                onChange={(e) => setPriceCourseCms(e.target.value)}
              />
              <label htmlFor=".videoCourseSrcCms">
                PRICE WITH OUT DISCOUNT
              </label>
              <input
                type="text"
                className="priceCourseCms"
                placeholder="price without discount:"
                value={dashPriceCourseCms}
                onChange={(e) => setDashPriceCourseCms(e.target.value)}
              />
            </div>
            <div className="cmsFormBtns">
              <div onClick={() => editProductHandle()} className="register">
                <EditIcon style={{ fontSize: 36 }} />
              </div>
              <div onClick={() => deleteProductHandle()} className="register">
                <DeleteIcon style={{ fontSize: 36 }} />
              </div>
              <div onClick={registerProductHandle} className="register">
                <DoneOutlineIcon style={{ fontSize: 36 }} />
              </div>
            </div>
          </form>
        </div>
        <div className="rightCmsProduct">
          <input
            value={cmsInput}
            onChange={(e) => setCmsInput(e.target.value)}
            type="text"
            className="searchCourseBarCms"
            placeholder="search course:"
          />
          <div className="sgCourseListCms">
            {cmsCourseArrayFind.length
              ? cmsCourseArrayFind.map((item) => (
                  <div
                    onClick={() => selectCmsItemHandle(item[1])}
                    key={item[0]}
                    className="sgCourseListCmsItem"
                  >
                    <img
                      className="sgCourseListCmsItemImage"
                      src={item[1].imageCourseSrcCms}
                      alt="courseImage"
                    />
                    <div className="sgCourseListCmsItemDescribe">
                      <p className="couresNameSgCourseListCmsItemDescribe">
                        <span>Course name:</span>
                        {item[1].courseNameCms}
                      </p>
                      <p className="materNameSgCourseListCmsItemDescribe">
                        <span>Master name:</span>
                        {item[1].masterNameCms}
                      </p>
                      <p className="dashPriceSgCourseListCmsItemDescribe">
                        <span>Price:</span>{" "}
                        <sub>${item[1].dashPriceCourseCms}</sub>
                      </p>
                      <p className="priceSgCourseListCmsItemDescribe">
                        <span>Price with discount:</span> $
                        {item[1].priceCourseCms}
                      </p>
                    </div>
                  </div>
                ))
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
}
