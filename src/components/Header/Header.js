import React, { useContext } from "react";
import { TeamContext } from "../../App";

const Header = () => {
  const [team, setTeam] = useContext(TeamContext);
  return (
    <div>
      <h1>Over View: {team} </h1>
      <button onClick={() => setTeam("Real Madrid")}>Rank 1</button>
      <button onClick={() => setTeam("Barcelona")}>Rank 2</button>
      <button onClick={() => setTeam("Atletico Madrid")}>Rank 3</button>
    </div>
  );
};

export default Header;
