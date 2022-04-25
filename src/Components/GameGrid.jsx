import { useEffect } from "react";
import Grid from "@mui/material/Grid";
import CardElement from "./CardElement";
import { CardGameContext } from "./CardGame";
import { useContext } from "react";

const GameGrid = () => {
  const {
    cardOrder
  } = useContext(CardGameContext)

  return (
    <Grid container spacing={{ xs: 2 }}>
      {cardOrder.map((letter, index) => (
        <Grid item xs={4} sm={3} md={2} key={index}>
          <CardElement letter={letter} />
        </Grid>
      ))}
    </Grid>
  );
}

export default GameGrid
