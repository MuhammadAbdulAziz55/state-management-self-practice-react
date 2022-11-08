import React, { useContext } from "react";
import { TeamContext } from "../../App";
import Team from "../Team/Team";

const Home = () => {
  const team = useContext(TeamContext);
  return (
    <div style={{ border: "1px solid green" }}>
      <h2>This is home</h2>
      <h3>Home Team: {team}</h3>
      <Team />
    </div>
  );
};

export default Home;
