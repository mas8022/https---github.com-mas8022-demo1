import React, { useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import routesArray from "./routes";
import { siteContext } from "./Context";
import Footer from "./component/Footer/Footer";
import Loader from "./component/Loader/Loader";
import ThemSite from "./component/tools/ThemSite/ThemSite";

function App() {
  let routes = useRoutes(routesArray);
  const [newUserInfo, setNewUserInfo] = useState([]);
  const [productAdded, setProductAdded] = useState(() => {
    const storedCount = JSON.parse(localStorage.getItem("productAdd"));
    return storedCount ? storedCount : [];
  });
  const [coursesArray, setCoursesArray] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetch("https://demo1react-a5250-default-rtdb.firebaseio.com/product.json")
      .then((res) => res.json())
      .then((data) => {
        setCoursesArray(Object.entries(data));
        setLoader(false);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem("productAdd", JSON.stringify(productAdded));
  }, [productAdded]);

  return (
    <siteContext.Provider
      value={{
        newUserInfo,
        setNewUserInfo,
        productAdded,
        setProductAdded,
        coursesArray,
      }}
    >
      <div className="App">
        <Loader loader={loader} />
        <Navbar />
        {routes}
        <Footer />
        <ThemSite/>
      </div>
    </siteContext.Provider>
  );
}

export default App;
