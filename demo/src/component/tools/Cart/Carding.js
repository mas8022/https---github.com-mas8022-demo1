import React from "react";
import "./Card.css";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";

export default function Carding(props) {
  return (
    <>
      <div className="carding">
        <img
          className="imageCard"
          src={props.imageCourseSrcCms}
          alt="courseImage"
        />
        <div className="describeCard">
          <div className="topDescribeCard">
            <p className="masterName">
              {props.masterNameCms}({props.courseNameCms})
            </p>
            <p className="numberStudent">2563</p>
            <PersonIcon className="personIcons" style={{ fontSize: 36 }} />
          </div>
          <hr className="cartHr" />
          <div className="bottomDescribeCard">
            <h4 className="priceCourseDash">${props.dashPriceCourseCms}</h4>
            <h4 className="priceCourse">${props.priceCourseCms}</h4>

            {props.mode === "see" ? (
              <Link
                onClick={() => window.scrollTo(0, 0)}
                to={`/ShowCourse/:${props.courseNameCms}`}
                className="link"
              >
                <div className="seeCourseBtn">See</div>
              </Link>
            ) : (
              <div
                onClick={() => {
                  props.setDeleteProduct(props.courseNameCms);
                  window.location.reload()
                }}
                className="seeCourseBtn"
              >
                delete
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
