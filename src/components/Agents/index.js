import axios from "axios";
import React, { useEffect, useState } from "react";
import AgentsCard from "./AgentsCard";
import "./index.scss";
import AgentsView from "./AgentView";
const Agents = () => {
  const [agent, setAgent] = useState([]);
  useEffect(() => {
    axios(`https://fakestoreapi.com/products`).then((res) =>
      setAgent(res.data)
    );
  }, []);
  console.log(agent);

  return (
    <>
    <AgentsView/>
      <div id="agents">
        <div className="container">
          <div className="agents">
            {agent.map((el) => (
              <AgentsCard el={el} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Agents;
