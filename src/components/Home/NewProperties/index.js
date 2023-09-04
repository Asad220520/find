import axios from "axios";
import React, { useEffect, useState } from "react";
import NewPropertiesCard from "./NewPropertiesCard";
import "./index.scss";
const NewProperties = () => {
  const [card, setCard] = useState([]);
  useEffect(() => {
    axios(`https://fakestoreapi.com/products`).then((res) => setCard(res.data));
  }, []);
  return (
    <div id="newProperties">
      <div className="container">
        <div className="newProperties">
          <div className="newProperties__title">
            <h1>Explore the New Properties</h1>
            <div className="newProperties__title-select">
              <select>
                <option value="dfs">Recently added</option>
              </select>
              <button>See more</button>
            </div>
          </div>
          <div className="newProperties__cards">
            {card.map((el) => (
              <NewPropertiesCard el={el} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProperties;
