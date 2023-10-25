import React, { useEffect } from "react";
import "./ThemSite.css";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function ThemSite() {
  let flagThem = true;

  const themModeHandle = () => {
    localStorage.setItem("them", JSON.stringify(flagThem));
    if (flagThem) {
      document.documentElement.style.setProperty("--first-color", "#000");
      document.documentElement.style.setProperty("--second-color", "#0b525b");
      document.documentElement.style.setProperty("--shadow-color", "#fff");
      flagThem = false;
    } else {
      document.documentElement.style.setProperty("--first-color", "#fff");
      document.documentElement.style.setProperty("--second-color", "#4361ee");
      document.documentElement.style.setProperty("--shadow-color", "#000");
      flagThem = true;
    }
  };

  useEffect(() => {
    flagThem = JSON.parse(localStorage.getItem("them"));
    if (flagThem) {
      document.documentElement.style.setProperty("--first-color", "#000");
      document.documentElement.style.setProperty("--second-color", "#0b525b");
      document.documentElement.style.setProperty("--shadow-color", "#fff");
      flagThem = false;
    } else {
      document.documentElement.style.setProperty("--first-color", "#fff");
      document.documentElement.style.setProperty("--second-color", "#4361ee");
      document.documentElement.style.setProperty("--shadow-color", "#000");
      flagThem = true;
    }
  }, []);

  return (
    <div className="them" onClick={() => themModeHandle()}>
      <DarkModeIcon style={{ fontSize: 36 }} />
    </div>
  );
}
