import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import "./Profile-media.css";
import { siteContext } from "../../Context";

export default function Profile() {
  let userData = useContext(siteContext);

  return (
    <>
      <div className="profilePage">
        <div className="leftProfilePage">
          <div className="UserInfo">
            <label htmlFor="#username">Username:</label>
            <label className="frfr" id="username">
              {userData.newUserInfo.userName}
            </label>
            <label htmlFor="#phoneNumber">Phone number:</label>
            <label className="frfr" id="phoneNumber">
              {userData.newUserInfo.phoneNumber}
            </label>
            <label htmlFor="#email">Email:</label>
            <label className="frfr" id="email">
              {userData.newUserInfo.email}
            </label>
            <label htmlFor="#password">Password:</label>
            <label className="frfr" id="password">
              {userData.newUserInfo.password}
            </label>
          </div>
          <Link
            onClick={() => window.scrollTo(0, 0)}
            to="/about"
            className="link"
          >
            <div className="moreBtnProfilePage">More...</div>
          </Link>
        </div>

        <div className="rightProfilePage">
          <div
            className="ProfilePageImage"
            style={{
              background: `url(${
                userData.newUserInfo.imageSrc
                  ? `'${userData.newUserInfo.imageSrc}'`
                  : "https://centrechurch.org/wp-content/uploads/2022/03/img-person-placeholder.jpeg"
              })`,
            }}
          ></div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
            fugiat assumenda ipsa, est magni neque quisquam voluptatem
            perferendis quo animi dicta et, aliquid aliquam asperiores,
            molestias pariatur tenetur perspiciatis accusantium.
          </p>
        </div>
      </div>
    </>
  );
}
