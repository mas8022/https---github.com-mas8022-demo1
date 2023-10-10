import React from "react";
import "./Footer.css";
import "./Footer-media.css";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import NS from "../NS/NS";
export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="leftFooter">
          <h2>Irannet the best training academy</h2>
          <div className="footerList">
            <ul>
              <li>Home</li>
              <li>New Product</li>
              <li>My Basket</li>
              <li>Profile</li>
              <li>About</li>
            </ul>
            <ul>
              <li>Direction</li>
              <li>Location</li>
              <li>Rezome</li>
              <li>Information</li>
              <li>Get Master</li>
            </ul>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, ipsa
            repellat. Eum reiciendis laudantium nam aut sed error fugit dolores
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Doloremque, facilis!
          </p>
        </div>

        <div className="footerHr"></div>

        <div className="rightFooter">
          <img className="footerMap" src="" alt="" />
          <div className="footerHr footerHr2"></div>
          <div className="socialMediaFooter">
            <TelegramIcon
              className="socialMediaFooterIcons"
              style={{ fontSize: 36 }}
            />
            <InstagramIcon
              className="socialMediaFooterIcons"
              style={{ fontSize: 36 }}
            />
            <TwitterIcon
              className="socialMediaFooterIcons"
              style={{ fontSize: 36 }}
            />
            <YouTubeIcon
              className="socialMediaFooterIcons"
              style={{ fontSize: 36 }}
            />
          </div>
        </div>
      </div>
      <NS/>
    </>
  );
}
