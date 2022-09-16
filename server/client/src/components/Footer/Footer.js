import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer_container">
        <div className="left_footer">
          <h1 className="footer_logo">
            My<span className="footer_logo_blue">Todo</span>List
          </h1>
        </div>
        <div className="right_footer">This app is to track todo lists</div>
      </div>
      <div className="bottom_footer">Copyright &copy; , Jonghan Park</div>
    </footer>
  );
};

export default Footer;
