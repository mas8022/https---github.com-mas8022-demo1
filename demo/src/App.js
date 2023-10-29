import React, { useEffect, useLayoutEffect, useState } from "react";
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
  const [newUserInfo, setNewUserInfo] = useState(() => {
    let newUserLogin = JSON.parse(localStorage.getItem("user"));
    return newUserLogin ? newUserLogin : {};
  });
  const [productAdded, setProductAdded] = useState(() => {
    let storedCount = JSON.parse(localStorage.getItem("productAdd"));

    const uniqueObjects = [];
    const keySet = new Set();
    if (storedCount) {
      storedCount.forEach((obj) => {
        const key = obj.courseNameCms;
        if (!keySet.has(key)) {
          keySet.add(key);
          uniqueObjects.push(obj);
        }
      });
    }

    return uniqueObjects ? uniqueObjects : [];
  });

  const [coursesArray, setCoursesArray] = useState([]);
  const [loader, setLoader] = useState(false);
  const [flagLogin, setFlagLogin] = useState(() => {
    const localFlagLogin = JSON.parse(localStorage.getItem("flagLogin"));
    return localFlagLogin === undefined || !localFlagLogin ? false : true;
  });

  useEffect(() => {
    localStorage.setItem("flagLogin", JSON.stringify(flagLogin));
  }, [flagLogin]);

  useEffect(() => {
    fetch("https://demo1react-a5250-default-rtdb.firebaseio.com/product.json")
      .then((res) => res.json())
      .then((data) => {
        setCoursesArray(Object.entries(data));
        setLoader(false);
      });
  }, []);

  useLayoutEffect(() => {
    const uniqueProduct = [];
    const keysSet = new Set();

    productAdded.forEach((obj) => {
      const keys = obj.courseNameCms;
      if (!keysSet.has(keys)) {
        keysSet.add(keys);
        uniqueProduct.push(obj);
      }
    });
    if (uniqueProduct) {
      localStorage.setItem("productAdd", JSON.stringify(uniqueProduct));
    }
  }, [productAdded]);

  return (
    <siteContext.Provider
      value={{
        newUserInfo,
        setNewUserInfo,
        productAdded,
        setProductAdded,
        coursesArray,
        flagLogin,
        setFlagLogin,
      }}
    >
      <div className="App">
        <Loader loader={loader} />
        <Navbar />
        {routes}
        <Footer />
        <ThemSite />
      </div>
    </siteContext.Provider>
  );
}

export default App;
