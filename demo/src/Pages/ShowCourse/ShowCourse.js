import React, { useContext, useEffect, useState } from "react";
import "./ShowCourse.css";
import "./ShowCourse-media.css";
import { useParams } from "react-router-dom";
import { siteContext } from "../../Context";
import Loader from "../../component/Loader/Loader";

export default function ShowCourse() {
  const [findCourse, setFindCourse] = useState([]);
  const [loader, setLoader] = useState(true);
  let Params = useParams();

  useEffect(() => {
    fetch("https://demo1react-a5250-default-rtdb.firebaseio.com/product.json")
      .then((res) => res.json())
      .then((data) => {
        let allProduct = Object.entries(data);

        setFindCourse(
          allProduct.find(
            (item) => item[1].courseNameCms === Params.courseName.slice(1)
          )[1]
        );
        setLoader(false);
      });
  }, []);

  useEffect(() => {
    setLoader(true);
    fetch("https://demo1react-a5250-default-rtdb.firebaseio.com/product.json")
      .then((res) => res.json())
      .then((data) => {
        let allProduct = Object.entries(data);

        setFindCourse(
          allProduct.find(
            (item) => item[1].courseNameCms === Params.courseName.slice(1)
          )[1]
        );
        setLoader(false);
      });
  }, [Params]);

  let productInfoArray = useContext(siteContext);

  const addProduct = (findCourse) => {
    productInfoArray.setProductAdded([
      ...productInfoArray.productAdded,
      findCourse,
    ]);
  };

  return (
    <>
      <Loader loader={loader} />
      <div className="showCourse">
        <div className="leftShowCourse">
          <h3 className="masternameShowCourse">
            {findCourse.masterNameCms} (Master Name)
          </h3>
          <hr />
          <p>{findCourse.describeCourseCms}</p>

          <div className="ShowCoursebtns">
            <div className="videoDownloadBtn">Buy Course</div>
            <div
              onClick={() => addProduct(findCourse)}
              className="zipDownloadBtn"
            >
              Add Video
            </div>
          </div>
        </div>
        <div className="rightShowCourse">
          <h2 className="courseTitle">{findCourse.courseNameCms}</h2>
          <hr />
          <video
            id="my-video"
            className="video-js"
            controls
            preload="auto"
            width="100%"
            height="100%"
            data-setup="{}"
          >
            <source
              className="video-player"
              src="${videoTransfer.url}"
              type="video/mp4"
            />
            <a href="https://videojs.com/html5-video-support/" target="_blank">
              supports HTML5 video
            </a>
          </video>
        </div>
      </div>
    </>
  );
}
