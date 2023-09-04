import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import logo from "../../img/Logo.svg";
const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <Link to={"/"} className="header__log">
            <img src={logo} alt="logo" />
          </Link>
          <nav className="nav">
            <ul className="menu">
              <li className="menu__item">
                <NavLink to={"/buy"}>Buy</NavLink>
                <NavLink to={"/rent"}>Rent</NavLink>
                <NavLink to={"/agents"}>Agents</NavLink>
                <NavLink to={"/reviews"}>Reviews</NavLink>
              </li>
            </ul>
          </nav>
          <div className="header__btn">
            <select>
              <option value="as">English</option>
              <option value="as">Russian</option>
            </select>
            <button>Log in</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
