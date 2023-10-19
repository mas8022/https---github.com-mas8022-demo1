import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import "./Navbar-medi.css";
import { Link, NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import InventoryIcon from "@mui/icons-material/Inventory";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import InfoIcon from "@mui/icons-material/Info";

export default function Navbar() {
  const [searchInput, setSearchInput] = useState("");
  const [showCoursesListArray, setShowCoursesListArray] = useState([]);
  const sgList = useRef(null);
  const [productsArrayNavbar, setProductsArrayNavbar] = useState([]);

  useEffect(() => {
    function closeSgListSearchBarHandle(event) {
      if (sgList.current && !sgList.current.contains(event.target)) {
        setShowCoursesListArray([]);
      }
    }

    document.addEventListener("click", closeSgListSearchBarHandle);

    return () => {
      document.removeEventListener("click", closeSgListSearchBarHandle);
    };
  }, []);

  const scrollUp = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    let showCoursesList = productsArrayNavbar.filter((item) => {
      if (searchInput) {
        return item[1].courseNameCms
          .toLowerCase()
          .trim()
          .includes(searchInput.toLowerCase().trim());
      }
    });

    setShowCoursesListArray(showCoursesList);
  }, [searchInput]);

  const sgItemHandler = () => {
    window.scrollTo(0, 0);
    setSearchInput("");
  };

  useEffect(() => {
    fetch("https://demo1react-a5250-default-rtdb.firebaseio.com/product.json")
      .then((res) => res.json())
      .then((data) => setProductsArrayNavbar(Object.entries(data)));
  }, []);

  return (
    <div className="momNav">
      <div className="nav">
        <div className="navLeft"></div>

        <div className="searchBar">
          <Link
            onClick={() => setSearchInput("")}
            to={
              showCoursesListArray.length
                ? `/ShowCourse/:${showCoursesListArray[0][1].courseNameCms}`
                : "/"
            }
          >
            <SearchIcon className="searchIcon" style={{ fontSize: 36 }} />
          </Link>
          <input
            className="searchInput"
            type="text"
            placeholder="search course"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>

        <ul className="navRight">
          <NavLink onClick={() => scrollUp()} to="/" className={(link) => link.isActive ? 'navBarItemActive link' : 'link'} >
            <li>HOME</li>
          </NavLink>
          <NavLink onClick={() => scrollUp()} to="/product" className={(link) => link.isActive ? 'navBarItemActive link' : 'link'} >
            <li>PRODUCT</li>
          </NavLink>

          <NavLink onClick={() => scrollUp()} to="/myBasket" className={(link) => link.isActive ? 'navBarItemActive link' : 'link'} >
            <li>MYBASKET</li>
          </NavLink>
          <NavLink onClick={() => scrollUp()} to="/profile" className={(link) => link.isActive ? 'navBarItemActive link' : 'link'}>
            <li>PROFILE</li>
          </NavLink>

          <NavLink onClick={() => scrollUp()} to="/about" className={(link) => link.isActive ? 'navBarItemActive link' : 'link'} >
            <li>ABOUT</li>
          </NavLink>
        </ul>
        <Link
          onClick={() => scrollUp()}
          to="/profile"
          className="link ProfileNav"
        >
          <div
            style={{
              background:
                "url('https://centrechurch.org/wp-content/uploads/2022/03/img-person-placeholder.jpeg')",
            }}
            className="profile"
          ></div>
        </Link>

        <ul className="bottomBar">
          <NavLink onClick={() => scrollUp()} to="/" className={(link) => link.isActive ? 'navBarItemActive link' : 'link'}>
            <HomeIcon style={{ fontSize: 36 }} />
          </NavLink>
          <NavLink onClick={() => scrollUp()} to="/product" className={(link) => link.isActive ? 'navBarItemActive link' : 'link'}>
            <InventoryIcon style={{ fontSize: 36 }} />
          </NavLink>

          <NavLink onClick={() => scrollUp()} to="/myBasket" className={(link) => link.isActive ? 'navBarItemActive link' : 'link'}>
            <ShoppingBasketIcon style={{ fontSize: 36 }} />
          </NavLink>
          <NavLink onClick={() => scrollUp()} to="/about" className={(link) => link.isActive ? 'navBarItemActive link' : 'link'}>
            <InfoIcon style={{ fontSize: 36 }} />
          </NavLink>
        </ul>
      </div>

      <div
        ref={sgList}
        className={`${
          showCoursesListArray.length
            ? "suggestionList activeSuggestionList"
            : "suggestionList closeSuggestionList"
        }`}
      >
        {showCoursesListArray.map((product) => (
          <Link
            onClick={() => sgItemHandler()}
            className="link"
            to={`/ShowCourse/:${product[1].courseNameCms}`}
          >
            <div key={product[0]} className="itemSuggestionList">
              <img src={product[1].imageCourseSrcCms} alt="ProductImage" />
              <p className="courseNameList">{product[1].courseNameCms}</p>
              <p className="masterNameList">{product[1].masterNameCms}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
