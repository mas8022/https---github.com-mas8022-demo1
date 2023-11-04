import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import "./Home-media.css";
import SiteModals from "../../component/tools/Modals/Modals";
import ProductSlider from "../../component/ProductSlider/ProductSlider";
import { siteContext } from "../../Context";
export default function Home() {
  const [closeLoginModal, setCloseLoginModal] = useState(false);
  const homeContext = useContext(siteContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("user"))) {
      let userCopy = JSON.parse(localStorage.getItem("user"));
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageDataUrl = e.target.result;
        userCopy.imageSrc = imageDataUrl
        localStorage.setItem('user', JSON.stringify(userCopy))
      };
    }
  }, []);

  return (
    <>
      <div className="mom-home">
        <div className="home">
          <div className="homeLeft">
            <div className="welcomeTitle">
              <h3>Welcome to our Academy</h3>
            </div>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis
              earum quisquam similique fuga amet necessitatibus eveniet in,
              animi laboriosam a, recusandae quas modi quod aliquid
              reprehenderit atque sapiente aut dolore iste! Id aperiam tenetur
              mollitia sapiente voluptatem quae. Obcaecati vel officiis maiores
              alias eveniet consequatur distinctio repellat illo sequi ipsa.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              harum quas enim nesciunt iste eveniet inventore dolorum, beatae
              quis distinctio. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Libero doloremque beatae repellendus autem
              itaque at dicta aperiam, laborum optio iusto quis deleniti
              molestias, minus aliquam deserunt maxime quia dignissimos odio qui
              aspernatur quas facere debitis ut? Est at assumenda provident?
            </p>
            <ul>
              <li>Lorem ipsum dolor Lorem, ipsum.</li>
              <li>Lorem ipsum dolor sit.lorem Lorem, ipsum dolor.</li>
              <li>Lorem ipsum dolor sit.lorem</li>
              <li>Lorem ipsum dolor sit.lorem</li>
            </ul>

            <div className="homeBtns">
              <Link to="/about" className="link">
                <div onClick={() => window.scrollTo(0, 0)} className="moreBtn">
                  More...
                </div>
              </Link>
              <div
                onClick={() => setCloseLoginModal(true)}
                className={
                  !homeContext.flagLogin ? "loginBtn" : "loginBtnDeActive"
                }
              >
                Login
              </div>
            </div>
          </div>

          <div className="homeRight"></div>
        </div>
        {homeContext.coursesArray.length !== 0 ? <ProductSlider /> : null}
        
      </div>

      <SiteModals
        mode="login"
        closeLoginModal={closeLoginModal}
        setCloseLoginModal={setCloseLoginModal}
      />
    </>
  );
}
