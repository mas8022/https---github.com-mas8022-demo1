import React, { useEffect, useState } from "react";
import "./ThemSite.css";
import "./ThemSite-media.css";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function ThemSite() {
  const [flagThem, setFlagThem] = useState(() => {
    return JSON.parse(localStorage.getItem("them")) || false;
  });

  useEffect(() => {
    localStorage.setItem("them", JSON.stringify(flagThem));
  }, [flagThem]);

  const themModeHandle = () => {
    if (flagThem) {
      document.documentElement.style.setProperty("--first-color", "#fff");
      document.documentElement.style.setProperty("--second-color", "#4361ee");
      document.documentElement.style.setProperty("--shadow-color", "#000");
      if (document.querySelector(".homeRight")) {
        document.querySelector(".homeRight").classList.remove("homeRightDark");
      }
      setFlagThem(false);
    } else {
      document.documentElement.style.setProperty("--first-color", "#000");
      document.documentElement.style.setProperty("--second-color", "#0b525b");
      document.documentElement.style.setProperty("--shadow-color", "#fff");
      if (document.querySelector(".homeRight")) {
        document.querySelector(".homeRight").classList.add("homeRightDark");
      }
      setFlagThem(true);
    }
  };

  useEffect(() => {
    if (!flagThem) {
      document.documentElement.style.setProperty("--first-color", "#fff");
      document.documentElement.style.setProperty("--second-color", "#4361ee");
      document.documentElement.style.setProperty("--shadow-color", "#000");
      if (document.querySelector(".homeRight")) {
        document.querySelector(".homeRight").classList.remove("homeRightDark");
      }
    } else {
      document.documentElement.style.setProperty("--first-color", "#000");
      document.documentElement.style.setProperty("--second-color", "#0b525b");
      document.documentElement.style.setProperty("--shadow-color", "#fff");
      if (document.querySelector(".homeRight")) {
        document.querySelector(".homeRight").classList.add("homeRightDark");
      }
    }
  }, []);


  useEffect(() => {
    if (window.location.pathname === '/' && flagThem) {
      if (document.querySelector('.homeRight').classList.length === 1) {
        document.querySelector(".homeRight").classList.add("homeRightDark");
      }
    }
  },[window.location.pathname])


  return (
    <div className="them" onClick={() => themModeHandle()}>
      <DarkModeIcon style={{ fontSize: 36 }} />
    </div>
  );
}
