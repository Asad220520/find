import React from "react";
import img from "../../../img/Rectangle.png";
import "./index.scss";
const Easy = () => {
  return (
    <div id="easy">
      <div className="container">
        <div className="easy">
          <h1 className="h1">Easy Home Search</h1>
          <p className="p">We can help you to find your dream home</p>
          <div className="easy__wrap">
            <div className="easy__wrap-block">
              <img src={img} alt="" />
              <div className="easy__wrap-block-cart">
                <h1>Find your SuperAgent</h1>
                <p>
                  The most responsive agents with up-to-date and improved
                  accuracy on the properties you are searching for.
                </p>
              </div>
            </div>
            <div className="easy__wrap-block">
              <img src={img} alt="" />
              <div className="easy__wrap-block-cart">
                <h1>Find your SuperAgent</h1>
                <p>
                  The most responsive agents with up-to-date and improved
                  accuracy on the properties you are searching for.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Easy;
