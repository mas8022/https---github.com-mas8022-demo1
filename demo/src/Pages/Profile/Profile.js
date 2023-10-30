import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import "./Profile-media.css";
import { siteContext } from "../../Context";
import SiteModals from "../../component/tools/Modals/Modals";
import EditIcon from "@mui/icons-material/Edit";

export default function Profile() {
  let userData = useContext(siteContext);
  const [closeLoginModal, setCloseLoginModal] = useState(false);
  const [person, setPerson] = useState({});

  useEffect(() => {
    setPerson(userData.newUserInfo);
  }, []);

  return (
    <>
      <div className="profilePage">
        <div className="leftProfilePage">
          <div className="UserInfo">
            <label htmlFor="#username">Username:</label>
            <label className="frfr" id="username">
              {person.userName}
            </label>
            <label htmlFor="#phoneNumber">Phone number:</label>
            <label className="frfr" id="phoneNumber">
              {person.phoneNumber}
            </label>
            <label htmlFor="#email">Email:</label>
            <label className="frfr" id="email">
              {person.email}
            </label>
            <label htmlFor="#password">Password:</label>
            <label className="frfr" id="password">
              {person.password}
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
          <img
            className="ProfilePageImage"
            src={
              JSON.parse(localStorage.getItem('user')).imageSrc !== undefined
                ? JSON.parse(localStorage.getItem('user')).imageSrc
                : "https://centrechurch.org/wp-content/uploads/2022/03/img-person-placeholder.jpeg"
            }
            alt="profileImage"
          />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
            fugiat assumenda ipsa, est magni neque quisquam voluptatem
            perferendis quo animi dicta et, aliquid aliquam asperiores,
            molestias pariatur tenetur perspiciatis accusantium.
          </p>

          <div
            onClick={() => setCloseLoginModal(true)}
            className="editModalBtn"
          >
            <EditIcon style={{ fontSize: 30 }} />
          </div>
        </div>
      </div>
      <SiteModals
        mode="edit"
        closeLoginModal={closeLoginModal}
        setCloseLoginModal={setCloseLoginModal}
      />
    </>
  );
}
