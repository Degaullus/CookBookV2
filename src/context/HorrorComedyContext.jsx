import { createContext, useState } from "react";

export const HorrorComedyContext = createContext();

export default function HorrorComedyContextProvider(props) {
  const [isComedyTheme, setIsComedyTheme] = useState(true);

  const [comedy, setComedy] = useState({
    text: "#eee",
    backgroundMain: "#ecc101",
    uiOne: "#861d14",
    uiTwo: "#694204",
  });

  const [horror, setHorror] = useState({
    text: "#eee",
    backgroundMain: "#000000",
    uiOne: "#000",
    uiTwo: "#ea1212",
  });

  const toggleTheme = () => {
    setIsComedyTheme(!isComedyTheme);
  };

  return (
    <HorrorComedyContext.Provider
      value={{ isComedyTheme, comedy, horror, toggleTheme }}
    >
      {props.children}
    </HorrorComedyContext.Provider>
  );
}
