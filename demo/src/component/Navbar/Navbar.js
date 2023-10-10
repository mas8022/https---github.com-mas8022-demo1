import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import "./Navbar-medi.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import InventoryIcon from "@mui/icons-material/Inventory";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import InfoIcon from "@mui/icons-material/Info";
import courses from "../../dataBase";
export default function Navbar() {
  const [searchInput, setSearchInput] = useState("");
  const [showCoursesListArray, setShowCoursesListArray] = useState([]);
  const sgList = useRef(null);
  const [productFind, setProductFind] = useState({});
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
    let showCoursesList = courses.filter((item) => {
      if (searchInput) {
        return item.courseName
          .toLowerCase()
          .trim()
          .includes(searchInput.toLowerCase().trim());
      }
    });

    setShowCoursesListArray(showCoursesList);
  }, [searchInput]);


  return (
    <div className="momNav">
      <div className="nav">
        <div className="navLeft"></div>

        <div className="searchBar">
          <Link
            onClick={() => setSearchInput("")}
            to={showCoursesListArray.length ? `/ShowCourse/:${showCoursesListArray[0].courseName}` : '/'}
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
          <Link onClick={() => scrollUp()} to="/" className="link">
            <li>HOME</li>
          </Link>
          <Link onClick={() => scrollUp()} to="/product" className="link">
            <li>PRODUCT</li>
          </Link>

          <Link onClick={() => scrollUp()} to="/myBasket" className="link">
            <li>MYBASKET</li>
          </Link>
          <Link onClick={() => scrollUp()} to="/profile" className="link">
            <li>PROFILE</li>
          </Link>

          <Link onClick={() => scrollUp()} to="/about" className="link">
            <li>ABOUT</li>
          </Link>
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
          <Link onClick={() => scrollUp()} to="/" className="link">
            <HomeIcon style={{ fontSize: 36 }} />
          </Link>
          <Link onClick={() => scrollUp()} to="/product" className="link">
            <InventoryIcon style={{ fontSize: 36 }} />
          </Link>

          <Link onClick={() => scrollUp()} to="/myBasket" className="link">
            <ShoppingBasketIcon style={{ fontSize: 36 }} />
          </Link>
          <Link onClick={() => scrollUp()} to="/about" className="link">
            <InfoIcon style={{ fontSize: 36 }} />
          </Link>
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
            onClick={() => setSearchInput("")}
            className="link"
            to={`/ShowCourse/:${product.courseName}`}
          >
            <div key={product.id} className="itemSuggestionList">
              <img src={product.image} alt="ProductImage" />
              <p className="courseNameList">{product.courseName}</p>
              <p className="masterNameList">{product.masterName}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
