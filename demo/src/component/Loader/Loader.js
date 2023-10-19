import React, { useState } from "react";
import "./Loader.css";

export default function Loader({ loader }) {
  const [titleLoader, setTitleLoader] = useState(false);

  setTimeout(() => {
    setTitleLoader(true);
  }, 4000);

  return (
    <div className={loader ? "loader-container" : "loaderClose"}>
      <div className="loader"></div>
      <h3 className={titleLoader ? "loaderTitleActive" : 'loader-container h3'}>please enter with vpn</h3>
    </div>
  );
}
