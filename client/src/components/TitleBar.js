import React from "react";
import "../assets/css/homeButton.css";

function TitleBar(props) {
  return (
    <div>
      <div className="row headerWrapper">
        <div className="col-auto text-center">
          <a href="/">
            <h1 className="montserrat-medium buttonsButton homeButton hover-underline">
              home
            </h1>
          </a>
        </div>
        <div className="col no-margin no-padding"></div>
        <div className="col-auto text-center">
          <button
            id="backButton"
            onClick={() => console.log(window.history.back(-1))}
            href="#"
          >
            <h1 className="montserrat-medium buttonsButton backButton hover-underline">
              back
            </h1>
          </button>
        </div>
      </div>
      <div className="row no-margin no-padding">
        <div className="col text-center">
          {props.title ? (
            <h1 id="title" className="montserrat-medium">
              {props.title}
            </h1>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default TitleBar;
