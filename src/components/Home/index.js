import React from "react";
import homeimg from "../../img/Image.png";
import "./index.scss";
import { FiSearch } from "react-icons/fi";
import Easy from "./Easy";
import NewProperties from "./NewProperties";
import Meet from "./Meet";

const Home = () => {
  return (
    <>
      <div id="home">
        <div className="container">
          <div className="home">
            <div className="home__img">
              <img src={homeimg} alt="" />
            </div>
            <h1>Let’s find a perfect home for you!</h1>
            <div className="home__block">
              <div className="home__block-wr">
                <ul className="button">
                  <li className="button__item">
                    <button>Rent</button>
                    <button>Buy</button>
                  </li>
                  <li className="button__item">
                    <select>
                      <option value="Property type">Property type</option>
                    </select>
                    <select>
                      <option value="Rooms">Rooms</option>
                    </select>
                    <select>
                      <option value="Price">Price</option>
                    </select>
                  </li>
                </ul>
                <div className="home__block-wr-input">
                  <input
                    placeholder="Enter an address or city "
                    type="search"
                  />
                  <button>
                    <FiSearch size={"20px"} /> Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Easy/>
      <NewProperties/>
      <Meet/>
    </>
  );
};

export default Home;
