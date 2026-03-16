import type { CSSProperties } from "react";

const firstName = "Hollow";
const lastName = "Knight";

const favoriteGames = ["Elden Ring", "RDR2", "Minecraft"];
const isActive = true;

const address = {
  zipCode: "760000",
  city: "Cali",
};

const myStyles: CSSProperties = {
  backgroundColor: isActive ? "green" : "red",
  borderRadius: 10,
  padding: 10,
};

export const MyAwesomeApp = () => {
  return (
    <>
      <h1>{firstName}</h1>
      <h3>{lastName}</h3>

      <p>{favoriteGames.join(", ")}</p>
      <p>{2 + 2}</p>

      <h2>{isActive ? "Activo" : "No activo"}</h2>
      <p style={myStyles}>{JSON.stringify(address)}</p>
    </>
  );
};
