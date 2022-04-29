import { useEffect } from "react";
import Grid from "@mui/material/Grid";
import CardElement from "./CardElement";
import CardElementFlip from "./CardElementFlip";
import CardElementFlip2 from "./CardElementFlip2";
import CardElementFlip3 from "./CardElementFlip3";
import CardElementFlip4 from "./CardElementFlip4";
import { CardGameContext } from "./CardGames";
import { useContext } from "react";

const GameGrid = () => {
  const {
    cardOrder
  } = useContext(CardGameContext)

  return (
    <Grid container spacing={{ xs: 2 }}>
      {cardOrder.map((letter, index) => (
        <Grid item xs={4} sm={3} md={2} key={index}>
          <CardElementFlip4 letter={letter} />
        </Grid>
      ))}
    </Grid>
  );
}

export default GameGrid
