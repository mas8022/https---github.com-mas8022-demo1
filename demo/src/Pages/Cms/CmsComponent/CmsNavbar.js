import React, { useEffect, useState } from "react";
import "./CmsNavbar.css";
import "./CmsNavbar-media.css";
import { Link, NavLink } from "react-router-dom";

export default function CmsNavbar() {

  return (
    <div className="CmsNavbar">
      <Link to="/" className="link">
        <div className="logoCmsNavBar"></div>
      </Link>

      <div className="CmsNavbarBtns">
        <NavLink className={(link) => link.isActive ? 'selectCmsPageActive link' : 'link'} to="/cmsProduct" >
          <div>Add Product</div>
        </NavLink>
        <NavLink className={(link) => link.isActive ? 'selectCmsPageActive link' : 'link'} to="/usersInfo" >
          <div>Users Info</div>
        </NavLink>
      </div>

      <div
        className="managerProfile"
        style={{
          background:
            "url('https://previews.123rf.com/images/apoev/apoev2107/apoev210700033/171405527-default-avatar-photo-placeholder-gray-profile-picture-icon-business-man-illustration.jpg')",
        }}
      ></div>
    </div>
  );
}
