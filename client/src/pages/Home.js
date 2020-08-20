import React from "react";
import Circles from "../components/Circles";
import "../assets/css/homePage.css";

function Home(props) {
  return (
    <div>
      <div className="three-margin verticalCenter">
        <header className="header container-fluid no-padding no-margin row">
          <h1 className="montserrat-medium homePageTitle">kaspar poland</h1>
        </header>
        <br />
        <ul className="navMenu montserrat-medium">
          <hr className="showForSmallScreen pageDivider" />
          <a href="../projects">
            <li className="max-width hover-underline text-left pageLink">
              my creations
            </li>
          </a>
          <hr className="showForSmallScreen pageDivider" />
          <a href="../updates">
            <li className="max-width hover-underline text-left pageLink">
              recent updates
            </li>
          </a>
          <hr className="showForSmallScreen pageDivider" />
          <a href="../contact-me">
            <li className="max-width hover-underline text-left pageLink">
              contact me
            </li>
          </a>
        </ul>
      </div>
      <Circles />
    </div>
  );
}

export default Home;
