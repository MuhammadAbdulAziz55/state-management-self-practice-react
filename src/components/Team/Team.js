import React, { useContext, useEffect, useState } from "react";
import { TeamContext } from "../../App";
import TeamDetails from "../TeamDetails/TeamDetails";

const allTeamInfo = [
  { team: "Real Madrid", playerName: "Karim Benzama" },
  { team: "Real Madrid", playerName: "Cristino Ronaldo" },
  { team: "Real Madrid", playerName: "Ramos" },
  { team: "Barcelona", playerName: "Messi" },
  { team: "Barcelona", playerName: "Dani Albes" },
  { team: "Barcelona", playerName: "Suares" },
  { team: "Atletico Madrid", playerName: "abc " },
  { team: "Atletico Madrid", playerName: "efg" },
  { team: "Atletico Madrid", playerName: "ijk" },
];

const Team = () => {
  const [team] = useContext(TeamContext);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const matchedPlayer = allTeamInfo.filter((tm) => tm.team === team);
    setPlayers(matchedPlayer);
  }, [team]);

  return (
    <div>
      <h1>Team: {team}</h1>
      {players.map((pl) => (
        <TeamDetails player={pl} />
      ))}
    </div>
  );
};

export default Team;
