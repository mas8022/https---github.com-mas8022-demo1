import React, { useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import routesArray from "./routes";
import { siteContext } from "./Context";
import Footer from "./component/Footer/Footer";
function App() {
  let routes = useRoutes(routesArray);
  const [newUserInfo, setNewUserInfo] = useState([]);
  const [productAdded, setProductAdded] = useState([]);

  return (
    <siteContext.Provider
      value={{ newUserInfo, setNewUserInfo, productAdded, setProductAdded }}
    >
      <div className="App">
        <Navbar />
        {routes}
        <Footer />
      </div>
    </siteContext.Provider>
  );
}

export default App;
