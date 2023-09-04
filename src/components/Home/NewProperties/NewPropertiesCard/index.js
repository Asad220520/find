import React from "react";
import './index.scss'
const NewPropertiesCard = ({ el }) => {
  return (
    <div className="newPropertiesCard">
      <div class="newPropertiesCard__img">
        <img src={el.image} alt="" />
      </div>
      <div className="newPropertiesCard__title">
        <h1>{el.title.slice(0,15)}</h1>
        <div className="newPropertiesCard__title-price">
          <p>{el.price}</p>
          <span>${el.price}</span>
        </div>
      </div>
    </div>
  );
};

export default NewPropertiesCard;
