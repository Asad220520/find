import React from 'react'
import { CiSearch } from "react-icons/ci";
import './index.scss'
const AgentsView = () => {
  return (
    <section id="agentsView">
      <div className="container">
        <div className="agentsView">
          <h1>Find your agent to find your home</h1>
          <div className="agentsView__block">
            <div className="agentsView__block--search">
              <input
                className="none"
                placeholder="Enter an address or city "
                type="text"
              />
              <div className="agentsView__block--search-icon">
                <input
                  placeholder="Name or the location of the agent"
                  type="text"
                />
                <button>
                  <CiSearch className="icon" /> Search
                </button>
              </div>
            </div>
            <select className="section0">
              <option>Language</option>
            </select>
            <select className="section2">
              <option>Natinality</option>
            </select>
            <div className="section">
              <select className="sec">
                <option>Language</option>
              </select>
              <select className="sec">
                <option>Service</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AgentsView;