import React from "react";

const TeamDetails = (props) => {
  const { playerName } = props.player;
  console.log(playerName);
  return (
    <div>
      <h2>Player Name: {playerName}</h2>
    </div>
  );
};

export default TeamDetails;
