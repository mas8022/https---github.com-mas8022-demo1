import React, { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./Modals.css";
import "./Modal-media.css";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { siteContext } from "../../../Context";
import { Link } from "react-router-dom";
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export default function SiteModals({ closeLoginModal, setCloseLoginModal }) {
  let contextInfo = useContext(siteContext);

  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageSrc, setImageSrc] = useState("");
  const [phonNumberRegexFlag, setPhonNumberRegexFlag] = useState(false);
  const [emailRegexFlag, setEmailRegexFlag] = useState(false);
  const [passwordRegexFlag, setPasswordRegexFlag] = useState(false);
  const [colorClickFromFlag, setColorClickFromFlag] = useState(false);
  const [loginCms, setLoginCms] = useState(false);

  /////////////////////////////////////////////////////
  const managerPass = "12345";
  /////////////////////////////////////////////////////

  const closeLoginModalHandler = () => {
    setCloseLoginModal((perv) => !perv);
    setUserName("");
    setPhoneNumber("");
    setEmail("");
    setPassword("");
  };

  const clickLoginModalHandler = () => {
    if (
      !phonNumberRegexFlag &&
      !emailRegexFlag &&
      !passwordRegexFlag &&
      userName.length &&
      phoneNumber.length &&
      email.length &&
      password.length &&
      imageSrc.length
    ) {
      let newUser = {
        id: contextInfo.newUserInfo.length + 1,
        userName,
        phoneNumber,
        email,
        password,
        imageSrc,
      };
      contextInfo.setNewUserInfo(newUser);
      setColorClickFromFlag(true);
      fetch("https://demo1react-a5250-default-rtdb.firebaseio.com/users.json", {
        method: "POST",
        body: JSON.stringify(newUser),
      }).then((res) => console.log(res));
    } else {
      setColorClickFromFlag(false);
    }

    if (colorClickFromFlag) {
      setCloseLoginModal((perv) => !perv);
      setUserName("");
      setPhoneNumber("");
      setEmail("");
      setPassword("");
    }
  };

  useEffect(() => {
    if (
      !phonNumberRegexFlag &&
      !emailRegexFlag &&
      !passwordRegexFlag &&
      userName.length &&
      phoneNumber.length &&
      email.length &&
      password.length &&
      imageSrc.length
    ) {
      let newUser = {
        id: contextInfo.newUserInfo.length + 1,
        userName,
        phoneNumber,
        email,
        password,
        imageSrc,
      };
      contextInfo.setNewUserInfo(newUser);
      setColorClickFromFlag(true);
    } else {
      setColorClickFromFlag(false);
    }
  }, [phoneNumber, email, password, userName, imageSrc]);

  const phonNumberRegexHandle = (e) => {
    if (!isNaN(e.target.value)) {
      setPhoneNumber(e.target.value);
      setPhonNumberRegexFlag(false);
    } else {
      setPhonNumberRegexFlag(true);
      setPhoneNumber(e.target.value);
    }
  };

  const emailRegexHandle = (e) => {
    if (emailRegex.test(e.target.value)) {
      setEmail(e.target.value);
      setEmailRegexFlag(false);
    } else {
      setEmail(e.target.value);
      setEmailRegexFlag(true);
    }
    if (!e.target.value) {
      setEmailRegexFlag(false);
    }
  };

  const passwordRegexHandle = (e) => {
    if (e.target.value === managerPass) {
      setLoginCms(true);
    }

    if (e.target.value.length > 4 && e.target.value.length < 9) {
      setPassword(e.target.value);
      setPasswordRegexFlag(false);
    } else {
      setPassword(e.target.value);
      setPasswordRegexFlag(true);
    }
    if (!e.target.value) {
      setPasswordRegexFlag(false);
    }
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
            onChange={(e) => phonNumberRegexHandle(e)}
            value={phoneNumber}
            className="PhoneNumberLoginForm"
            type="text"
            placeholder="Phone number"
          />
          <p
            className={
              phonNumberRegexFlag ? "formAlerts formAlertsActive" : "formAlerts"
            }
          >
            please write correct phone number
          </p>
          <input
            onChange={(e) => emailRegexHandle(e)}
            value={email}
            className="emailLoginForm"
            type="text"
            placeholder="Email"
          />
          <p
            className={
              emailRegexFlag ? "formAlerts formAlertsActive" : "formAlerts"
            }
          >
            please write correct email
          </p>
          <input
            onChange={(e) => passwordRegexHandle(e)}
            value={password}
            className="passwordLoginForm"
            type="password"
            placeholder="Password"
          />
          <p
            className={
              passwordRegexFlag ? "formAlerts formAlertsActive" : "formAlerts"
            }
          >
            write corrector between 5 and 8
          </p>
          <input
            onChange={(e) => setImageSrc(e.target.value)}
            value={imageSrc}
            className="passwordLoginForm"
            type="file"
            placeholder="set image"
          />
        </form>
        <div className="btnsLoginModal">
          <Link to={loginCms ? "/cmsProduct" : "/"} className="link">
            <div
              onClick={() => clickLoginModalHandler()}
              className={
                colorClickFromFlag
                  ? "loginBtnModal LoginBtnModal colorClickFromActive"
                  : "loginBtnModal LoginBtnModal colorClickFromDeActive"
              }
            >
              Click
            </div>
          </Link>

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
