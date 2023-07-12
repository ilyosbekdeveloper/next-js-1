import React, { useState } from "react";
import Saidbar from "../../../pages/saidbar";
import Main from "../../../pages/main";

const Layout = ({ children }) => {
  const [isHide, setIsHide] = useState(true);
  const toggleHide = () => {
    setIsHide(!isHide);
  };
  return (
    <div className="wrapper">
      <div className="saidbar">
        <Saidbar isHide={isHide} setIsHide={toggleHide} />
      </div>
      <div style={{ marginLeft: isHide ? "300px" : "100px" }}>
        {children}
        </div>
    </div>
  );
};

export default Layout;
