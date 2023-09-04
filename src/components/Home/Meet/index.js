import axios from "axios";
import React, { useEffect, useState } from "react";
import "./index.scss";
import MeetCard from "./MeetCard";
import { Link } from "react-router-dom";
const Meet = () => {
  const [card, setCard] = useState([]);
  useEffect(() => {
    axios(`https://fakestoreapi.com/products`).then((res) => setCard(res.data));
  }, []);
  return (
    <div id="newProperties">
      <div className="container">
        <div className="newProperties">
          <div className="newProperties__title">
            <h1>Meet our SuperAgents</h1>
            <div className="newProperties__title-select">
              <button>See more</button>
            </div>
          </div>
          <div className="newProperties__cards">
            {card.map((el) => (
              <MeetCard el={el} />
            ))}
          </div>
          <div className="meet--list">
            <h2>List your property with us</h2>
            <p>Grow your business with property finder</p>
            <Link to={"/login"}>
              <button>Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meet;
