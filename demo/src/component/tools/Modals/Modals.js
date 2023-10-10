import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";
import "./Modals.css";
import "./Modal-media.css";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { siteContext } from "../../../Context";

export default function SiteModals({ closeLoginModal, setCloseLoginModal }) {

  let contextInfo = useContext(siteContext)



  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageSrc, setImageSrc] = useState("");
  
  const closeLoginModalHandler = () => {
    setCloseLoginModal((perv) => !perv);
    setUserName("");
    setPhoneNumber("");
    setEmail("");
    setPassword("");
  };

  const clickLoginModalHandler = () => {
    setCloseLoginModal((perv) => !perv);
    let newUser = {
      id: contextInfo.newUserInfo.length + 1,
      userName,
      phoneNumber,
      email,
      password,
      imageSrc
    };
    contextInfo.setNewUserInfo(newUser);
    setUserName("");
    setPhoneNumber("");
    setEmail("");
    setPassword("");
  };

  

  return ReactDOM.createPortal(
    <div className={closeLoginModal ? "momLoginModal active" : "momLoginModal"}>
      <div className="loginModal">
        <ExitToAppIcon
          className="AlertIconAboutPage"
          style={{ fontSize: 70 }}
        />

        <form
          className="loginForm"
          action="#
        "
        >
          <input
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            className="userNameLoginForm"
            type="text"
            placeholder="Username"
          />
          <input
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
            className="PhoneNumberLoginForm"
            type="text"
            placeholder="Phone number"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="emailLoginForm"
            type="text"
            placeholder="Email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="passwordLoginForm"
            type="password"
            placeholder="Password"
          />
          <input
            onChange={(e) => setImageSrc(e.target.value)}
            value={imageSrc}
            className="passwordLoginForm"
            type="file"
            placeholder="set image"
          />
        </form>
        <div className="btnsLoginModal">
          <div
            onClick={() => clickLoginModalHandler()}
            className="loginBtnModal LoginBtnModal"
          >
            Click
          </div>
          <div
            onClick={() => closeLoginModalHandler()}
            className="loginBtnModal CloseBtnModal"
          >
            Close
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modalSite")
  );
}
