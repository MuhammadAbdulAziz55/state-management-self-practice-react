import { createContext, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

export const TeamContext = createContext();

function App() {
  const [team, setTeam] = useState("Real Madrid");
  return (
    <TeamContext.Provider value={[team, setTeam]}>
      <h3>team: {team}</h3>
      <Header />
      <Home />
    </TeamContext.Provider>
  );
}

export default App;
