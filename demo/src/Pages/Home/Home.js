import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import "./Home-media.css";
import SiteModals from "../../component/tools/Modals/Modals";
import ProductSlider from "../../component/ProductSlider/ProductSlider";

export default function Home() {
  const [closeLoginModal, setCloseLoginModal] = useState(false);

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
              <div
                onClick={() => setCloseLoginModal(true)}
                className="loginBtn"
              >
                Login
              </div>

              <Link to="/about" className="link">
                <div onClick={() => window.scrollTo(0, 0)} className="moreBtn">
                  More...
                </div>
              </Link>
            </div>
          </div>

          <div className="homeRight"></div>
        </div>
        <ProductSlider/>
      </div>

      <SiteModals
        closeLoginModal={closeLoginModal}
        setCloseLoginModal={setCloseLoginModal}
      />
    </>
  );
}
