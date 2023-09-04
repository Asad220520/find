import React from "react";
import './index.scss'
import { Link } from "react-router-dom";
const AgentsCard = ({ el }) => {
  return (
    <div className="agentsCard">
      <div className="agentsCard__img">
        <img src={el.image} alt="" />
      </div>
      <div className="agentsCard__title">
        <h1>{el.title.slice(0, 20)}</h1>
        <p>{el.category}</p>
      <Link className="linkbtn">
        <button>
          <svg
            width="22"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ verticalAlign: "middle", marginRight: "5px" }}
          >
            <rect width="32" height="32" rx="16" fill="#1B76F9" />
            <path
              d="M16 11C18.1217 11 20.1566 11.8429 21.6569 13.3432C23.1571 14.8435 24 16.8783 24 19C24 21.1218 23.1571 23.1566 21.6569 24.6569C20.1566 26.1572 18.1217 27 16 27C13.8783 27 11.8434 26.1572 10.3431 24.6569C8.84285 23.1566 8 21.1218 8 19C8 16.8783 8.84285 14.8435 10.3431 13.3432C11.8434 11.8429 13.8783 11 16 11ZM16 14.5L14.677 17.18L11.72 17.61L13.86 19.695L13.355 22.641L16 21.25L18.645 22.64L18.14 19.695L20.28 17.609L17.323 17.179L16 14.5ZM17 5.99902L22 6.00002V9.00002L20.637 10.138C19.5059 9.54461 18.2711 9.17486 17 9.04902V6.00002V5.99902ZM15 5.99902V9.04902C13.7293 9.17467 12.4948 9.54408 11.364 10.137L10 9.00002V6.00002L15 5.99902Z"
              fill="white"
            />
          </svg>
          <span>SUPERAGENT</span>
        </button>
      </Link>
      </div>
      
    </div>
  );
};

export default AgentsCard;
