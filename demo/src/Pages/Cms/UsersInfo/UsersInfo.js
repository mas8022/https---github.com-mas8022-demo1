import React, { useEffect, useState } from "react";
import "./UsersInfo.css";
import './UserInfo-media.css'
import CmsNavbar from "../CmsComponent/CmsNavbar";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function UsersInfo() {
  const [usernameCmsInput, setUsernameCmsInput] = useState("");
  const [phoneNumberCmsInput, setPhoneNumberCmsInput] = useState("");
  const [emailCmsInput, setEmailCmsInput] = useState("");
  const [passwordCmsInput, setPasswordCmsInput] = useState("");
  const [userImageCmsInput, setUserImageCmsInput] = useState("");
  const [usersCmsArray, setUsersCmsArray] = useState([]);
  const [userSearchInput, setUserSearchInput] = useState([]);
  const [usersFind, setUsersFind] = useState([]);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    fetch("https://demo1react-a5250-default-rtdb.firebaseio.com/users.json")
      .then((res) => res.json())
      .then((data) => setUsersCmsArray(Object.entries(data)));
  }, []);

  useEffect(() => {
    if (userSearchInput) {
      setUsersFind(
        usersCmsArray.filter((item) => {
          return item[1].userName.includes(
            userSearchInput.toString().toLowerCase().trim()
          );
        })
      );
    } else {
      setUsersFind([]);
    }
  }, [userSearchInput]);

  const selectUser = (user) => {
    setUserId(user[0]);
    setUsernameCmsInput(user[1].userName);
    setPhoneNumberCmsInput(user[1].phoneNumber);
    setEmailCmsInput(user[1].email);
    setPasswordCmsInput(user[1].password);
    setUserImageCmsInput(user[1].imageSrc);
  };

  const registerUserHandle = () => {
    let newUserCms = {
      id: usersCmsArray.length + 1,
      userName: usernameCmsInput,
      phoneNumber: phoneNumberCmsInput,
      email: emailCmsInput,
      password: passwordCmsInput,
      imageSrc: userImageCmsInput,
    };

    fetch("https://demo1react-a5250-default-rtdb.firebaseio.com/users.json", {
      method: "POST",
      body: JSON.stringify(newUserCms),
    }).then(() => window.location.reload());
  };

  const deleteUserHandle = () => {
    fetch(
      `https://demo1react-a5250-default-rtdb.firebaseio.com/users/${userId}.json`,
      {
        method: "DELETE",
      }
    ).then(() => window.location.reload());
  };

  const editUserHandle = () => {
    let editUserCms = {
      id: usersCmsArray.length + 1,
      userName: usernameCmsInput,
      phoneNumber: phoneNumberCmsInput,
      email: emailCmsInput,
      password: passwordCmsInput,
      imageSrc: userImageCmsInput,
    };
    fetch(
      `https://demo1react-a5250-default-rtdb.firebaseio.com/users/${userId}.json`,
      {
        method: "PUT",
        body: JSON.stringify(editUserCms)
      }
    ).then(() => window.location.reload());
  };

  return (
    <div className="usersInfo">
      <CmsNavbar />
      <div className="userInfoCmsFlex">
        <div className="userInfoCmsFlex-left">
          <form action="#">
            <label htmlFor="">USERNAME</label>
            <input
              value={usernameCmsInput}
              onChange={(e) => setUsernameCmsInput(e.target.value)}
              type="text"
              placeholder="username:"
            />

            <label htmlFor="">PHONE NUMBER</label>
            <input
              value={phoneNumberCmsInput}
              onChange={(e) => setPhoneNumberCmsInput(e.target.value)}
              type="text"
              placeholder="phone number:"
            />

            <label htmlFor="">EMAIL</label>
            <input
              value={emailCmsInput}
              onChange={(e) => setEmailCmsInput(e.target.value)}
              type="text"
              placeholder="email:"
            />

            <label htmlFor="">PASSWORD</label>
            <input
              value={passwordCmsInput}
              onChange={(e) => setPasswordCmsInput(e.target.value)}
              type="text"
              placeholder="password:"
            />

            <label htmlFor="">USERIMAGE</label>
            <input
              value={userImageCmsInput}
              onChange={(e) => setUserImageCmsInput(e.target.value)}
              type="text"
              placeholder="user image:"
            />

            <div className="userInfoCmsFormBtns">
              <div
                onClick={() => editUserHandle()}
                className="userInfoCmsFormBtn"
              >
                <EditIcon style={{ fontSize: 34 }} />
              </div>
              <div
                onClick={() => deleteUserHandle()}
                className="userInfoCmsFormBtn"
              >
                <DeleteIcon style={{ fontSize: 34 }} />
              </div>
              <div
                onClick={() => registerUserHandle()}
                className="userInfoCmsFormBtn"
              >
                <DoneOutlineIcon style={{ fontSize: 34 }} />
              </div>
            </div>
          </form>
        </div>
        <div className="userInfoCmsFlex-right">
          <input
            onChange={(e) => setUserSearchInput(e.target.value)}
            type="text"
            placeholder="search users:"
          />
          <div className="usersCmsList">
            {usersFind
              ? usersFind.map((user) => (
                  <div
                    onClick={() => selectUser(user)}
                    key={user[0]}
                    className="usersCmsListItem"
                  >
                    <div className="describeUsersCmsListItem">
                      <p className="username-describeUsersCmsListItem">
                        Username:<span>{user[1].userName}</span>
                      </p>
                      <p className="username-describeUsersCmsListItem">
                        Phone number:<span>{user[1].phoneNumber}</span>
                      </p>
                      <p className="username-describeUsersCmsListItem">
                        Email:<span>{user[1].email}</span>
                      </p>
                      <p className="username-describeUsersCmsListItem">
                        Password:<span>{user[1].password}</span>
                      </p>
                    </div>
                    <div
                      style={{ background: `url(${user[1].imageSrc})` }}
                      className="imageUsersCmsListItem"
                    ></div>
                  </div>
                ))
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
}
