import React, { useContext, useEffect, useState } from "react";
import "./ShowCourse.css";
import "./ShowCourse-media.css";
import { useParams } from "react-router-dom";
import courses from "../../dataBase";
import { siteContext } from "../../Context";

export default function ShowCourse() {
  const [findCourse, setFindCourse] = useState({});
  let Params = useParams();

  useEffect(() => {
    setFindCourse(
      courses.find((item) => item.courseName === Params.courseName.slice(1))
    );
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
      <div className="showCourse">
        <div className="leftShowCourse">
          <h3 className="masternameShowCourse">
            {findCourse.masterName} (Master Name)
          </h3>
          <hr />
          <p>{findCourse.describe}</p>

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
          <h2 className="courseTitle">{findCourse.courseName}</h2>
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
